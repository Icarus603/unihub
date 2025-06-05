from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.test import APITestCase

from .models import Category, Resource, Rating


class ResourceAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass")
        self.category1 = Category.objects.create(name="Cat1")
        self.category2 = Category.objects.create(name="Cat2")
        self.resource1 = Resource.objects.create(
            title="Res1",
            description="Desc1",
            uploader=self.user,
            category=self.category1,
            status="approved",
        )
        self.resource2 = Resource.objects.create(
            title="Res2",
            description="Desc2",
            uploader=self.user,
            category=self.category2,
            status="approved",
        )

    def test_filter_by_category(self):
        url = reverse("resource-list")
        response = self.client.get(url, {"category": self.category1.id})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["id"], self.resource1.id)

    def test_search_by_title(self):
        url = reverse("resource-list")
        response = self.client.get(url, {"search": "Res2"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["id"], self.resource2.id)

    def test_order_by_view_count(self):
        self.resource1.view_count = 10
        self.resource1.save()
        self.resource2.view_count = 5
        self.resource2.save()
        url = reverse("resource-list")
        response = self.client.get(url, {"ordering": "-view_count"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data[0]["id"], self.resource1.id)

    def test_create_rating(self):
        url = reverse("rating-list")
        self.client.force_authenticate(user=self.user)
        data = {"resource": self.resource1.id, "score": 4}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Rating.objects.count(), 1)
        self.assertEqual(Rating.objects.first().score, 4)

    def test_rating_requires_authentication(self):
        url = reverse("rating-list")
        data = {"resource": self.resource1.id, "score": 5}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 401)

