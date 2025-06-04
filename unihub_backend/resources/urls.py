from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, TagViewSet, ResourceViewSet, AttachmentViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'attachments', AttachmentViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = router.urls
