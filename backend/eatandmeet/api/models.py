from multiselectfield import MultiSelectField
from django.db import models

from authentication.models import User


TOPIC_CHOICES = [
        ('P', 'Politics'),
        ('S', 'Soccer'),
        ('F','Films'),
        ('M','Music'),
    ]

PLACE_CHOICES = [
        ('M', 'Mathe mensa'),
        ('H', 'Hauptmensa'),
    ]


class Event(models.Model):
    title = models.CharField(max_length=32)
    Date = models.DateTimeField()
    users = models.ManyToManyField(User)
    topics = MultiSelectField(choices=TOPIC_CHOICES)
    places = models.CharField(max_length=1, choices =PLACE_CHOICES, default ='H' )

    def __str__(self):
        return self.title
