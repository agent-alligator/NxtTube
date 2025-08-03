from rest_framework.decorators import api_view
from rest_framework.response import Response
# from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404

from .serializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status

@api_view(['POST'])
def login(request):
    user=get_object_or_404(User,username=request.data.get('username'))
    if not user.check_password(request.data.get('password')):
        return Response({'error': 'Invalid username or password.'}, status=status.HTTP_401_UNAUTHORIZED)
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=status.HTTP_200_OK)

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=serializer.validated_data['username'])
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def home(request):
    return Response({'message': 'Welcome to NxTube API!'}, status=status.HTTP_200_OK)





