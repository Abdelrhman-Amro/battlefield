from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render

from .forms import EditItemForm, NewItemForm
from .models import Item


# Create your views here.
def detail(request, pk):
    item = get_object_or_404(Item, pk=pk)
    related_items = Item.objects.filter(category=item.category, is_sold=False).exclude(
        pk=pk
    )[0:3]

    return render(
        request, "item/detail.html", {"item": item, "related_items": related_items}
    )


@login_required
def new(request):
    if request.method == "POST":
        form = NewItemForm(
            request.POST, request.FILES
        )  # request.FILEST take the files that user upload

        if form.is_valid():
            item = form.save(commit=False)
            item.created_by = request.user
            item.save()

            return redirect("items:detail", pk=item.id)
    else:
        form = NewItemForm()

    return render(request, "item/form.html", {"form": form})


@login_required
def edit(request, pk):
    item = get_object_or_404(Item, pk=pk, created_by=request.user)

    if request.method == "POST":
        form = EditItemForm(
            request.POST, request.FILES, instance=item
        )  # request.FILEST take the files that user upload

        if form.is_valid():
            form.save()

        return redirect("items:detail", pk=item.id)
    else:
        form = NewItemForm(
            instance=item
        )  # instance is for -> display the current values of the item's fields.

    return render(request, "item/form.html", {"form": form, "title": "Edit item"})


@login_required
def delete(request, pk):
    item = get_object_or_404(Item, pk=pk, created_by=request.user)
    item.delete()

    return redirect("dashboard:dashboard")
