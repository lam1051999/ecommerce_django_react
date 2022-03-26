from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Category(models.Model):
   type_id = models.IntegerField(primary_key=True, editable=False)
   type_tag = models.CharField(max_length=8000, null=False, blank=False)
   type_detail = models.CharField(max_length=8000, null=False, blank=False)
   refer_image = models.TextField(null=True)
   type_url = models.TextField(default='temp-category', null=False, blank=False)

   def __str__(self) -> str:
      return self.type_detail

   class Meta:
      db_table = 'categories'

class Product(models.Model):
   id = models.CharField(max_length=8000, primary_key=True, editable=False)
   name = models.CharField(max_length=8000, null=True, blank=True)
   price = models.IntegerField(null=True, blank=True)
   old_price = models.IntegerField(null=True, blank=True)
   images = ArrayField(models.TextField())
   type_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, db_column='type_id')
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)
   size_s_total = models.IntegerField(default=100, null=False, blank=False)
   size_s_remain = models.IntegerField(default=100, null=False, blank=False)
   size_m_total = models.IntegerField(default=100, null=False, blank=False)
   size_m_remain = models.IntegerField(default=100, null=False, blank=False)
   size_l_total = models.IntegerField(default=100, null=False, blank=False)
   size_l_remain = models.IntegerField(default=100, null=False, blank=False)
   
   def __str__(self) -> str:
      return self.name

   class Meta:
      db_table = 'products'

class ProductRating(models.Model):
   user_id = models.ForeignKey('user_authentication.User', on_delete=models.SET_NULL, null=True, db_column='user_id')
   product_id = models.ForeignKey(Product, on_delete=models.CASCADE, db_column='product_id')
   stars = models.IntegerField(default=0, null=False, blank=False)
   comments = models.TextField(null=False, blank=False)
   likes = models.IntegerField(default=0, null=False, blank=False)
   rating_date = models.DateTimeField(auto_now_add=True)

   def __str__(self) -> str:
      return f"User ('{self.user_id}') with comment ('{self.comments}') for product ('{self.product_id}'), ('{self.stars}') stars"
   
   class Meta:
      db_table = 'productratings'

class Order(models.Model):
   user_id = models.ForeignKey('user_authentication.User', on_delete=models.SET_NULL, null=True, db_column='user_id')
   product_id = models.ForeignKey(Product, on_delete=models.CASCADE, db_column='product_id')
   size_s_total = models.IntegerField(default=0, null=False, blank=False)
   size_m_total = models.IntegerField(default=0, null=False, blank=False)
   size_l_total = models.IntegerField(default=0, null=False, blank=False)