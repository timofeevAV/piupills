from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from .models import Product, Cart, ProductImage
from .serializers import ProductImageSerializer, ProductSerializer
from django.shortcuts import get_object_or_404, render
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from .serializers import CartSerializer
from rest_framework.parsers import JSONParser


class ProductPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'perPage'
    max_page_size = 25


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination
    permission_classes = [AllowAny]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]


class ProductImagesList(generics.ListCreateAPIView):
    serializer_class = ProductImageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        product = get_object_or_404(Product, slug=self.kwargs['slug'])
        return product.images.all()

    def perform_create(self, serializer):
        product = get_object_or_404(Product, slug=self.kwargs['slug'])
        serializer.save(product=product)


class CartView(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart
