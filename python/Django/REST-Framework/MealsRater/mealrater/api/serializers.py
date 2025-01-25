from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Meal, Rating


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")
        extra_kwargs = {"password": {"write_only": True, "required": True}}


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ("id", "title", "description", "no_of_ratings", "avg_rate")


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"  # ('id', 'stars', 'meal', 'user')
