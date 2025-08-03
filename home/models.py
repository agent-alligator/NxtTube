from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    thumbnail = models.URLField()
    video_url = models.URLField()
    channel_name = models.CharField(max_length=100)
