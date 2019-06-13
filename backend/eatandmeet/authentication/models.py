from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """
    The user model, which is used for authentication purposes. We use a custom
    model that inherits from django.contrib.auth.models.AbstractUser, in case
    it needs to be expanded in the future.
    """
    about = models.CharField(
        max_length=500,
        blank=True,
        null=True,
        help_text='The About fields, where the user can provide some info'
                  ' about themselves.'
    )
    avatar = models.ImageField(
        upload_to='images/avatars/',
        blank=True,
        null=True,
        help_text='The User\'s avatar to be shown on their profile.'
    )
