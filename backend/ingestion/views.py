from rest_framework.decorators import api_view
from rest_framework.response import Response
import pandas as pd

from emissions.models import EmissionRecord


@api_view(['POST'])
def upload_csv(request):

    file = request.FILES['file']
    df = pd.read_csv(file)

    uploaded_records = []

    for _, row in df.iterrows():

        quantity = float(row['quantity'])
        co2e = quantity * 0.5

        # 🔥 SIMPLE SUSPICIOUS RULE
        is_suspicious = co2e > 1000   # you can change threshold

        record = EmissionRecord.objects.create(

            source_type="SAP",
            activity_type=row['activity_type'],
            scope="SCOPE_1",
            quantity=quantity,
            unit=row['unit'],
            normalized_unit=row['unit'],
            emission_factor=0.5,
            co2e=co2e,

            # ✅ FIX HERE
            is_suspicious=is_suspicious
        )

        uploaded_records.append({
            "id": record.id,
            "activity_type": record.activity_type,
            "scope": record.scope,
            "quantity": record.quantity,
            "unit": record.unit,
            "co2e": record.co2e,
            "is_suspicious": record.is_suspicious
        })

    return Response({
        "status": "success",
        "uploaded_data": uploaded_records
    })