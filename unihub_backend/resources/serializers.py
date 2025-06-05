from rest_framework import serializers
from .models import Category, Tag, Resource, Attachment
from .models import Rating

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'parent_category']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']

class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment
        fields = ['id', 'file', 'file_type', 'upload_date']

class ResourceSerializer(serializers.ModelSerializer):
    attachments = AttachmentSerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Resource
        fields = [
            'id', 'title', 'description', 'uploader', 'category', 'tags',
            'status', 'upload_date', 'last_modified_date', 'view_count',
            'download_count', 'attachments'
        ]
        read_only_fields = ['uploader', 'view_count', 'download_count']

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['id', 'resource', 'user', 'score', 'created_at']
        read_only_fields = ['user', 'created_at']
