

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { apiUrl } from '../api'

const API_URL = apiUrl('/noticias/api/')

const FIXED_BLOCK = {
  titulo: 'Eventos e Notícias',
  paragrafos: [
    `Aqui você encontra as últimas notícias sobre o projeto, além de eventos futuros relacionados à leitura e educação. Fique por dentro e participe!`,
  ],
}

const FUTUROS_FIXO = `Fique por dentro dos nossos próximos eventos! Estamos sempre organizando atividades para promover a leitura e a educação. Confira também as nossas redes sociais!`

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function formatDateTime(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function Noticias() {
  const [noticias, setNoticias] = useState([])
  const [eventos, setEventos] = useState([])
  const [apiStatus, setApiStatus] = useState('idle')
  const [apiError, setApiError]   = useState(null)

  useEffect(() => {
    setApiStatus('loading')
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar dados do servidor.')
        return res.json()
      })
      .then((data) => {
        setNoticias(data.noticias || [])
        setEventos(data.eventos || [])
        setApiStatus('done')
      })
      .catch((err) => {
        setApiError(err.message)
        setApiStatus('error')
      })
  }, [])

  return (
    <>
     
      <div className="bg-[#F8F8F8] min-h-screen px-10 py-6">

       
        <h1 className="font-[Gloock] text-[52px] font-bold text-center mb-10">
          Notícias
        </h1>

        <div className="flex justify-center gap-20 items-start flex-wrap">

     
          <div className="max-w-[640px] flex-1 min-w-[280px]">

           
            <div className="mb-12">
              <h2 className="font-[Gloock] text-[42px] leading-none font-bold mb-3">
                {FIXED_BLOCK.titulo}
              </h2>

              {FIXED_BLOCK.paragrafos.map((p, i) => (
                <p key={i} className="text-[12px] leading-[17px] text-black mb-5">
                  {p}
                </p>
              ))}
            </div>

        
            <div className="mb-12">
              <p className="text-[12px] leading-[17px] text-black max-w-[620px]">
                {FIXED_BLOCK.extra}
              </p>
            </div>

            {(apiStatus === 'loading' || noticias.length > 0) && (
              <hr className="border-gray-200 mb-8" />
            )}

            {apiStatus === 'loading' && (
              <p className="text-[12px] text-gray-400 italic mb-6">
                Carregando notícias cadastradas…
              </p>
            )}

            {apiStatus === 'error' && (
              <p className="text-[11px] text-amber-600 italic mb-6">
                {apiError} Os textos acima permanecem disponíveis.
              </p>
            )}

            {noticias.map((noticia) => (
              <article key={noticia.id} className="mb-12">

                {noticia.imagem_url && (
                  <img
                    src={noticia.imagem_url}
                    alt={noticia.titulo}
                    className="w-full max-h-[280px] object-cover rounded-[16px] mb-4"
                  />
                )}

                <h2 className="font-[Gloock] text-[36px] leading-none font-bold mb-2">
                  {noticia.titulo}
                </h2>

                <p className="text-[11px] text-gray-400 mb-3">
                  {formatDate(noticia.criado_em)}
                </p>

                <p className="text-[13px] leading-[20px] text-black whitespace-pre-line">
                  {noticia.descricao}
                </p>

              </article>
            ))}
            {eventos.map((evento) => (
              <article key={evento.id} className="mb-12">

                {evento.imagem_url && (
                  <img
                    src={evento.imagem_url}
                    alt={evento.titulo}
                    className="w-full max-h-[280px] object-cover rounded-[16px] mb-4"
                  />
                )}

                <h2 className="font-[Gloock] text-[36px] leading-none font-bold mb-2">
                  {evento.titulo}
                </h2>

                <p className="text-[11px] text-gray-400 mb-3">
                  {formatDateTime(evento.data_evento)}
                </p>

                {evento.local && (
                  <p className="text-[12px] text-gray-500 mb-3">
                    {evento.local}
                  </p>
                )}

                <p className="text-[13px] leading-[20px] text-black whitespace-pre-line">
                  {evento.descricao}
                </p>

              </article>
            ))}

          </div>
          <div className="bg-[#B7D5EE] w-[310px] h-fit rounded-[26px] shadow-xl px-8 py-8 mt-1 flex-shrink-0">

            <h2 className="font-[Gloock] text-[40px] leading-[42px] font-bold text-black mb-6">
              Futuros Projetos
            </h2>

       
            <p className="text-[12px] leading-[17px] text-black mb-6">
              {FUTUROS_FIXO}
            </p>

            
            {apiStatus === 'loading' && (
              <p className="text-[10px] text-gray-500 italic mt-4">
                Buscando eventos…
              </p>
            )}

          </div>

        </div>
      </div>

      
      <section className="bg-blue-100 py-20 px-10 text-center">

        <h2 className="font-[Gloock] text-[40px] md:text-[48px] font-bold mb-5">
          Sua Compra Transforma Vidas
        </h2>

        <p className="text-gray-700 text-[16px] leading-[26px] mb-10 max-w-[560px] mx-auto">
          Cada livro vendido contribui para a distribuição de livros gratuitos
          em comunidades carentes. Ao comprar, você está investindo em
          educação e cultura para todos.
        </p>

        <Link to="/contato">
          <button className="font-[Gloock] bg-white text-[#1B56AE] px-8 py-3 rounded-xl shadow hover:bg-[#1B56AE] hover:text-white hover:shadow-xl transition duration-300">
            Entrar em Contato
          </button>
        </Link>

      </section>
    </>
  )
}
