from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from items.models import Item


# Create your views here.
@login_required
def index(request):
    items = Item.objects.all()
    return render(request, "dashboard/dashboard.html", {"items": items})
