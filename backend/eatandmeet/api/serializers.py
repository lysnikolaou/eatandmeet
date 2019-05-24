from rest_framework import serializers,fields
from django.contrib.auth.models import User

from .models import Event, TOPIC_CHOICES


class EventSerializer(serializers.ModelSerializer):
    topics = fields.MultipleChoiceField(choices = TOPIC_CHOICES)
    class Meta:
        model = Event
        fields = ('__all__')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')