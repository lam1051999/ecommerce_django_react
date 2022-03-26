from .models import Category, Product, ProductRating
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields  = ['id', 'name', 'price', 'old_price', 'images', 'type_id', 'created_at', 
                    'updated_at', 'size_s_total', 'size_s_remain',
                    'size_m_total', 'size_m_remain', 'size_l_total', 'size_l_remain']

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(source='product_set', many=True, read_only=True)
    
    class Meta:
        model = Category
        fields = ['type_id', 'type_tag', 'type_detail', 'refer_image', 'type_url', 'products']

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRating
        fields = ['user_id', 'product_id', 'stars', 'comments', 'likes', 'rating_date']
        read_only_fields = ['rating_date']