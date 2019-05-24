import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from ..models import User


class TestDeleteUser(APITestCase):
    @pytest.mark.django_db
    def setUp(self):
        self.user = User.objects.create_user(
            username='lys',
            email='lys@gmail.com',
            password='random',
            first_name='Lys',
            last_name='Nik'
        )

    @pytest.mark.django_db
    def test_delete_user_success(self):
        url = reverse('user-detail', args=[self.user.pk])
        response = self.client.delete(url)
        response_after = self.client.get(url)
        assert response.status_code == status.HTTP_204_NO_CONTENT
        assert response_after.status_code == status.HTTP_404_NOT_FOUND
    
    @pytest.mark.django_db
    def test_delete_user_failure_false_user(self):
        url = reverse('user-detail', args=[100]) # User with pk 100 not in db
        response = self.client.delete(url)
        assert response.status_code == status.HTTP_404_NOT_FOUND
