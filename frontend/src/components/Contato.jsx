import { useEffect, useState } from 'react'

import { apiUrl } from '../api'

const CONTACT_API = apiUrl('/contato/info/')

const FACEBOOK_URL = 'https://www.facebook.com/llivroemmovimento'

function FacebookIcon({ size = 22 }) {
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


function WhatsAppIcon({ size = 22 }) {
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

export default function Contato() {
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(CONTACT_API)
      .then((res) => {
        if (!res.ok) throw new Error('Não foi possível carregar as informações de contato.')
        return res.json()
      })
      .then(setInfo)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])


  const whatsappUrl = info?.whatsapp_url || 'https://wa.me/21980974799'
  const mailtoUrl   = info?.mailto_url   || 'mailto:aclivroemmovimento@gmail.com'
  const email       = info?.email        || 'aclivroemmovimento@gmail.com'
  const phone       = info?.whatsapp     || '(21) 98097-4799'

  return (
    <div className="bg-[#F8F8F8] min-h-screen px-10 py-6">

      <h1 className="font-[Gloock] text-[52px] font-bold text-center mb-10">
        Contato
      </h1>

      {loading && (
        <p className="text-center text-gray-500 text-lg">
          Carregando informações…
        </p>
      )}

      {!loading && error && (
        <p className="text-center text-amber-600 text-sm mb-6">
          ⚠️ {error} — exibindo dados padrão.
        </p>
      )}

      <div className="flex justify-center gap-16 items-start flex-wrap mt-4">

       
        <div className="flex flex-col gap-6 max-w-[420px] w-full">

        
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="flex items-center gap-5 bg-[#25D366] text-white rounded-[22px] shadow-md px-8 py-6 hover:scale-[1.02] hover:shadow-lg transition"
          >
            <span className="flex-shrink-0">
              <WhatsAppIcon size={36} />
            </span>
            <div>
              <p className="font-[Gloock] text-[20px] font-bold leading-tight">
                WhatsApp
              </p>
              <p className="text-[14px] opacity-90 mt-1">
                {phone}
              </p>
              <p className="text-[12px] opacity-75 mt-1">
                Clique para iniciar uma conversa
              </p>
            </div>
          </a>

          <a
            href={mailtoUrl}
            aria-label={`Enviar e-mail para ${email}`}
            className="flex items-center gap-5 bg-white rounded-[22px] shadow-md px-8 py-6 hover:scale-[1.02] hover:shadow-lg transition border border-gray-100"
          >
            <span className="flex-shrink-0 text-[#1B56AE]">
          
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={36} height={36} aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928
                  5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3
                  3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </span>
            <div>
              <p className="font-[Gloock] text-[20px] font-bold leading-tight text-black">
                E-mail
              </p>
              <p className="text-[13px] text-gray-600 mt-1 break-all">
                {email}
              </p>
            </div>
          </a>

         
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acesse nossa página no Facebook"
            className="flex items-center gap-5 bg-[#1877F2] text-white rounded-[22px] shadow-md px-8 py-6 hover:scale-[1.02] hover:shadow-lg transition"
          >
            <span className="flex-shrink-0">
              <FacebookIcon size={36} />
            </span>
            <div>
              <p className="font-[Gloock] text-[20px] font-bold leading-tight">
                Facebook
              </p>
              <p className="text-[12px] opacity-80 mt-1">
                Acesse nossa página e fique por dentro das novidades
              </p>
            </div>
          </a>

        </div>

  
        <div className="bg-[#B7D5EE] w-[340px] rounded-[26px] shadow-xl px-8 py-8 flex-shrink-0">

          <h2 className="font-[Gloock] text-[32px] leading-[36px] font-bold text-black mb-6">
            Onde nos encontrar
          </h2>

          <div className="flex flex-col gap-4 text-[13px] leading-[20px] text-black">

            <div>
              <p className="font-bold mb-1">📍 Endereço</p>
              <p>
                Terminal Rodoviário Presidente João Goulart,<br />
                Niterói, RJ, Brasil
              </p>
            </div>

            <div>
              <p className="font-bold mb-1">📞 Telefone</p>
              <p>{phone}</p>
            </div>

            <div>
              <p className="font-bold mb-1">✉️ E-mail</p>
              <p className="break-all">{email}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
