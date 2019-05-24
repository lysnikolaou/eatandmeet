from rest_framework import serializers, fields

from .models import Event, TOPIC_CHOICES



class EventSerializer(serializers.ModelSerializer):
    topics = fields.MultipleChoiceField(choices = TOPIC_CHOICES)
    class Meta:
        model = Event
        fields = ('__all__')
