from rest_framework import generics, viewsets, status, response, permissions

from .serializers import EventSerializer, CommentSerializer
from .models import Event, Comment
from .permissions import EventPermissions, CommentPermissions


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)
    permission_classes = (permissions.IsAuthenticated, EventPermissions,)

    def perform_create(self, serializer):
        serializer.save(event_creator=self.request.user)


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
