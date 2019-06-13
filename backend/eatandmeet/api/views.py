from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin

from .serializers import EventSerializer, CommentSerializer
from .models import Event, Comment


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)


class CommentViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return Comment.objects.filter(event=self.kwargs['event_pk'])
    serializer_class = (CommentSerializer)
