from rest_framework import serializers
from .models import *
class PropozycjeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propozycja
        fields = '__all__'

class PropozycjePktSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropozycjePkt
        fields = '__all__'
