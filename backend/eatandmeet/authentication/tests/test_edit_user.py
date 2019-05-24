import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from ..models import User


class TestEditUser(APITestCase):
    @pytest.mark.django_db
    def setUp(self):
        self.user = User.objects.create_user(
            username='lys',
            password='random',
            email='lys@gmail.com',
            first_name='Lys',
            last_name='Nik'
        )
        self.url = reverse('user-detail', args=[self.user.pk])

    @pytest.mark.django_db
    def test_edit_user_success(self):
        data = {
            'username': 'lysn'
        }
        response = self.client.put(self.url, data=data)
        assert response.status_code == status.HTTP_200_OK
        response_data = response.json()
        assert response_data['username'] == data['username']

    @pytest.mark.django_db
    def test_edit_user_success(self):
        data = {
            'username': 'lysnik',
            'email': 'lysnik@gmail.com'
        }
        response = self.client.put(self.url, data=data)
        assert response.status_code == status.HTTP_200_OK
        response_data = response.json()
        assert response_data['username'] == data['username']
        assert response_data['email'] == data['email']

    @pytest.mark.django_db
    def test_edit_user_failure_false_user(self):
        url = reverse('user-detail', args=[100]) # User pk should not exist
        data = {
            'username': 'lysnik'
        }
        response = self.client.put(url, data=data)
        assert response.status_code == status.HTTP_404_NOT_FOUND
    
    @pytest.mark.django_db
    def test_edit_user_failure_read_only_field(self):
        data = {
            'is_active': False
        }
        response = self.client.put(self.url, data=data)
        response_data = response.json()
        assert response_data['is_active'] == True
