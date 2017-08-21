# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView
#from .models import Client

class Signup(View):
	def get(self, request, *args, **kwargs):
		if 'new_business' in request.POST:
		 	em = request.POST.get('email')
		 	if (business_exist(em)):
		 		context = {"registered": True}
		 		return render(request, 'signup.html', context)
		 	else:
		# 		un = request.POST.get('name')
		# 		ln = request.POST.get('lastname')
		 		#gend = request.POST.get('gender')
		# 		company = request.POST.get('company')
		 		em = request.POST.get('email')
		 		passw = request.POST.get('password')
		# 		url = company+".com"
		# 		admin = Business.objects.create(sites=url,firstname=un,lastname=ln,email=em, password=passw,company_name=company)
		# 		admin.save()
		# 		new_admin = Business.objects.filter(email=em,password=passw)
		# 		context = {"admin": new_admin[0], 'authenticated':True}
		 		return render(request, 'client/index.html', context)
		else:
			return render(request, 'signup.html',{})

	def post(self, request, *args, **kwargs):
		if request.method == 'POST' and 'new_business' in request.POST:
		 	em = request.POST.get('email')
		 	if (business_exist(em)):
		 		context = {"registered": True}
		 		return render(request, 'signup.html', context)
		 	else:
		# 		un = request.POST.get('name')
		# 		ln = request.POST.get('lastname')
		 		#gend = request.POST.get('gender')
		# 		company = request.POST.get('company')
		 		em = request.POST.get('email')
		 		passw = request.POST.get('password')
		# 		url = company+".com"
		# 		admin = Business.objects.create(sites=url,firstname=un,lastname=ln,email=em, password=passw,company_name=company)
		# 		admin.save()
		# 		new_admin = Business.objects.filter(email=em,password=passw)
		# 		context = {"admin": new_admin[0], 'authenticated':True}
		 		return render(request, 'client/index.html', context)
		else:
			#print("NOFUE POR EMAIL")
			return render(request, 'signup.html',{})

class Login(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'login.html', {})

	def post(self, request, *args, **kwargs):
		# if request.method == 'POST' and 'login_business' in request.POST:
		# 	em = request.POST.get('email')
		# 	passw = request.POST.get('password')
		# 	if (is_admin_business(em,passw)):
		# 		admin = Business.objects.filter(email=em,password=passw)
		# 		context = {"admin": admin[0]}
		# 		return render(request, 'business.html', context)
		# 	else:
		# 		context = {'authenticated':False}
		# 		return render(request, 'login.html', context)
		#if request.method == 'POST' and 'fb_login' in request.POST:
		# 	print (request)
		#else:
		return render(request, 'login.html',{})

class Prices(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'plans.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'plans.html', {})

class Team(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'team.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'team.html', {})

class Tools(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'tools1.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'tools1.html', {})

class Campaigns(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'campaign1.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'campaign1.html', {})

class Index(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'index.html', {})

	def post(self, request, *args, **kwargs):
		return render(request, 'index.html',{})