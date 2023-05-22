from rest_framework.permissions import BasePermission

class IsSellerUser(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        return user.is_authenticated and user.seller.isSeller
