from rest_framework.decorators import api_view
from rest_framework.response import Response
from emissions.models import EmissionRecord


@api_view(['POST'])
def approve_record(request, pk):

    updated = EmissionRecord.objects.filter(id=pk).update(
        review_status="APPROVED",
        locked_for_audit=True
    )

    if updated == 0:
        return Response({
            "status": "error",
            "message": "Record not found"
        }, status=404)

    return Response({
        "status": "success",
        "message": "Approved Successfully ✅"
    })