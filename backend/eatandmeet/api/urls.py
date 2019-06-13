from django.urls import path, include
from rest_framework_nested import routers

from .views import EventViewSet, CommentViewSet


# router = routers.DefaultRouter()
# router.register('events', EventViewSet)
# router.register('comment', CommentViewSet)

# urlpatterns = [
#     path('', include(router.urls))
# ]

router = routers.SimpleRouter()
router.register('events', EventViewSet)

event_router = routers.NestedSimpleRouter(router, 'events', lookup = 'event')
event_router.register('comments',CommentViewSet, base_name='event-comments')

urlpatterns = [
    path('', include(router.urls)),
    path('',include(event_router.urls)),
]


