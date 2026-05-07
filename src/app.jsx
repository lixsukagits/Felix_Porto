import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Achievement from './pages/Achievement'
import Education from './pages/Education'
import Experience from './pages/Experience'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] grain">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
