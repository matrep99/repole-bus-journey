import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import OrariPrezzi from './pages/OrariPrezzi'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orari-e-prezzi" element={<OrariPrezzi />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
