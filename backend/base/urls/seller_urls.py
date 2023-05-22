from django.urls import path
from base.views import seller_views as sv

urlpatterns = [
    path('register', sv.register_seller, name='register_seller'),
    path('login', sv.login_seller, name='login_seller'),
]
