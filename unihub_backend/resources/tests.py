from django.contrib.auth.models import User
from django.test import TestCase
from .models import Category, Resource, Comment

class CommentModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass")
        self.category = Category.objects.create(name="Test")
        self.resource = Resource.objects.create(title="Test Resource", description="desc", uploader=self.user, category=self.category)

    def test_create_comment(self):
        comment = Comment.objects.create(resource=self.resource, user=self.user, content="hello")
        self.assertEqual(str(comment), "tester - hello")
