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

    def perform_create(self, serializer):
        serializer.save(event=Event.objects.get(id=self.kwargs['event_pk']), user=self.request.user)

    def get_queryset(self):
        return Comment.objects.filter(event=self.kwargs['event_pk'])
