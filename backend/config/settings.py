from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


# =====================================
# SECURITY
# =====================================
SECRET_KEY = 'secret-key'

DEBUG = True

ALLOWED_HOSTS = [
    'breathe-esg1-59hl.onrender.com',
    '127.0.0.1',
    'localhost',
]


# =====================================
# INSTALLED APPS
# =====================================
INSTALLED_APPS = [

    # DJANGO DEFAULT
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # THIRD PARTY
    'rest_framework',
    'corsheaders',

    # LOCAL APPS
    'users',
    'ingestion',
    'emissions',
    'reviews',
]


# =====================================
# MIDDLEWARE
# =====================================
MIDDLEWARE = [

    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',

    'django.middleware.common.CommonMiddleware',

    'django.middleware.csrf.CsrfViewMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',

    'django.contrib.messages.middleware.MessageMiddleware',

    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# =====================================
# ROOT URL
# =====================================
ROOT_URLCONF = 'config.urls'


# =====================================
# TEMPLATES
# =====================================
TEMPLATES = [

    {
        'BACKEND':
        'django.template.backends.django.DjangoTemplates',

        'DIRS': [],

        'APP_DIRS': True,

        'OPTIONS': {

            'context_processors': [

                'django.template.context_processors.debug',

                'django.template.context_processors.request',

                'django.contrib.auth.context_processors.auth',

                'django.contrib.messages.context_processors.messages',

            ],
        },
    },
]


# =====================================
# WSGI
# =====================================
WSGI_APPLICATION = 'config.wsgi.application'


# =====================================
# DATABASE (MongoDB Atlas)
# =====================================
DATABASES = {

    'default': {

        'ENGINE': 'djongo',

        'NAME': 'breathe_esg',

        'CLIENT': {

            'host':
            'mongodb+srv://muthurajlingam788:Muthu%4002@cluster0.vgobnxf.mongodb.net/breathe_esg?retryWrites=true&w=majority'

        }
    }
}


# =====================================
# PASSWORD VALIDATION
# =====================================
AUTH_PASSWORD_VALIDATORS = []


# =====================================
# LANGUAGE
# =====================================
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# =====================================
# STATIC FILES
# =====================================
STATIC_URL = 'static/'


# =====================================
# MEDIA FILES
# =====================================
MEDIA_URL = '/media/'

MEDIA_ROOT = BASE_DIR / 'media'


# =====================================
# DEFAULT AUTO FIELD
# =====================================
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# =====================================
# CORS
# =====================================
CORS_ALLOW_ALL_ORIGINS = True


# =====================================
# REST FRAMEWORK
# =====================================
REST_FRAMEWORK = {

    'DEFAULT_RENDERER_CLASSES': [

        'rest_framework.renderers.JSONRenderer',

    ]
}
