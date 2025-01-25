from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from .views import MealViewSet, RatingViewSet, UserViewSet

app_name = "api"

# http://127.0.0.1:8000/api/token
# http://127.0.0.1:8000/api/users
# http://127.0.0.1:8000/api/meals
# http://127.0.0.1:8000/api/ratings

router = routers.DefaultRouter()
router.register("users", UserViewSet)
router.register(r"meals", MealViewSet)
router.register(r"ratings", RatingViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("token/", obtain_auth_token),  # Login endpoint
]
