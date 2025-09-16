import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // vai in Home e scrolla alla sezione
  const goHomeAndScroll = (id: 'biglietti' | 'contatti') => {
    navigate('/', { state: { scrollTo: id } })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-wide text-[#0D4FA8]">REPOLE</Link>

        {/* Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 font-semibold">
            <li><Link to="/" className="hover:text-[#F28C28]">Home</Link></li>
            <li><Link to="/orari-e-prezzi" className="hover:text-[#F28C28]">Orari e Prezzi</Link></li>
            <li><button onClick={() => goHomeAndScroll('biglietti')} className="hover:text-[#F28C28]">Biglietti</button></li>
            <li><button onClick={() => goHomeAndScroll('contatti')} className="hover:text-[#F28C28]">Contatti</button></li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Apri menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-[2px] bg-[#0D4FA8]" />
          <span className="w-6 h-[2px] bg-[#0D4FA8]" />
          <span className="w-6 h-[2px] bg-[#0D4FA8]" />
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* X in alto a destra */}
          <button
            aria-label="Chiudi menu"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-3xl leading-none text-[#0D4FA8] hover:text-[#F28C28]"
          >✕</button>

          <ul className="mt-24 px-6 flex flex-col gap-5 text-lg font-bold text-[#0D4FA8]">
            <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-[#F28C28]">Home</Link></li>
            <li><Link to="/orari-e-prezzi" onClick={() => setOpen(false)} className="hover:text-[#F28C28]">Orari e Prezzi</Link></li>
            <li><button onClick={() => goHomeAndScroll('biglietti')} className="text-left hover:text-[#F28C28]">Biglietti</button></li>
            <li><button onClick={() => goHomeAndScroll('contatti')} className="text-left hover:text-[#F28C28]">Contatti</button></li>
          </ul>
        </div>
      )}
    </header>
  )
}