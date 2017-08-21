<<<<<<< HEAD
from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns('',
    host(r'www', settings.ROOT_URLCONF, name='www'),
    host(r'(?!www)\w+', 'business.urls', name='business'),
=======
from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns('',
    host(r'www', settings.ROOT_URLCONF, name='www'),
    host(r'(?!www)\w+', 'business.urls', name='business'),
>>>>>>> 376cc5db5f3cd684314c2e6bcb1ecab2081891c5
)