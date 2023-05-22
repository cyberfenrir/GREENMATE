from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from base.serializers import SellerSerializer
from base.models import Seller

@api_view(['POST'])
def register_seller(request):
    serializer = SellerSerializer(data=request.data)
    if serializer.is_valid():
        seller = serializer.save()
        refresh = RefreshToken.for_user(seller.user)
        return Response({
            'seller_id': seller._id,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login_seller(request):
    username = request.data.get('username')
    password = request.data.get('password')
    seller = Seller.objects.filter(user__username=username).first()

    if seller and seller.user.check_password(password):
        refresh = RefreshToken.for_user(seller.user)
        return Response({
            'seller_id': seller._id,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    return Response({'error': 'Invalid credentials'}, status=400)
