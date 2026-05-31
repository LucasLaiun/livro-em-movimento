import { Link } from 'react-router-dom'
import { WHATSAPP_URL, FACEBOOK_URL, CONTACT_EMAIL } from '../constants'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

function FacebookIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99
        4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007
        1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83
        c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385
        C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099
        -.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223
        -.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761
        -1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446
        -.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075
        -.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008
        -.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04
        2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487
        .709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085
        1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124
        -.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378
        l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26
        c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825
        9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413
        -18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0
        2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0
        005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821
        0 00-3.48-8.413z" />
    </svg>
  )
}

function EmailCopiavel({ email }) {
  const { copiado, copiar } = useCopyToClipboard()

  return (
    <a
      href={`mailto:${email}`}
      onClick={() => copiar(email)}
      className="hover:text-white transition underline-offset-2 hover:underline cursor-pointer"
      aria-label={`Enviar e-mail para ${email}`}
      title="Clique para copiar e abrir o cliente de e-mail"
    >
      {copiado ? (
        <span className="text-green-400 font-medium">✓ Email copiado!</span>
      ) : (
        email
      )}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#031B4E] text-white">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-12 py-14">

        <div>
          <h2 className="font-[Gloock] text-4xl mb-4">
            Livro em Movimento
          </h2>

          <p className="text-sm text-gray-300 leading-6">
            Transformando vidas através da leitura.
            <br />
            Promovendo acesso à educação e cultura para
            todas as idades.
          </p>
        </div>

        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-white transition">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/doacao" className="hover:text-white transition">
                Doação
              </Link>
            </li>
            <li>
              <Link to="/voluntarios" className="hover:text-white transition">
                Seja voluntário
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Contato
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <EmailCopiavel email={CONTACT_EMAIL} />
            </li>
            <li>(21) 98097-4799</li>
            <li>
              Terminal Rodoviário Presidente João Goulart,
              Niterói, RJ, Brazil
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-[Gloock] text-3xl mb-4">
            Redes sociais
          </h3>

          <p className="text-gray-300 mb-4">
            Nos acompanhe nas redes sociais
          </p>

          <div className="flex gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acesse nossa página no Facebook"
              className="w-8 h-8 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#1464d8] transition"
            >
              <FacebookIcon size={18} />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="w-8 h-8 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#1ea855] transition"
            >
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 text-center text-sm text-gray-300">
        © 2026 Livro em Movimento. Todos os direitos reservados.
      </div>

    </footer>
  )
}
