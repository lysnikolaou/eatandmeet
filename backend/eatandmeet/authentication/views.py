from knox.views import LoginView
from rest_framework import generics, permissions

from .authentication import EmailAuthentication
from .models import User
from .permissions import IsSelfOrReadOnly
from .serializers import UserCreateSerializer, UserUpdateSerializer


class UserList(generics.ListCreateAPIView):
    """
    get:
    Return a list of all the existing users.

    post:
    Create a new user instance.
    """
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserCreateSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    Return an object with all the user information available.

    put:
    Edit a user attribute.

    delete:
    Delete the user instance.
    """
    queryset = User.objects.all()
    permission_classes = (IsSelfOrReadOnly,)
    serializer_class = UserUpdateSerializer


class UserLoginView(LoginView):
    """
    post:
    Login a user and create a new token to be used for authentication in
    subsequent requests.
    """
    authentication_classes = (EmailAuthentication,)
