from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Category(models.Model):
    # Field to store the name of the category
    name = models.CharField(max_length=255)

    class Meta:
        # Orders categories by name
        ordering = ("name",)
        # Sets the plural name for the model
        verbose_name_plural = "Categories"

    def __str__(self):
        # Returns the name of the category as its string representation
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    price = models.FloatField()
    image = models.ImageField(upload_to="item_images", blank=True, null=True)
    is_sold = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="items")
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="items")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Items"

    def __str__(self):
        return self.name
