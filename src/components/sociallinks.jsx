const socials = [
  {
    href: 'https://www.instagram.com/lixforschl',
    label: 'Instagram',
    icon: 'https://www.svgrepo.com/show/506668/instagram.svg',
  },
  {
    href: 'https://wa.me/6281262729243',
    label: 'WhatsApp',
    icon: 'https://www.svgrepo.com/show/38250/whatsapp.svg',
  },
  {
    href: '#',
    label: 'LinkedIn',
    icon: 'https://www.svgrepo.com/show/360538/linkedin-circle.svg',
  },
  {
    href: '#',
    label: 'GitHub',
    icon: 'https://www.svgrepo.com/show/447165/github-outline.svg',
  },
]

export default function SocialLinks({ size = 'md' }) {
  const cls = size === 'sm' ? 'w-5 h-5' : 'w-7 h-7'
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 hover:opacity-100 transition-opacity duration-200 hover:scale-110 transform"
        >
          <img src={icon} alt={label} className={cls} />
        </a>
      ))}
    </div>
  )
}
