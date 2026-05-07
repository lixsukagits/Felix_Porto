import SocialLinks from './SocialLinks'

export default function PageHero({ subtitle, scrollTo, scrollLabel }) {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-36 pb-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
      />

      <p className="animate-fade-up animation-delay-100 text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
        Hi, I'm
      </p>
      <h1 className="animate-fade-up animation-delay-200 font-display text-5xl md:text-7xl font-extrabold leading-tight mb-4" style={{ color: 'var(--dark)' }}>
        Felix Raymond
      </h1>
      <p className="animate-fade-up animation-delay-300 text-lg md:text-xl mb-8" style={{ color: 'var(--body-color)' }}>
        {subtitle}
      </p>

      <div className="animate-fade-up animation-delay-400">
        <SocialLinks />
      </div>

      <div className="animate-fade-up animation-delay-500 flex flex-col sm:flex-row gap-3 mt-8">
        <a
          href="https://wa.me/6281262729243"
          className="px-8 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ background: 'var(--dark)' }}
        >
          Hubungi Saya
        </a>
        <a
          href={`#${scrollTo}`}
          className="px-8 py-3 rounded-full font-semibold text-sm border-2 border-gray-200 transition-all duration-200 hover:bg-gray-100"
          style={{ color: 'var(--body-color)' }}
        >
          {scrollLabel}
        </a>
      </div>
    </section>
  )
}
