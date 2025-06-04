from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, TagViewSet, ResourceViewSet, AttachmentViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'attachments', AttachmentViewSet)

urlpatterns = router.urls
