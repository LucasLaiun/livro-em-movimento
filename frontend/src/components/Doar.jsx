import { useState } from 'react'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

import { apiUrl } from '../api'

const CHAVE_PIX = 'contato@livrosemmovimento.org.br'

export default function Doacao() {
  const [form, setForm] = useState({
    nome: '', email: '', telefone: '', endereco: '', quantidade_livros: ''
  })
  const [status, setStatus] = useState(null) // 'sucesso' | 'erro'

  const { copiado: pixCopiado, copiar: copiarPix } = useCopyToClipboard()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(apiUrl('/doacao/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (response.ok) setStatus('sucesso')
      else setStatus('erro')
    } catch {
      setStatus('erro')
    }
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen px-10 py-24">
      <div className="mb-12 text-center">
        <h1 className="font-[Gloock] text-[52px] font-bold mb-4">Doe Livros</h1>
        <p className="text-[18px] leading-[30px] text-black max-w-[700px] mx-auto">
          O projeto Livro em Movimento promove o acesso à leitura e
          educação para comunidades carentes, espalhando conhecimento e esperança.
        </p>
      </div>

      <div className="flex justify-center gap-32 items-start mt-16 flex-wrap">
        <div className="bg-white w-[450px] rounded-[30px] shadow-md px-12 py-12">
          <h2 className="font-[Gloock] text-[30px] font-bold mb-10">Formulário de Doação</h2>

          {status === 'sucesso' && (
            <p className="text-green-600 mb-6 font-medium">
              Doação registrada com sucesso! Entraremos em contato em breve.
            </p>
          )}
          {status === 'erro' && (
            <p className="text-red-500 mb-6 font-medium">
              Erro ao enviar. Tente novamente.
            </p>
          )}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-[14px] block mb-2">Nome Completo*</label>
              <input name="nome" type="text" required onChange={handleChange}
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none" />
            </div>
            <div>
              <label className="text-[14px] block mb-2">Email</label>
              <input name="email" type="email" onChange={handleChange}
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none" />
            </div>
            <div>
              <label className="text-[14px] block mb-2">Telefone</label>
              <input name="telefone" type="text" onChange={handleChange}
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none" />
            </div>
            <div>
              <label className="text-[14px] block mb-2">Endereço</label>
              <input name="endereco" type="text" onChange={handleChange}
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none" />
            </div>
            <div>
              <label className="text-[14px] block mb-2">Quantidade de Livros</label>
              <input name="quantidade_livros" type="number" onChange={handleChange}
                className="w-full h-[45px] bg-[#D9D9D9] rounded-full px-6 outline-none" />
            </div>
            <button type="submit"
              className="bg-[#1B56AE] text-white text-[14px] h-[48px] rounded-full mt-4 hover:bg-[#15458A] transition">
              Enviar Solicitação de Doação
            </button>
          </form>
        </div>

      
        <div className="bg-[#3E6485] w-[430px] h-[420px] rounded-[30px] shadow-xl px-12 py-12">
          <h2 className="font-[Gloock] text-[32px] font-bold text-white mb-8">Doação via Pix</h2>
          <p className="text-[16px] leading-[28px] text-white mb-14">
            Prefere fazer uma doação em dinheiro? Use nossa chave Pix para contribuir diretamente com o projeto.
          </p>
          <button
            type="button"
            onClick={() => copiarPix(CHAVE_PIX)}
            aria-label="Copiar chave Pix"
            title="Clique para copiar a chave Pix"
            className="bg-[#AAB9C5] w-[320px] min-h-[130px] rounded-[22px] shadow-md px-6 py-6 text-left cursor-pointer hover:brightness-105 active:scale-[0.98] transition-all"
          >
            <h3 className="font-[Gloock] text-[22px] font-bold mb-3 text-black">
              Chave Pix
            </h3>

            {pixCopiado ? (
              <p className="text-[14px] font-semibold text-green-700">
                ✓ Chave copiada!
              </p>
            ) : (
              <p className="text-[14px] text-black break-all">
                {CHAVE_PIX}
              </p>
            )}

            <p className="text-[11px] text-gray-600 mt-2">
              {pixCopiado ? 'Cole no seu app de pagamento' : 'Clique para copiar'}
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
