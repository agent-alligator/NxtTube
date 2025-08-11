from django.urls import path
from .views import video_list, video_details

urlpatterns = [
    path('videos/', video_list, name='video-list'),
    path('videos/<video_id>/', video_details, name='video-details')
]