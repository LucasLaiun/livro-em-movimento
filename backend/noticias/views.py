from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .models import Evento, Noticia
from django.utils import timezone
from django.conf import settings


def lista_eventos(request):
    agora = timezone.now()

    noticias = Noticia.objects.all()
    futuros = Evento.objects.filter(data_evento__gte=agora).order_by('data_evento')
    passados = Evento.objects.filter(data_evento__lt=agora).order_by('-data_evento')

    return render(request, 'noticias/eventos.html', {
        'noticias': noticias,
        'futuros': futuros,
        'passados': passados
    })


@require_GET
def noticias_api(request):
    """
    Endpoint JSON consumido pelo frontend React.
    Retorna notícias e próximos eventos ordenados.
    """
    agora = timezone.now()

    noticias_qs = Noticia.objects.all().values(
        'id', 'titulo', 'descricao', 'imagem', 'criado_em'
    )
    eventos_qs = (
    Evento.objects.all()
        .order_by('-data_evento')
        .values('id', 'titulo', 'descricao', 'data_evento', 'local', 'imagem')
    )

    media_prefix = f"{getattr(settings, 'BACKEND_ROUTE_PREFIX', '')}{settings.MEDIA_URL}"
    base_url = request.build_absolute_uri(media_prefix)

    def build_img(path):
        return (base_url + path) if path else None

    noticias = [
        {
            'id': n['id'],
            'titulo': n['titulo'],
            'descricao': n['descricao'],
            'imagem_url': build_img(n['imagem']),
            'criado_em': n['criado_em'],
        }
        for n in noticias_qs
    ]

    eventos = [
        {
            'id': e['id'],
            'titulo': e['titulo'],
            'descricao': e['descricao'],
            'data_evento': e['data_evento'],
            'local': e['local'],
            'imagem_url': build_img(e['imagem']),
        }
        for e in eventos_qs
    ]

    return JsonResponse({
        'noticias': noticias,
        'eventos': eventos
    })
