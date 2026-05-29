from django.shortcuts import render

# Create your views here.
def inicio(request):
    return render(request, 'core/inicio.html')

def sobre(request):
    return render(request, 'core/sobre.html')

def home(request):
    return render(request, 'home.html')