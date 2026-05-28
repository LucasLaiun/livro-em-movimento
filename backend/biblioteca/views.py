from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import Livro
from django.http import JsonResponse
from django.conf import settings


def build_media_url(request, media_url):
    if not media_url:
        return ''

    prefix = getattr(settings, 'BACKEND_ROUTE_PREFIX', '')
    if prefix and media_url.startswith('/') and not media_url.startswith(f'{prefix}/'):
        media_url = f'{prefix}{media_url}'

    return request.build_absolute_uri(media_url)


def livros_json(request):
    livros = Livro.objects.all()

    data = []

    for livro in livros:
        data.append({
            'id': livro.id,
            'titulo': livro.titulo,
            'autor': livro.autor,
            'preco': float(livro.preco),
            'descricao': livro.descricao,

            'imagem': build_media_url(request, livro.imagem.url) if livro.imagem else '',
        })

    return JsonResponse(data, safe=False)
