from django.urls import path

from .views import approve_record

urlpatterns = [

    path(
        'approve/<int:pk>/',
        approve_record
    ),
]