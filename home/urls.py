from django.urls import path
from .views import video_list

urlpatterns = [
    path('videos/', video_list, name='video-list'),
]