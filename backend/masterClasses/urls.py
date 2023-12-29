from django.urls import path
from .views import MasterclassList, MasterclassDetail, ThemeList, ThemeDetail

urlpatterns = [
    path('themes/', ThemeList.as_view(), name='theme-list'),
    path('theme/<int:pk>/', ThemeDetail.as_view(), name='theme-detail'),
    path('master-classes/', MasterclassList.as_view(), name='masterclass-list'),
    path('master-class/<int:pk>/', MasterclassDetail.as_view(), name='masterclass-detail'),
]