from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from .models import Article

# Create your views here.
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'slug', 'date', 'text']

class ArticleViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Register our router.
router = routers.DefaultRouter()
router.register(r'', ArticleViewSet)

# Set URL patterns based upon the default router.
app_name = 'news'
urlpatterns = [
    path('', include(router.urls))
]