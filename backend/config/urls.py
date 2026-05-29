from django.contrib import admin
from django.urls import include, path, re_path

from django.conf import settings
from django.conf.urls.static import static


from doacao.views import receber_doacao
from django.views.generic import TemplateView


backend_urlpatterns = [
    path('admin/', admin.site.urls),
    path('doacao/', receber_doacao),
    path('doacao/', include('doacao.urls')),
    path('voluntarios/', include('voluntarios.urls')),
    path('contato/', include('contato.urls')),
    path('noticias/', include('noticias.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns = [
    *backend_urlpatterns,
    re_path(r'^(?!admin|static|media).*$', TemplateView.as_view(template_name='index.html')),
]
