from datetime import datetime

from rest_framework import generics, viewsets, status, response, permissions

from .serializers import EventSerializer, CommentSerializer
from .models import Event, Comment
from .permissions import EventPermissions, CommentPermissions
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters.filters import DateFilter



class EventViewSet(viewsets.ModelViewSet):
    """
    The events API, which shows all the events.
    GET ../events

    Filtering for location example: 
    GET ../events/?location = Hauptmensa

    Filtering for day example:
    Get ../events/?day=2019-07-31
    """
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)
    permission_classes = (permissions.IsAuthenticated, EventPermissions,)
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('date', 'location','slots','day')
    

    def get_queryset(self):
        return Event.objects.all()

    def perform_create(self, serializer):
        serializer.save(event_creator=self.request.user)


class FeedViewSet(viewsets.ModelViewSet):
    """
    The feed API, which shows the first 5 events which are chronologically
    closest to the current day.
    GET ../feed
    """
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)
    permission_classes = (permissions.IsAuthenticated, EventPermissions,)
  
    def get_queryset(self):
        now_date = datetime.now()
        event_queryset = Event.objects.filter(date__gte=now_date).order_by('date')
        return event_queryset[:5]
    


    


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = (CommentSerializer)
    permission_classes = (CommentPermissions,)

    def create(self, request, *args, **kwargs):
        event = Event.objects.get(id=self.kwargs['event_pk'])
        if (not request.user == event.event_creator
            and request.user not in event.event_admins.all()
            and request.user not in event.event_members.all()):
            return response.Response(
                {'detail': 'Not authorized'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        return super().create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(event=Event.objects.get(id=self.kwargs['event_pk']), user=self.request.user)

    def get_queryset(self):
        return Comment.objects.filter(event=self.kwargs['event_pk'])
