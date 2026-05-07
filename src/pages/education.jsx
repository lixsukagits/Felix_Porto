import PageHero from '../components/PageHero'

const educations = [
  {
    school: 'SMK Telkom 2 Medan',
    major: 'Teknik Komputer dan Jaringan',
    period: 'Juli 2024 — Sekarang',
    icon: '🖥️',
    current: true,
  },
  {
    school: 'Global Prima National Plus School',
    major: 'Lulusan TK, SD, SMP',
    period: 'Juli 2012 — Juni 2024',
    icon: '🏫',
    current: false,
  },
]

export default function Education() {
  return (
    <>
      <PageHero subtitle="Halaman Pendidikan" scrollTo="education" scrollLabel="Lihat Pendidikan" />

      <section id="education" className="max-w-4xl mx-auto px-6 md:px-12 pb-24 scroll-mt-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
            Where I've Learned
          </span>
          <h2 className="font-display text-4xl font-bold mt-2" style={{ color: 'var(--dark)' }}>
            Pendidikan
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-8">
            {educations.map(({ school, major, period, icon, current }) => (
              <div key={school} className="relative flex gap-6 pl-16">
                {/* Dot */}
                <div
                  className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md"
                  style={{ background: current ? 'var(--primary)' : '#f1f5f9' }}
                >
                  {icon}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm card-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl" style={{ color: 'var(--dark)' }}>
                      {school}
                    </h3>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-600 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="text-base font-medium mb-1" style={{ color: 'var(--primary)' }}>{major}</p>
                  <p className="text-sm" style={{ color: 'var(--body-color)' }}>{period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
