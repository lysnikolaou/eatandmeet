import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from ..models import User


class TestDeleteUser(APITestCase):
    @pytest.mark.django_db
    def setUp(self):
        # Create User
        self.user = User.objects.create_user(
            username='lys',
            email='lys@gmail.com',
            password='random',
            first_name='Lys',
            last_name='Nik'
        )
        self.url = reverse('knox_login')

    @pytest.mark.django_db
    def test_login_user_success(self):
        data = {
            'email': 'lys@gmail.com',
            'password': 'random'
        }
        response = self.client.post(self.url, data=data)
        assert response.status_code == status.HTTP_200_OK

    @pytest.mark.django_db
    def test_login_user_failure_no_email(self):
        data = {
            'password': 'random'
        }
        response = self.client.post(self.url, data=data)
        assert response.status_code == status.HTTP_403_FORBIDDEN
        assert 'Authentication credentials' in response.json()['detail']

    @pytest.mark.django_db
    def test_login_user_failure_wrong_user(self):
        data = {
            'email': 'lyswrong@gmail.com', # Wrong email
            'password': 'random'
        }
        response = self.client.post(self.url, data=data)
        assert response.status_code == status.HTTP_403_FORBIDDEN
        assert 'User not found' in response.json()['detail']
    
    @pytest.mark.django_db
    def test_login_user_failure_wrong_password(self):
        data = {
            'email': 'lys@gmail.com',
            'password': 'randomwrong'
        }
        response = self.client.post(self.url, data=data)
        assert response.status_code == status.HTTP_403_FORBIDDEN
        assert 'Password not correct' in response.json()['detail']
