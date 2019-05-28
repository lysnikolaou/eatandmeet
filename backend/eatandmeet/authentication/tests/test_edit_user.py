import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from ..models import User


class TestEditUser(APITestCase):
    @pytest.mark.django_db
    def setUp(self):
        # Create User
        self.user = User.objects.create_user(
            username='lys',
            password='random',
            email='lys@gmail.com',
            first_name='Lys',
            last_name='Nik'
        )
        # Create URL
        self.url = reverse('user-detail', args=[self.user.pk])

        # Login User
        url = reverse('knox_login')
        data = {
            'email': 'lys@gmail.com',
            'password': 'random'
        }
        response = self.client.post(url, data=data)
        self.token = response.json()['token']
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token)


    @pytest.mark.django_db
    def test_edit_user_success_one_field(self):
        data = {
            'username': 'lysn'
        }
        response = self.client.put(self.url, data=data)
        assert response.status_code == status.HTTP_200_OK
        response_data = response.json()
        assert response_data['username'] == data['username']

    @pytest.mark.django_db
    def test_edit_user_success_multiple_fields(self):
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

    def test_delete_user_failure_no_credentials(self):
        data = {
            'username': 'lysn'
        }
        self.client.credentials()
        response = self.client.put(self.url, data=data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_delete_user_failure_wrong_credentials(self):
        data = {
            'username': 'lysn'
        }
        self.client.credentials(HTTP_AUTHORIZATION='Token wrongtoken')
        response = self.client.put(self.url, data=data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED
