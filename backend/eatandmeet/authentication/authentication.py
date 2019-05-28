from rest_framework import authentication, exceptions

from .models import User


class EmailAuthentication(authentication.BaseAuthentication):
    """
    Custom authentication class that requires an email and a password for the
    authentication. It is being used by the UserLoginView, which logins a user
    and creates a token to be used for authentication in the future.
    """
    def authenticate(self, request):
        """
        Authenticates a user based on their email and passowrd.

        Returns None, in case no authentication took place, or a tuple
        (user, None), in case the authentication was successful.

        Raises an AuthenticationFailed exception, in case the authentication
        failed, which includes a wrong email or password.
        """
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
