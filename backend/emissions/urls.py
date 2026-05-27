from django.urls import path

from .views import (
    get_emissions,
    suspicious_records,
    dashboard_stats,
    approve_record,
    approved_records
)

urlpatterns = [

    path('', get_emissions),

    path('suspicious/', suspicious_records),

    path('dashboard/', dashboard_stats),

    path('approve/<int:pk>/', approve_record),

    path('approved/', approved_records),

]