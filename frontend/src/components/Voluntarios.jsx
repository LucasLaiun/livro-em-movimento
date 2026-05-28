import { useState } from 'react'
import joelpic from '../assets/joelpic.jpg'

import { apiUrl } from '../api'

export default function Voluntarios() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area_interesse: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(apiUrl('/voluntarios/'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          area_interesse: [formData.area_interesse],
        }),
      })

      if (response.ok) {
        alert('Solicitação enviada com sucesso!')

        setFormData({
          nome: '',
          email: '',
          telefone: '',
          area_interesse: '',
        })
      } else {
        alert('Erro ao enviar.')
      }
    } catch (error) {
      console.error(error)
      alert('Erro no servidor.')
    }
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen px-6 md:px-12 pt-36 pb-16">

      <div className="text-center mb-8">

        <h1 className="font-[Gloock] text-4xl md:text-6xl font-bold mb-6">
          Voluntários
        </h1>

        <p className="text-base leading-8 text-gray-700 max-w-[520px] mx-auto">
          Faça parte do projeto Livro em Movimento e ajude a levar
          educação, cultura e leitura para diversas comunidades.
          Toda ajuda faz diferença e pode transformar vidas através
          do conhecimento.
        </p>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">

        <div className="w-full flex flex-col lg:flex-row gap-10 items-stretch justify-center">

          <div className="bg-white w-full max-w-[460px] rounded-[28px] shadow-xl px-8 py-8 flex flex-col justify-center">

            <h2 className="font-[Gloock] text-2xl md:text-3xl font-bold mb-6 text-center">
              Formulário de Voluntário
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              <div>
                <label className="text-sm block mb-1 font-medium">
                  Nome Completo*
                </label>

                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full h-11 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                />
              </div>

              <div>
                <label className="text-sm block mb-1 font-medium">
                  Telefone
                </label>

                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full h-11 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                />
              </div>

              <div>
                <label className="text-sm block mb-1 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                />
              </div>

              <div>
                <label className="text-sm block mb-1 font-medium">
                  Área de Atuação
                </label>

                <select
                  name="area_interesse"
                  value={formData.area_interesse}
                  onChange={handleChange}
                  className="w-full h-11 bg-[#ECECEC] rounded-full px-5 outline-none focus:ring-2 focus:ring-[#1B56AE]"
                >
                  <option value="">Selecione uma área</option>

                  <option value="Mídias">
                    Mídias
                  </option>

                  <option value="Captação de Recursos">
                    Captação de Recursos
                  </option>

                  <option value="Comunicação">
                    Comunicação e Marketing
                  </option>

                  <option value="Planejamento">
                    Planejamento
                  </option>

                </select>
              </div>

              <button
                type="submit"
                className="bg-[#1B56AE] hover:bg-[#17478f] transition text-white text-base h-11 rounded-full mt-2 font-semibold"
              >
                Enviar Solicitação
              </button>

            </form>

          </div>

          <div className="bg-[#3E6485] w-full max-w-[420px] rounded-[32px] shadow-2xl px-8 md:px-10 py-12 flex flex-col justify-center">

            <h2 className="font-[Gloock] text-4xl md:text-5xl leading-tight font-bold mb-8 text-white text-center lg:text-left">
              História da Equipe
            </h2>

            <p className="text-base leading-8 text-white/90 text-center lg:text-left">
              O projeto Livro em Movimento surgiu com o objetivo de levar
              acesso à leitura para pessoas em situação de vulnerabilidade,
              promovendo educação, cultura e inclusão social através dos
              livros e do trabalho voluntário.

              <br /><br />

              Nossa equipe acredita que a leitura transforma vidas,
              amplia oportunidades e fortalece comunidades.
            </p>

          </div>

        </div>

        <div className="w-full flex flex-col items-center">

          <h2 className="font-[Gloock] text-3xl md:text-5xl font-bold text-center mb-10">
            Equipe
          </h2>

          <div className="bg-white rounded-[24px] overflow-hidden shadow-xl w-[260px] hover:scale-105 transition duration-300">

            <img
              src={joelpic}
              alt="Joel Prata"
              className="w-full h-[320px] object-cover"
            />

            <div className="py-6 px-4 text-center">

              <p className="font-[Gloock] text-4xl leading-none mb-2">
                Joel
              </p>

              <p className="text-sm text-gray-500">
                CEO da ONG Livro em Movimento
              </p>

            </div>

          </div>

        </div>



      </div>

    </div>
  )
}
