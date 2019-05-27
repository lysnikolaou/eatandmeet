from rest_framework import serializers, fields

from .models import Event, Comment, TOPIC_CHOICES



class EventSerializer(serializers.ModelSerializer):
    topics = fields.MultipleChoiceField(choices = TOPIC_CHOICES)
    
    class Meta:
        model = Event
        fields = ('__all__')


class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = ('__all__')
    
