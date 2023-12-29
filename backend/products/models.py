from typing import Any
from django.db import models
from django.contrib.auth.models import User
from django.contrib.staticfiles.storage import staticfiles_storage
from pytils.translit import slugify


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.PositiveIntegerField()
    slug = models.SlugField(default='', unique=True)
    image = models.ImageField(
        upload_to='images/products/', blank=True, null=True)
    image_alt = models.CharField(max_length=255, blank=True)
    quantity_in_stock = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def get_image_url(self):
        if self.image:
            return staticfiles_storage.url(self.image.name)
        else:
            return None

    def save(self, *args, **kwargs):
        name = self.name
        slug = slugify(name)
        count = 0
        while Product.objects.filter(slug=slug).exists():
            count += 1
            slug = f"{slugify(name)}-{count}"
        self.slug = slug
        super().save(*args, **kwargs)


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='images/products/')
    image_alt = models.CharField(max_length=255, blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.image.name = f'{slugify(self.product.name)}-{self.image.name}'
        super().save(*args, **kwargs)


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField('Product', through='CartItem')

    def __str__(self):
        return f'{self.user.username}\'s Cart'


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantity} x {self.product.name}'

    def get_total_price(self):
        return self.quantity * self.product.price
