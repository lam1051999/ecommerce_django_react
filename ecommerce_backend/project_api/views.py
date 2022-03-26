from .serializers import CategorySerializer, ProductSerializer, ProductRatingSerializer
from .models import Category, Product, ProductRating
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly

class ProductViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return Product.objects.all()

class CategoryViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return Category.objects.all()
        
class ProductSampleViewSet(ProductViewSet):
    def get_queryset(self):
        return Product.objects.order_by('?')[:12]

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = ProductRatingSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return ProductRating.objects.all()