from django.urls import path
from . import views
urlpatterns = [
    path('',views.index),
    path('geojson/<warstwa>',views.geojson),
    path('send/',views.sendtoadmin)
]
