from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import (
    AllowAny,
    IsAdminUser,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.response import Response

from .models import Meal, Rating
from .serializers import MealSerializer, RatingSerializer, UserSerializer

# Create/Delete user
# Create token when create user


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # #authentication_classes = (TokenAuthentication, )
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        token, created = Token.objects.get_or_create(user=serializer.instance)
        return Response(
            {
                "token": token.key,
            },
            status=status.HTTP_201_CREATED,
        )

    def list(self, request, *args, **kwargs):
        response = {"message": "You cant create rating like that"}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


class MealViewSet(viewsets.ModelViewSet):
    """
    - CRUD for a meal
    - Rate a meal
    """

    queryset = Meal.objects.all()
    serializer_class = MealSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @action(methods=["POST", "PUT"], detail=True)
    def rate_meal(self, request, pk=None):  # pk: meal id
        """
        Create/Update a rating for a meal
        """
        if "stars" in request.data:
            meal = Meal.objects.get(pk=pk)
            stars = request.data["stars"]
            user = request.user
            try:
                # update rate if exists
                rating = Rating.objects.get(user=user.id, meal=meal.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                json = {"message": "Meal rate updated", "result": serializer.data}
                return Response(json, status=status.HTTP_200_OK)
            except:
                # create rate
                newRate = Rating.objects.create(user=user, meal=meal, stars=stars)
                serializer = RatingSerializer(newRate, many=False)
                json = {"message": "Meal rate created", "result": serializer.data}
                return Response(json, status=status.HTTP_201_CREATED)

        json = {"message": "stars not provided"}
        return Response(json, status=status.HTTP_400_BAD_REQUEST)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # disable update
    def update(self, request, *args, **kwargs):
        response = {"message": "Invalid way to create or update "}

        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    # disable create
    def create(self, request, *args, **kwargs):
        response = {"message": "Invalid way to create or update "}

        return Response(response, status=status.HTTP_400_BAD_REQUEST)
