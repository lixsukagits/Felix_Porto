import { useState, useEffect } from 'react'

export default function WelcomeModal({ onClose }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Nama tidak boleh kosong.')
      return
    }
    localStorage.setItem('userName', trimmed)
    onClose(trimmed)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm animate-fade-up">
        <div className="mb-6 text-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
            style={{ background: '#f0f3ff' }}
          >
            <span className="text-2xl">👋</span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--dark)' }}>
            Selamat Datang!
          </h2>
          <p className="text-sm" style={{ color: 'var(--body-color)' }}>
            Siapa nama kamu?
          </p>
        </div>
        <input
          autoFocus
          type="text"
          value={name}
          onChange={e => { setName(e.target.value); setError('') }}
          onKeyDown={handleKey}
          placeholder="Masukkan nama kamu..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[var(--primary)] transition-colors mb-2"
          style={{ color: 'var(--dark)' }}
        />
        {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
        <button
          onClick={handleSubmit}
          className="mt-2 w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90"
          style={{ background: 'var(--primary)' }}
        >
          Mulai
        </button>
      </div>
    </div>
  )
}
