from django.conf import settings

from django.contrib import admin
from django.conf.urls import url
from django.conf.urls.static import static
from .views import homei,get_dataa
from django.urls import path,include
urlpatterns = [
    url(r'admin/', admin.site.urls),
    url(r'^$', homei),
    url(r'data/', get_dataa),
    
]

