from django.urls import path
from rest_framework import routers
from django.urls import include
from .views import UserViewSet,EventViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('events', EventViewSet)

urlpatterns = [
    path('', include(router.urls))
]