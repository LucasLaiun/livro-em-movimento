import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import logo from '../assets/logo-removebg-preview.png'

export default function Header() {

  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)

  const transparentPages = ['/', '/sobre']

  const isTransparent = transparentPages.includes(location.pathname)

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-4 transition duration-300
      ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-white text-black shadow-md'
      }`}
    >

      <div className="flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition"
        >
          <img
            src={logo}
            alt="Logo Livro em Movimento"
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />

          <h1 className="font-[Gloock] text-lg md:text-2xl lg:text-3xl font-bold">
            Livro em Movimento
          </h1>
        </Link>

   
        <nav className="hidden lg:block">
          <ul className="flex gap-12 text-lg font-bold">

            <li>
              <Link to="/" className="hover:opacity-70 transition">
                Início
              </Link>
            </li>

            <li>
              <Link to="/sobre" className="hover:opacity-70 transition">
                Sobre
              </Link>
            </li>

            <li>
              <Link to="/noticias" className="hover:opacity-70 transition">
                Notícias
              </Link>
            </li>

            <li>
              <Link to="/voluntarios" className="hover:opacity-70 transition">
                Voluntários
              </Link>
            </li>

            <li>
              <Link to="/doacao" className="hover:opacity-70 transition">
                Doação
              </Link>
            </li>

          </ul>
        </nav>

       
        <button
          className="lg:hidden text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

  
      {menuOpen && (
        <nav
          className="lg:hidden mt-6 bg-black/90 rounded-2xl p-6 backdrop-blur-md"
        >

          <ul className="flex flex-col gap-6 text-xl font-bold text-white">

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70 transition"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                to="/sobre"
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70 transition"
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                to="/noticias"
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70 transition"
              >
                Notícias
              </Link>
            </li>

            <li>
              <Link
                to="/voluntarios"
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70 transition"
              >
                Voluntários
              </Link>
            </li>

            <li>
              <Link
                to="/doacao"
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70 transition"
              >
                Doação
              </Link>
            </li>

          </ul>

        </nav>
      )}

    </header>
  )
}