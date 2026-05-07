import PageHero from '../components/PageHero'

const experiences = [
  {
    org: 'Osis SMK Telkom 2 Medan',
    role: 'Anggota Tim TI',
    period: 'Agustus 2024 — Sekarang',
    icon: '💻',
    current: true,
    desc: 'Mengelola infrastruktur teknologi dan media digital organisasi sekolah.',
  },
  {
    org: 'Muda Mudi Cetiya Aryavamsa',
    role: 'Anggota Tim Medcom',
    period: 'April 2025 — Sekarang',
    icon: '📸',
    current: true,
    desc: 'Mendokumentasikan kegiatan dan mengelola konten media komunikasi komunitas.',
  },
  {
    org: 'Coding Camp powered by DBS Foundation 2025',
    role: 'Web Developer / FEBE',
    period: 'Januari 2025 — Juni 2025',
    icon: '🚀',
    current: false,
    desc: 'Pelatihan intensif Web Developer selama 6 bulan mencakup Frontend & Backend Engineering.',
  },
  {
    org: 'Revou Course',
    role: 'Data Analytics Mini Course',
    period: '16 — 20 Juni 2025',
    icon: '📊',
    current: false,
    desc: 'Program singkat 5 hari mendalami dasar-dasar analisis data dan visualisasi.',
  },
]

export default function Experience() {
  return (
    <>
      <PageHero subtitle="Halaman Pengalaman" scrollTo="experience" scrollLabel="Lihat Pengalaman" />

      <section id="experience" className="max-w-4xl mx-auto px-6 md:px-12 pb-24 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
            What I've Experienced
          </span>
          <h2 className="font-display text-4xl font-bold mt-2" style={{ color: 'var(--dark)' }}>
            Pengalaman
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-8">
            {experiences.map(({ org, role, period, icon, current, desc }) => (
              <div key={org} className="relative flex gap-6 pl-16">
                {/* Icon dot */}
                <div
                  className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md"
                  style={{ background: current ? 'var(--primary)' : '#f1f5f9' }}
                >
                  {icon}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-lift">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-xl" style={{ color: 'var(--dark)' }}>
                        {org}
                      </h3>
                      <p className="text-base font-semibold mt-0.5" style={{ color: 'var(--primary)' }}>{role}</p>
                    </div>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-600 w-fit shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-1 mb-3" style={{ color: 'var(--body-color)' }}>{period}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body-color)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
