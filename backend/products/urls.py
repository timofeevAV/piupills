from django.urls import path
from .views import ProductList, ProductDetail, ProductImagesList
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('product/<slug:slug>/', ProductDetail.as_view()),
    path('product/<slug:slug>/images/', ProductImagesList.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
