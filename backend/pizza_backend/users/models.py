from django.contrib.auth.models import AbstractUser
from djongo import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, unique=True)
