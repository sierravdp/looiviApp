from django.conf.urls import include, url
from .views import Index, Contest, Contest1, Login, Signup, Prices, Prueba, Menu, Business

urlpatterns = [
	url(r'^$', Index.as_view(), name='index'),
	url(r'^concursos/$', Contest.as_view(), name='contest'),
	url(r'^login/$', Login.as_view(), name='login'),
	url(r'^signup/$', Signup.as_view(), name='signup'),
	url(r'^prices/$', Prices.as_view(), name='prices'),
	url(r'^business/$', Business, name='client'),
	url(r'^prueba/$', Prueba.as_view(), name='prueba'),

	url(r'^menu/$', Menu.as_view(), name='menu'),
	#url(r'^home$', home, name='home'),
	url(r'^oauth/', include('social_django.urls', namespace='social')), 
	#url('', include('social.apps.django_app.urls', namespace='social')),
	#url(r'^concursos/plantilla1/$', Contest1.as_view(), name='contest1')
]