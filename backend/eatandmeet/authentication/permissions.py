from rest_framework import permissions


class IsSelf(permissions.BasePermission):
    """
    A custom permission class which allows users to only retrieve, edit, delete
    their own information.
    """
    def has_object_permission(self, request, view, obj):
        return request.user == obj
