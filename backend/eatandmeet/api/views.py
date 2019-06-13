from rest_framework import viewsets

from .serializers import EventSerializer, CommentSerializer
from .models import Event, Comment
from rest_framework_extensions.mixins import NestedViewSetMixin


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)

class CommentViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return Comment.objects.filter(event=self.kwargs['event_pk'])
    serializer_class = (CommentSerializer)

