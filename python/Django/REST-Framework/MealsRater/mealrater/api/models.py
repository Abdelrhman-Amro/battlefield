from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


# Create your models here.
class Meal(models.Model):
    title = models.CharField(max_length=32)
    description = models.CharField(max_length=360)

    def no_of_ratings(self):
        """
        Returns the number of ratings for a meal
        """
        meal_ratings = Rating.objects.filter(meal=self)
        return len(meal_ratings)

    def avg_rate(self):
        """
        Returns the average rating of a meal
        """
        meal_ratings = Rating.objects.filter(meal=self)
        n_ratings = len(meal_ratings)
        sum = 0

        for x in meal_ratings:
            sum += x.stars

        if n_ratings > 0:
            return sum / n_ratings
        else:
            return 0

    def __str__(self):
        return self.title


class Rating(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = (("user", "meal"),)
        # index_together = (("user", "meal"),)
