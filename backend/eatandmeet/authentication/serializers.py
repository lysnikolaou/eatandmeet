from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
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
