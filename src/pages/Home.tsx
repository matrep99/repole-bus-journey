import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Home() {
  const location = useLocation()

  // scroll a #biglietti o #contatti quando arrivi dalla navigazione
  useEffect(() => {
    const s = (location.state as any)?.scrollTo as string | undefined
    if (s) {
      const el = document.getElementById(s)
      setTimeout(() => el?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      history.replaceState(null, '', location.pathname + location.search)
    }
  }, [location])

  return (
    <div>
      {/* HERO */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D4FA8]">Dal 1970 al servizio dei viaggiatori</h1>
        <p className="mt-2 text-slate-600">Colleghiamo paesi e persone ogni giorno</p>
        <div className="mt-6">
          <Link to="/orari-e-prezzi" className="inline-block rounded-full px-5 py-3 bg-[#0D4FA8] text-white font-bold hover:bg-[#F28C28] hover:text-black">
            Orari e Prezzi ufficiali
          </Link>
        </div>
      </section>

      {/* BIGLIETTI */}
      <section id="biglietti" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-2xl font-bold text-[#0D4FA8] mb-4">Biglietti</h2>
        <a href="https://mycard.cotrab.eu/" target="_blank" rel="noopener"
           className="inline-block rounded-full px-5 py-3 bg-[#0D4FA8] text-white font-bold hover:bg-[#F28C28] hover:text-black">
          Richiedi la tessera elettronica
        </a>
      </section>
    </div>
  )
}