from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import EmissionRecord


# ==============================
# GET ALL EMISSIONS
# ==============================
@api_view(['GET'])
def get_emissions(request):

    try:

        data = EmissionRecord.objects.all().order_by('-id').values(

            'id',
            'source_type',
            'activity_type',
            'scope',
            'quantity',
            'unit',
            'normalized_unit',
            'co2e',
            'is_suspicious',
            'review_status',
            'locked_for_audit'

        )

        return Response({
            "status": "success",
            "count": len(data),
            "data": list(data)
        })

    except Exception as e:

        return Response({
            "status": "error",
            "message": str(e)
        }, status=500)


# ==============================
# ONLY APPROVED RECORDS
# ==============================
@api_view(['GET'])
def approved_records(request):

    try:

        data = EmissionRecord.objects.filter(
            review_status="APPROVED"
        ).order_by('-id').values(

            'id',
            'source_type',
            'activity_type',
            'scope',
            'quantity',
            'unit',
            'normalized_unit',
            'co2e',
            'is_suspicious',
            'review_status',
            'locked_for_audit'

        )

        return Response({
            "status": "success",
            "count": len(data),
            "data": list(data)
        })

    except Exception as e:

        return Response({
            "status": "error",
            "message": str(e)
        }, status=500)


# ==============================
# SUSPICIOUS RECORDS
# ==============================
@api_view(['GET'])
def suspicious_records(request):

    try:

        data = EmissionRecord.objects.filter(
            is_suspicious=True
        ).order_by('-id').values(

            'id',
            'source_type',
            'activity_type',
            'scope',
            'quantity',
            'unit',
            'normalized_unit',
            'co2e',
            'is_suspicious',
            'review_status'

        )

        return Response({
            "status": "success",
            "count": len(data),
            "data": list(data)
        })

    except Exception as e:

        return Response({
            "status": "error",
            "message": str(e)
        }, status=500)


# ==============================
# DASHBOARD STATS
# ==============================
@api_view(['GET'])
def dashboard_stats(request):

    total = EmissionRecord.objects.count()

    approved = EmissionRecord.objects.filter(
        review_status="APPROVED"
    ).count()

    pending = EmissionRecord.objects.filter(
        review_status="PENDING"
    ).count()

    suspicious = EmissionRecord.objects.filter(
        is_suspicious=True
    ).count()

    return Response({
        "total": total,
        "approved": approved,
        "pending": pending,
        "suspicious": suspicious
    })


# ==============================
# APPROVE RECORD
# ==============================
@api_view(['POST'])
def approve_record(request, pk):

    record = get_object_or_404(
        EmissionRecord,
        id=pk
    )

    record.review_status = "APPROVED"
    record.locked_for_audit = True

    record.save()

    return Response({
        "status": "success",
        "message": "Record Approved Successfully"
    })