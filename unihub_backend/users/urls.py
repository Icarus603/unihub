from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import UserViewSet, RegisterView

router = DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
]
urlpatterns += router.urls
