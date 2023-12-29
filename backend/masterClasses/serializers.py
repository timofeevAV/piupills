from rest_framework import serializers
from .models import Masterclass, Theme

class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = '__all__'

class MasterclassSerializer(serializers.ModelSerializer):
    theme = ThemeSerializer()

    class Meta:
        model = Masterclass
        fields = '__all__'