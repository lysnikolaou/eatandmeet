from rest_framework import authentication, exceptions

from .models import User


class EmailAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        if not (email and password):
            return None

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('User not found')
        if not user.check_password(password):
            raise exceptions.AuthenticationFailed('Password not correct')
        return (user, None)
