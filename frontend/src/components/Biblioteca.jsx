import { useEffect, useState } from 'react'

import { apiUrl } from '../api'

export default function Biblioteca() {

  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetch(apiUrl('/livros/'))
      .then((response) => response.json())
      .then((data) => {
        setLivros(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar livros:', error)
      })
  }, [])

  return (
    <div className="bg-[#f8f8f8]">

     
      <section className="pt-28 pb-10 text-center">

        <h1 className="font-[Gloock] text-6xl font-bold mb-8">
          Nossa Biblioteca
        </h1>

   
        <div className="bg-[#D8E8FA] max-w-6xl mx-auto rounded-lg px-8 py-6 text-left shadow-sm">

          <h2 className="font-[Gloock] text-3xl font-bold">
            Compre e Faça a diferença
          </h2>

          <p className="text-gray-700 text-lg">
            Toda compra ajuda a manter nosso projeto vivo e leva leitura para quem mais precisa.
          </p>

        </div>

    
       

      </section>


      <section className="max-w-6xl mx-auto px-10 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {livros.map((livro) => (

            <div
              key={livro.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300"
            >

          
              <div className="w-full h-[260px] overflow-hidden rounded-xl bg-gray-100">

                {livro.imagem ? (
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Sem imagem
                  </div>
                )}

              </div>

            
              <div className="mt-4">

                <h3 className="font-semibold text-lg leading-tight mb-2">
                  {livro.titulo}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {livro.autor}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {livro.descricao}
                </p>

                <p className="font-bold text-2xl text-[#1B56AE]">
                  R$ {livro.preco}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

   
      <section className="bg-[#D8E8FA] py-20 text-center px-10">

        <h2 className="font-[Gloock] text-5xl font-bold mb-6">
          Sua Compra Transforma Vidas
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Cada livro vendido contribui para a distribuição de livros gratuitos em comunidades carentes.
          Ao comprar, você está investindo em educação e cultura para todos.
        </p>

        <button className="bg-white text-[#1B56AE] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#1B56AE] hover:text-white transition duration-300">
          Entrar em Contato
        </button>

      </section>

    </div>
  )
}
