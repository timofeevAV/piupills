from django.db import models

class Theme(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Masterclass(models.Model):
    date = models.DateField()
    price = models.PositiveIntegerField()
    theme = models.ForeignKey(Theme, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.theme.name} ({self.date})'