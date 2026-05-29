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
    Retorna notícias e eventos ordenados.
    """
    def imagem_url(field_file):
        """
        Devolve URL absoluta da imagem.

        Delega ao storage backend via FieldFile.url:
        - Em produção, MediaCloudinaryStorage devolve uma URL absoluta do
          Cloudinary (https://res.cloudinary.com/...). build_absolute_uri
          mantém URL absoluta intacta.
        - Em dev local, FileSystemStorage devolve path relativo
          (/media/...). build_absolute_uri prepende o host.
        """
        if not field_file:
            return None
        return request.build_absolute_uri(field_file.url)

    noticias_qs = Noticia.objects.all()
    eventos_qs = Evento.objects.all().order_by('-data_evento')

    noticias = [
        {
            'id': n.id,
            'titulo': n.titulo,
            'descricao': n.descricao,
            'imagem_url': imagem_url(n.imagem),
            'criado_em': n.criado_em,
        }
        for n in noticias_qs
    ]

    eventos = [
        {
            'id': e.id,
            'titulo': e.titulo,
            'descricao': e.descricao,
            'data_evento': e.data_evento,
            'local': e.local,
            'imagem_url': imagem_url(e.imagem),
        }
        for e in eventos_qs
    ]

    return JsonResponse({
        'noticias': noticias,
        'eventos': eventos
    })
