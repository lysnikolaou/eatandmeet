import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class TestAddUser(APITestCase):
    @pytest.mark.django_db
    def test_add_user_success_only_username_password(self):
        url = reverse('user-list')
        data = {
            'username': 'lys',
            'password': 'random'
        }
        response = self.client.post(url, data=data)
        assert response.status_code == status.HTTP_201_CREATED
        response_data = response.json()
        assert response_data['username'] == data['username']
        assert response_data['email'] == ''
        assert response_data['first_name'] == ''
        assert response_data['last_name'] == ''
        assert 'password' not in response_data

    @pytest.mark.django_db
    def test_add_user_sucess_all(self):
        url = reverse('user-list')
        data = {
            'username': 'lys',
            'password': 'random',
            'email': 'lys@gmail.com',
            'first_name': 'Lys',
            'last_name': 'Nik'
        }
        response = self.client.post(url, data=data)
        assert response.status_code == status.HTTP_201_CREATED
        response_data = response.json()
        assert response_data['username'] == data['username']
        assert response_data['email'] == data['email']
        assert response_data['first_name'] == data['first_name']
        assert response_data['last_name'] == data['last_name']
        assert 'password' not in response_data

    @pytest.mark.django_db
    def test_add_user_failure_no_username(self):
        url = reverse('user-list')
        data = {
            'password': 'random',
            'email': 'lys@gmail.com'
        }
        response = self.client.post(url, data=data)
        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert 'username' in response.json()

    @pytest.mark.django_db
    def test_add_user_failure_no_password(self):
        url = reverse('user-list')
        data = {
            'username': 'lys',
            'email': 'lys@gmail.com'
        }
        response = self.client.post(url, data=data)
        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert 'password' in response.json()

    @pytest.mark.django_db
    def test_add_user_failure_email_invalid(self):
        url = reverse('user-list')
        data = {
            'username': 'lys',
            'password': 'random',
            'email': 'lysgmail'
        }
        response = self.client.post(url, data=data)
        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert 'email' in response.json()
