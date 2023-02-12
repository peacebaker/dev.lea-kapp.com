# django classes
from django.db import models

# 3rd party classes
from ckeditor.fields import RichTextField

# A news article.
class Article(models.Model):

    objects = None
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=100, default="", unique=True)
    date = models.DateField()
    text = RichTextField(default="")

    def __str__(self):
        return self.title