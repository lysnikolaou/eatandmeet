from multiselectfield import MultiSelectField
from django.db import models

from authentication.models import User


TOPIC_CHOICES = [
        ('Politics', 'Politics'),
        ('Soccer', 'Soccer'),
        ('Films' ,'Films'),
        ('Music' ,'Music'),
    ]

PLACE_CHOICES = [
        ('Mathe Mensa', 'Mathe Mensa'),
        ('Hauptmensa', 'Hauptmensa'),
    ]


class Event(models.Model):
    title = models.CharField(max_length=32)
    date = models.DateTimeField()
    event_creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_creator', null=True)
    event_admins = models.ManyToManyField(User, related_name='event_admins', blank=True)
    event_members = models.ManyToManyField(User, related_name='event_members', blank=True)
    topics = MultiSelectField(choices=TOPIC_CHOICES)
    places = models.CharField(max_length=11, choices =PLACE_CHOICES, default ='Hauptmensa' )

    def __str__(self):
        return self.title


class Comment(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    user = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=600, default='SOME STRING')

    def __str__(self):
        return self.text
