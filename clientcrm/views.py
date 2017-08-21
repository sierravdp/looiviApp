# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView

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

class Create(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'client/create_campaign.html', {})

	def post(self, request, *args, **kwargs):
			return render(request, 'client/create_campaign.html',{})

class Campaign(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'client/campaign_view.html', {})

	def post(self, request, *args, **kwargs):
			return render(request, 'client/campaign_view.html',{})

class CIndex(View):
	def get(self, request, *args, **kwargs):
		return render(request, 'client/index.html', {})

	def post(self, request, *args, **kwargs):
		if request.method == 'POST' and 'login_business' in request.POST:
			em = request.POST.get('email')
			passw = request.POST.get('password')
			if (is_admin_business(em,passw)):
				admin = Business.objects.filter(email=em,password=passw)
				context = {"admin": admin[0]}
				return render(request, 'cindex.html', context)
			else:
				context = {'authenticated':False}
				return render(request, 'login.html', context)
		if request.method == 'POST' and 'fb_login' in request.POST:
			print request
		else:
			return render(request, 'login.html',{})
