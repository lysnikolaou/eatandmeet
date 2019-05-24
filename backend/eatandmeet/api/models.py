from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=32)
    Date = models.DateTimeField()
    TOPIC_CHOICES = [
        ('P', 'Politics'),
        ('S', 'Soccer'),
    ]
    users = models.ManyToManyField(User)
    topics = models.CharField(max_length=1, choices = TOPIC_CHOICES)
    PLACE_CHOICES = [
        ('M', 'Mathe mensa'),
        ('H', 'Hauptmensa'),
    ]

    places = models.CharField(max_length=1, choices =PLACE_CHOICES, default ='H' )

    def __str__(self):
        return self.title
