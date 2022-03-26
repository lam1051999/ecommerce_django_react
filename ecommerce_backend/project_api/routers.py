from rest_framework.routers import SimpleRouter
from .views import CategoryViewSet, ProductViewSet, ProductRatingViewSet, ProductSampleViewSet


routes = SimpleRouter()

routes.register(r'categories', CategoryViewSet, basename='categories')
routes.register(r'products', ProductViewSet, basename='products')
routes.register(r'productratings', ProductRatingViewSet, basename='productratings')
routes.register(r'product-samples', ProductSampleViewSet, basename='productsamples')

urlpatterns = [
    *routes.urls
]