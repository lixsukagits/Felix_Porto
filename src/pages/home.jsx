import { Link } from 'react-router-dom'
import WelcomeModal from '../components/WelcomeModal'
import SocialLinks from '../components/SocialLinks'
import { useUserName } from '../hooks/useUserName'

export default function Home() {
  const { userName, showModal, handleModalClose } = useUserName()

  return (
    <>
      {showModal && <WelcomeModal onClose={handleModalClose} />}

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 flex flex-col md:flex-row items-center gap-12 relative">
        {/* BG blob */}
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
        />

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="animate-fade-up animation-delay-100 text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
            {userName ? `Hi ${userName}, I'm` : "Hi, I'm"}
          </p>
          <h1 className="animate-fade-up animation-delay-200 font-display text-5xl md:text-7xl font-extrabold leading-tight mb-4" style={{ color: 'var(--dark)' }}>
            Felix<br />Raymond
          </h1>
          <p className="animate-fade-up animation-delay-300 text-lg mb-8" style={{ color: 'var(--body-color)' }}>
            IT Enthusiast · Web Developer · SMK Telkom 2 Medan
          </p>
          <div className="animate-fade-up animation-delay-300 flex justify-center md:justify-start mb-8">
            <SocialLinks />
          </div>
          <div className="animate-fade-up animation-delay-400 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="https://wa.me/6281262729243"
              className="px-8 py-3 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: 'var(--dark)' }}
            >
              Hubungi Saya
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-full font-semibold text-sm border-2 border-gray-200 transition-all hover:bg-gray-100"
              style={{ color: 'var(--body-color)' }}
            >
              Lihat Portofolio
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="animate-fade-up animation-delay-300 md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div
              className="absolute inset-0 rounded-full scale-110 opacity-20"
              style={{ background: 'conic-gradient(from 0deg, var(--primary), var(--primary-dark), transparent, var(--primary))' }}
            />
            <img
              src="https://placehold.co/400x400/e8ecff/3758F9?text=Felix"
              alt="Felix Raymond"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 pb-24 scroll-mt-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <img
              src="https://placehold.co/400x500/e8ecff/3758F9?text=Felix"
              alt="About Felix"
              className="rounded-2xl w-full object-cover shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: 'var(--dark)' }}>
              Halo! Saya Felix Raymond
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--body-color)' }}>
              Seorang pelajar kelas 11 jurusan Teknik Komputer dan Jaringan di SMK Telkom 2 Medan yang sedang berambisi mendapatkan beasiswa Universitas di China melalui pelatihan dan organisasi untuk meningkatkan skill saya.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--body-color)' }}>
              Saya sangat tertarik dengan semua hal terkait IT (IT Enthusiast). Mudah beradaptasi di lingkungan baru, memiliki rasa ingin tahu yang tinggi, dan terus belajar untuk mencapai target karir di bidang IT.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: '5+', label: 'Prestasi' },
                { num: '4+', label: 'Pengalaman' },
                { num: '6+', label: 'Keterampilan' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl" style={{ background: '#f8f9fb' }}>
                  <div className="font-display text-2xl font-extrabold" style={{ color: 'var(--primary)' }}>{num}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--body-color)' }}>{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281262729243"
                className="px-7 py-3 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90 text-center"
                style={{ background: 'var(--dark)' }}
              >
                Hubungi Saya
              </a>
              <Link
                to="/skills"
                className="px-7 py-3 rounded-full font-semibold text-sm border-2 border-gray-200 transition-all hover:bg-gray-100 text-center"
                style={{ color: 'var(--body-color)' }}
              >
                Lihat Keterampilan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
