from django.db import models

class EmissionRecord(models.Model):

    SCOPE_CHOICES = (
        ('SCOPE_1', 'Scope 1'),
        ('SCOPE_2', 'Scope 2'),
        ('SCOPE_3', 'Scope 3'),
    )

    # USER EMAIL
    user_email = models.EmailField()

    source_type = models.CharField(
        max_length=50
    )

    activity_type = models.CharField(
        max_length=100
    )

    scope = models.CharField(
        max_length=20,
        choices=SCOPE_CHOICES
    )

    quantity = models.FloatField()

    unit = models.CharField(
        max_length=50
    )

    normalized_unit = models.CharField(
        max_length=50
    )

    emission_factor = models.FloatField()

    co2e = models.FloatField()

    is_suspicious = models.BooleanField(
        default=False
    )

    review_status = models.CharField(
        max_length=20,
        default='PENDING'
    )

    locked_for_audit = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.activity_type