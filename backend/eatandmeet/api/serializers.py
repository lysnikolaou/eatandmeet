from rest_framework import serializers, fields

from .models import Event, Comment, TOPIC_CHOICES


class EventSerializer(serializers.ModelSerializer):
    topics = fields.MultipleChoiceField(choices = TOPIC_CHOICES)

    class Meta:
        model = Event
        fields = ('id', 'event_creator', 'title', 'date', 'topics', 'location', 'event_members', 'event_admins')
        read_only_fields = ('event_creator', 'id')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('event', 'user', 'date', 'text', 'id')
        read_only_fields = ('event', 'user', 'date', 'id')
