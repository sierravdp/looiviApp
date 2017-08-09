from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView
from .models import Business
from django.contrib.auth.decorators import login_required

def business_exist(em):
		if Business.objects.filter(email=em).exists():
			return True
		else:
			return False

def is_admin_business(em, passw):
	if Business.objects.filter(email=em,password=passw).exists():
		return True
	else:
		return False

def delete_admin_business(em):
	Business.objects.filter(email=em).delete()

class Menu(TemplateView):
     template_name = "menu.html"

@login_required
def Business(request):
    return render(request, 'business.html')

class Contest1(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'contest.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'contest.html', {})

class Contest(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'contest.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'contest.html', {})

class Login(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'login.html', {})

	def post(self, request, *args, **kwargs):
		if request.method == 'POST' and 'login_business' in request.POST:
			em = request.POST.get('email')
			passw = request.POST.get('password')
			if (is_admin_business(em,passw)):
				admin = Business.objects.filter(email=em,password=passw)
				context = {"admin": admin[0]}
				return render(request, 'business.html', context)
			else:
				context = {'authenticated':False}
				return render(request, 'login.html', context)
		if request.method == 'POST' and 'fb_login' in request.POST:
			print request
		else:
			return render(request, 'login.html',{})

class Signup(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'signup.html', {})

	def post(self, request, *args, **kwargs):
		if request.method == 'POST' and 'new_business' in request.POST:
			em = request.POST.get('email')
			if (business_exist(em)):
				context = {"registered": True}
				return render(request, 'signup.html', context)
			else:
				un = request.POST.get('name')
				ln = request.POST.get('lastname')
				#gend = request.POST.get('gender')
				company = request.POST.get('company')
				em = request.POST.get('email')
				passw = request.POST.get('password')
				url = company+".com"
				admin = Business.objects.create(sites=url,firstname=un,lastname=ln,email=em, password=passw,company_name=company)
				admin.save()
				new_admin = Business.objects.filter(email=em,password=passw)
				context = {"admin": new_admin[0], 'authenticated':True}
				return render(request, 'business.html', context)
		else:
			return render(request, 'signup.html',{})

class Prices(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'prices.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'prices.html',{})

class Prueba(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'analytics.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'analytics.html',{})

class Index(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'index.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'index.html',{})

