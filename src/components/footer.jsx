export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="font-display font-bold text-lg" style={{ color: 'var(--primary)' }}>
          Felix<span style={{ color: 'var(--dark)' }}>.</span>
        </span>
        <p className="text-sm" style={{ color: 'var(--body-color)' }}>
          Created by Felix for Revou © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
