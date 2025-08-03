# from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Video
from .serializers import VideoSerializer

@api_view(['GET'])
def test_view(request):
    return Response({'message': 'Test endpoint working!'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def video_list(request):
    videos = Video.objects.all()
    serializer = VideoSerializer(videos, many=True)
    return Response(serializer.data)