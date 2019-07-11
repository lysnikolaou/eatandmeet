from datetime import datetime

from rest_framework import generics, viewsets, status, response, permissions

from .serializers import EventSerializer, CommentSerializer
from .models import Event, Comment
from .permissions import EventPermissions, CommentPermissions
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters.filters import DateFilter



class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)
    permission_classes = (permissions.IsAuthenticated, EventPermissions,)
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('date', 'location')
    

    def get_queryset(self):
        return Event.objects.all()

    def perform_create(self, serializer):
        serializer.save(event_creator=self.request.user)


class FeedViewSet(viewsets.ModelViewSet):
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
