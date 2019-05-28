from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """
    The user model, which is used for authentication purposes. We use a custom
    model that inherits from django.contrib.auth.models.AbstractUser, in case
    it needs to be expanded in the future.
    """
    pass
