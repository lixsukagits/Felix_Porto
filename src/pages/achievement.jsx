import { useState } from 'react'
import PageHero from '../components/PageHero'

const awards = [
  {
    img: 'https://placehold.co/600x400/e8ecff/3758F9?text=Piagam+OSTN+2024',
    title: 'Juara Utama Bidang Informatika pada OSTN 2024',
    date: '29 Desember 2024',
    badge: '🥇',
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    img: 'https://placehold.co/600x400/e8ecff/3758F9?text=Piagam+OPSI+2025',
    title: 'Juara Utama Bidang Informatika pada OPSI 2025',
    date: '9 Maret 2025',
    badge: '🥇',
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    img: 'https://placehold.co/600x400/fde8e8/c0392b?text=Piagam+IYSHO+2025',
    title: 'Medali Emas Bidang Informatika pada IYSHO 2025',
    date: '16 Maret 2025',
    badge: '🥇',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    img: 'https://placehold.co/600x400/fde8e8/c0392b?text=Piagam+PON+2025',
    title: 'Medali Emas Bidang Informatika pada PON 2025',
    date: '25 Mei 2025',
    badge: '🥇',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    img: 'https://placehold.co/600x400/e8f4e8/2e7d32?text=Piagam+OSI+HP+2025',
    title: 'Medali Emas Bidang Informatika pada OSI HP 2025',
    date: '1 Juni 2025',
    badge: '🥇',
    color: 'bg-amber-50 border-amber-200',
  },
]

export default function Achievement() {
  const [modal, setModal] = useState(null) // { src, title }

  return (
    <>
      <PageHero subtitle="Halaman Prestasi" scrollTo="achievements" scrollLabel="Lihat Prestasi" />

      <section id="achievements" className="max-w-7xl mx-auto px-6 md:px-12 pb-24 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
            What I've Achieved
          </span>
          <h2 className="font-display text-4xl font-bold mt-2" style={{ color: 'var(--dark)' }}>
            Prestasi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map(({ img, title, date, badge, color }) => (
            <div
              key={title}
              className={`bg-white rounded-2xl overflow-hidden border card-lift cursor-pointer ${color}`}
              onClick={() => setModal({ src: img, title })}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{badge}</span>
                  <div>
                    <h3 className="font-display font-bold text-base leading-snug" style={{ color: 'var(--dark)' }}>
                      {title}
                    </h3>
                    <p className="text-xs mt-1" style={{ color: 'var(--body-color)' }}>{date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute -top-10 right-0 text-white text-4xl opacity-70 hover:opacity-100 transition-opacity font-light"
            >
              &times;
            </button>
            <img
              src={modal.src}
              alt={modal.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className="text-white/70 text-sm text-center mt-3">{modal.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
