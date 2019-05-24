from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import Event, User
from .serializers import EventSerializer, UserSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = (UserSerializer)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = (EventSerializer)