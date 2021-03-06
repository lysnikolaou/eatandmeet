from multiselectfield import MultiSelectField
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from authentication.models import User


TOPIC_CHOICES = [
        
        ('Politics','Politics'),
        ('Environment','Environment'),
        ('Education','Education'),
        ('Travel','Travel'),
        ('Sports','Sports'),
        ('Music','Music'),
        ('Movies','Movies'),
        ('Books','Books'),
        ('Technology','Technology'),
        ('Science','Science'),
        ('Animals','Animals'),
        ('Celebrities','Celebrities'),
        ('News','News'),
        ('General','General'),
        ('Smalltalk','Smalltalk'),
        
    ]


class Event(models.Model):
    title = models.CharField(max_length=32)
    date = models.DateTimeField()
    event_creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_creator', null=True)
    event_admins = models.ManyToManyField(User, related_name='event_admins', blank=True)
    event_members = models.ManyToManyField(User, related_name='event_members', blank=True)
    topics = MultiSelectField(choices=TOPIC_CHOICES)
    location = models.CharField(max_length=30, default='Hauptmensa' )
    slots = models.IntegerField(default =3, validators=[MinValueValidator(1), MaxValueValidator(12)])
    description = models.CharField(max_length=128)
    day = models.DateField(blank=True)
    
    def save(self, *args, **kwargs):
        self.day = self.date.date()
        super(Event, self).save(*args, **kwargs)

    def __str__(self):
        return self.title




class Comment(models.Model):
    event = models.ForeignKey('Event', on_delete=models.CASCADE)
    user = models.ForeignKey('authentication.User', on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=600, default='SOME STRING')

    def __str__(self):
        return self.text
