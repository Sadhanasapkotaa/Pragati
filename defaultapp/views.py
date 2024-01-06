from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login.html')

def signup(request):
    return render(request,'signup.html')

def logincheck(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username,password=password)

        if user is not None:
            auth.login(request,user)
            messages.info(request,'User exists')
            return redirect('/dashboard/'+username)
        else:
            messages.info(request,'Invalid credentials')
            return redirect('/login')
    else:
        messages.info(request,'Invalid credentials')
        return redirect('/')
    
def signupcheck(request):

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        repeatpassword = request.POST['repeatpassword']
        email = request.POST['email']


        if password == repeatpassword:
            if User.objects.filter(username=username).exists():
                messages.info(request,'Username taken')
                return redirect('/signup')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email taken')
                return redirect('/signup')
            else:
                user = User.objects.create_user(username=username, password=password,  email=email)
                user.save()
                messages.info(request,'User created')
                return redirect('/login')
        else:
            messages.info(request,'Passwords do not match')
            return redirect('/signup')
        
    else:
        return redirect('/')

@login_required
def dashboard(request,username):
    theuser = request.user
    if theuser.is_authenticated:
        return render(request,'dashboard.html',{'username':username})
    else:
        return render(request,'/')

def logout(request):
    auth.logout(request)
    messages.info(request,'Logged out')
    return redirect('/')