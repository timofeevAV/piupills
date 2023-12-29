from django.contrib import admin
from .models import Product, ProductImage, Cart, CartItem


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'slug', 'image', 'created_at')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductImageInline]

    def delete_selected(self, request, queryset):
        queryset.delete()
    delete_selected.short_description = 'Delete selected products'

    actions = [delete_selected]


class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 1


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('user',)
    inlines = [CartItemInline]

    def delete_selected(self, request, queryset):
        queryset.delete()
    delete_selected.short_description = 'Delete selected carts'

    actions = [delete_selected]
