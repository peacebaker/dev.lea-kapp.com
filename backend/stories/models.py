from django.db import models
from ckeditor.fields import RichTextField

# A story, made of multiple pages.
class Story(models.Model):

    # Each story has a title, a page slug (short name for url's), publish/finish dates, and a teaser.
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=100, default="", unique=True)
    publish_date = models.DateField(null=True)
    finish_date = models.DateField(null=True)
    teaser = RichTextField(default="")

    # TODO: Genres.  Other things, probably.

    def __str__(self):
        return self.title


# A page of a story.
class Page(models.Model):

    # Pages are all related to exactly one story, which must already exist.
    story = models.ForeignKey(Story, on_delete=models.CASCADE, related_name='pages')

    # Each page has a page number, a publish date, and text.
    page_num = models.IntegerField()  # TODO: Figure out a way to make this unique per story id.
    publish_date = models.DateField()
    text = RichTextField(default="")

    def __str__(self):
        return f'{self.story} - Page {self.page_num}'
