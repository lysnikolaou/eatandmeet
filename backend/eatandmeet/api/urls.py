from django.urls import path, include
from rest_framework import routers

from .views import EventViewSet, CommentViewSet


router = routers.DefaultRouter()
router.register('events', EventViewSet)
router.register('comment', CommentViewSet)

urlpatterns = [
    path('', include(router.urls))
]
