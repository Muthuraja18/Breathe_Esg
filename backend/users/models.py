from django.db import models

class User(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField(unique=True)

    mobile = models.CharField(max_length=15)

    password = models.CharField(max_length=200)

    def __str__(self):
        return self.email