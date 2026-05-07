import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/skills', label: 'Keterampilan' },
  { to: '/achievement', label: 'Prestasi' },
  { to: '/education', label: 'Pendidikan' },
  { to: '/experience', label: 'Pengalaman' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="font-display text-xl font-bold" style={{ color: 'var(--primary)' }}>
            Felix<span style={{ color: 'var(--dark)' }}>.</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link font-medium text-sm transition-colors duration-200 ${
                    isActive ? 'text-[var(--dark)] active' : 'text-[var(--body-color)] hover:text-[var(--dark)]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-[var(--body-color)] hover:text-[var(--dark)] transition-colors"
            aria-label="Buka menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="font-display font-bold text-lg" style={{ color: 'var(--primary)' }}>Felix.</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-[var(--body-color)] hover:text-[var(--dark)]"
            aria-label="Tutup menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-medium transition-colors duration-150 ${
                  isActive
                    ? 'bg-[#f0f3ff] text-[var(--primary)] font-semibold'
                    : 'text-[var(--body-color)] hover:bg-gray-50 hover:text-[var(--dark)]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto p-6 border-t border-gray-100">
          <a
            href="https://wa.me/6281262729243"
            className="block w-full text-center py-3 rounded-full font-semibold text-white text-sm"
            style={{ background: 'var(--dark)' }}
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </>
  )
}
