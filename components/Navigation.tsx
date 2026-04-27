'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-7 h-7 border border-white/[0.15] rounded-[3px] flex items-center justify-center group-hover:border-white/30 transition-colors">
            <span className="text-white text-[10px] font-bold tracking-tight leading-none">BG</span>
          </div>
          <span className="text-white/90 text-[15px] font-medium group-hover:text-white transition-colors">
            Bikash Gautam
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] transition-colors duration-200 relative pb-0.5 ${
                pathname === link.href
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-white/40" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button — red */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#0a0a0a] text-[13px] font-semibold rounded-[3px] hover:bg-white/90 transition-all duration-200 tracking-wide"
          >
            LET&apos;S TALK
            <span className="text-[11px]">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors p-1"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/[0.05]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`text-[15px] transition-colors ${
                      pathname === link.href ? 'text-white' : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#0a0a0a] text-[13px] font-semibold rounded-[3px] tracking-wide hover:bg-white/90 transition-all"
                >
                  LET&apos;S TALK →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
