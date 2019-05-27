from rest_framework import permissions


class IsSelfOrReadOnly(permissions.BasePermission):
    """
    A custom permission class which allows users to only retrieve, edit, delete
    their own information.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user == obj
