from rest_framework import permissions


class EventPermissions(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS or request.method == 'POST':
            return True
        return (request.user in obj.event_admins.all()
                or request.user == obj.event_creator)


class CommentPermissions(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        print(request.user)
        print(obj)
        return (request.user in obj.event.event_members.all()
                or request.user in obj.event.event_admins.all()
                or request.user == obj.event.event_creator)
