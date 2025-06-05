from rest_framework import viewsets, permissions
from .models import Category, Tag, Resource, Attachment, Rating
from .serializers import (
    CategorySerializer,
    TagSerializer,
    ResourceSerializer,
    AttachmentSerializer,
    RatingSerializer,
)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filterset_fields = ['category', 'tags', 'uploader', 'status']
    search_fields = ['title', 'description']
    ordering_fields = ['upload_date', 'view_count', 'download_count']
    ordering = ['-upload_date']

    def perform_create(self, serializer):
        serializer.save(uploader=self.request.user)

class AttachmentViewSet(viewsets.ModelViewSet):
    queryset = Attachment.objects.all()
    serializer_class = AttachmentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
