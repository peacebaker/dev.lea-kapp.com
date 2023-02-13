from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from .models import Story, Page

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ['page_num', 'publish_date', 'text']

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = ['title', 'slug', 'publish_date', 'finish_date', 'teaser']

class FullStorySerializer(serializers.ModelSerializer):
    pages = PageSerializer(many=True, read_only=True)

    class Meta:
        model = Story
        fields = ['title', 'slug', 'publish_date', 'finish_date', 'teaser', 'pages']


class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer

class StoryViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'

    queryset = Story.objects.all()
    serializer_class = StorySerializer
    detail_serializer_class = FullStorySerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return FullStorySerializer
        return StorySerializer
        

# Register our router.
router = routers.DefaultRouter()
router.register(r'', StoryViewSet)

# Set URL patterns based upon the default router.
app_name = 'stories'
urlpatterns = [
    path('', include(router.urls))
]