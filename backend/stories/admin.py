from django.contrib import admin
from .models import Page, Story

# Register Page and Story models to admin.
admin.site.register(Page)
admin.site.register(Story)
