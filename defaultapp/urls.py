from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login',views.login,name='login'),
    path('signup',views.signup,name='signup'),
    path('logincheck',views.logincheck,name='logincheck'),
    path('signupcheck',views.signupcheck,name='signupcheck'),
    # dynamic link for dashboard
    path('dashboard/<str:username>',views.dashboard, name='dashboard'),
    path('logout',views.signupcheck,name='logout'),

]