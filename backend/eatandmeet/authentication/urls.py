from django.urls import path
from knox import views as knox_views
from rest_framework import routers

from .views import UserDetail, UserList, UserLoginView

urlpatterns = [
    path('users/login/', UserLoginView.as_view(), name='knox_login'),
    path('users/logout/', knox_views.LogoutView, name='knox_logout'),
    path('users/logoutall/', knox_views.LogoutAllView, name='knox_logoutall'),
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
]
