from rest_framework import serializers

from .models import User


class UserCreateSerializer(serializers.ModelSerializer):
    """
    This serializers is used by the user-list view. It specifies that a
    password is write_only and has a custom create method for a User to be
    created.
    """
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        email = validated_data['email'] if 'email' in validated_data else ''
        first_name = validated_data['first_name'] if 'first_name' in validated_data else ''
        last_name = validated_data['last_name'] if 'last_name' in validated_data else ''
        user = User(
            username=validated_data['username'],
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    """
    This serializer is used by the user-detail view. There is the need
    of an additional serializer, due to the fact, that username and password
    are not required, when editing the user info.
    """
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('id', 'last_login', 'is_superuser', 'is_staff',
                            'is_active', 'date_joined', 'groups',
                            'user_permissions')
        extra_kwargs = {
            'username': {'required': False},
            'password': {'required': False, 'write_only': True}
        }
    
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
            del validated_data['password']
        return super().update(instance, validated_data)
