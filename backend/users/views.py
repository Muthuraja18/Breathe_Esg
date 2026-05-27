from rest_framework.decorators import api_view

from rest_framework.response import Response

from .models import User


# =========================
# REGISTER API
# =========================
@api_view(['POST'])
def register_user(request):

    data = request.data

    # CHECK EMAIL EXISTS
    if User.objects.filter(
        email=data['email']
    ).exists():

        return Response({
            "status": "error",
            "message": "Email already exists"
        }, status=400)

    # CREATE USER
    user = User.objects.create(

        name=data['name'],

        email=data['email'],

        mobile=data['mobile'],

        password=data['password']

    )

    return Response({

        "status": "success",

        "message": "User Registered Successfully",

        "user": {

            "name": user.name,

            "email": user.email,

            "mobile": user.mobile

        }

    })


# =========================
# LOGIN API
# =========================
@api_view(['POST'])
def login_user(request):

    email = request.data.get("email")

    password = request.data.get("password")

    try:

        user = User.objects.get(
            email=email,
            password=password
        )

        return Response({

            "status": "success",

            "message": "Login Successful",

            "user": {

                "name": user.name,

                "email": user.email,

                "mobile": user.mobile

            }

        })

    except User.DoesNotExist:

        return Response({

            "status": "error",

            "message": "Invalid Email or Password"

        }, status=400)