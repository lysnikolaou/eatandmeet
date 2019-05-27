from knox.views import LoginView
from rest_framework import generics, permissions

from .authentication import EmailAuthentication
from .models import User
from .permissions import IsSelfOrReadOnly
from .serializers import UserCreateSerializer, UserUpdateSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserCreateSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    permission_classes = (IsSelfOrReadOnly,)
    serializer_class = UserUpdateSerializer


class UserLoginView(LoginView):
    authentication_classes = (EmailAuthentication,)
