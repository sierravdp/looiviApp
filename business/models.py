from __future__ import unicode_literals

from django.db import models

class Business(models.Model):
    sites = models.CharField(max_length=50)
    package = models.CharField(max_length=50)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50,null=True)
    company_name = models.CharField(max_length=50)
    fb_link = models.CharField(max_length=200,null=True)
    tw_link = models.CharField(max_length=200,null=True)
    insta_link = models.CharField(max_length=200,null=True)
    gplus_link = models.CharField(max_length=200,null=True)
    li_link = models.CharField(max_length=200,null=True)
    member_since = models.DateTimeField(auto_now_add=True)

