import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex items-center justify-center px-6 pt-36 pb-16">

      <div className="text-center max-w-[560px]">

        <p className="font-[Gloock] text-[120px] md:text-[160px] leading-none text-[#1B56AE]">
          404
        </p>

        <h1 className="font-[Gloock] text-4xl md:text-5xl font-bold mb-6">
          Página não encontrada
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          A página que você tentou acessar não existe ou foi removida.
          Volte para a página inicial e continue navegando pelo Livro em Movimento.
        </p>

        <Link to="/">
          <button className="font-[Gloock] bg-[#1B56AE] text-white px-8 py-3 rounded-xl shadow hover:bg-white hover:text-[#1B56AE] hover:shadow-xl transition duration-300">
            Voltar para a Home
          </button>
        </Link>

      </div>

    </div>
  )
}
