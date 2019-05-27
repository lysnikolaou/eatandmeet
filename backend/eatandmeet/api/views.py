from rest_framework import viewsets

from .serializers import EventSerializer, CommentSerializer
from .models import Event, Comment
from rest_framework_extensions.mixins import NestedViewSetMixin


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = (CommentSerializer)

