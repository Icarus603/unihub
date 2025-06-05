from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.test import APITestCase

class RegistrationAPITestCase(APITestCase):
    def test_register_user(self):
        url = reverse('register')
        data = {'username': 'newuser', 'email': 'new@example.com', 'password': 'pass1234'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 201)
        self.assertTrue(User.objects.filter(username='newuser').exists())

    def test_obtain_token(self):
        User.objects.create_user(username='tester', password='secret')
        url = reverse('token_obtain_pair')
        response = self.client.post(url, {'username': 'tester', 'password': 'secret'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('access', response.data)
