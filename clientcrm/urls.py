from django.conf.urls import include, url
from .views import CIndex, Campaign

urlpatterns = [
	url(r'^$', CIndex.as_view(), name='index'),
	url(r'^campana/$', Campaign.as_view(), name='campaign'),
	url(r'^oauth/', include('social_django.urls', namespace='social')), 
	#url('', include('social.apps.django_app.urls', namespace='social')),
	#url(r'^concursos/plantilla1/$', Contest1.as_view(), name='contest1')
]