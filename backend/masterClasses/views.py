from rest_framework import generics
from .models import Masterclass, Theme
from .serializers import MasterclassSerializer, ThemeSerializer
from rest_framework.permissions import AllowAny

class ThemeList(generics.ListCreateAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer

class ThemeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer

class MasterclassList(generics.ListCreateAPIView):
    queryset = Masterclass.objects.all()
    serializer_class = MasterclassSerializer
    permission_classes = [AllowAny]

class MasterclassDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Masterclass.objects.all()
    serializer_class = MasterclassSerializer