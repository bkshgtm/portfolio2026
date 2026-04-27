import Link from 'next/link'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/bkshgtm' },
  { label: 'GitHub', href: 'https://github.com/bkshgtm' },
  { label: 'Email', href: 'mailto:bikash.gautam098@gmail.com' }
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto">
        {/* Social links row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.05]">
          {socials.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center justify-center py-5 text-[13px] text-white/30 hover:text-white/70 transition-colors duration-200
                ${i % 2 === 0 && i < socials.length - 1 ? 'border-r border-white/[0.05]' : ''}
                ${i < 2 ? 'border-b md:border-b-0 border-white/[0.05]' : ''}
                ${i === 1 ? 'md:border-r md:border-white/[0.05]' : ''}
                ${i === 2 ? 'md:border-r md:border-white/[0.05]' : ''}
              `}
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Logo + copyright */}
        <div className="flex flex-col items-center gap-2.5 py-7">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-5 h-5 border border-white/[0.15] rounded-[2px] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold tracking-tight">BG</span>
            </div>
            <span className="text-white/60 text-[13px] font-medium group-hover:text-white/80 transition-colors">
              Bikash Gautam
            </span>
          </Link>
          <p className="text-white/20 text-[11px] text-center">
            © {new Date().getFullYear()} Bikash Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
