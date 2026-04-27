'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const contactLinks = [
  {
    label: 'Email',
    value: 'bikash.gautam098@gmail.com',
    href: 'mailto:bikash.gautam098@gmail.com',
    icon: Mail,
    description: 'Best way to reach me',
  },
  {
    label: 'GitHub',
    value: 'github.com/bkshgtm',
    href: 'https://github.com/bkshgtm',
    icon: Github,
    description: 'Open source work & projects',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bkshgtm',
    href: 'https://linkedin.com/in/bkshgtm',
    icon: Linkedin,
    description: 'Professional network',
  },
]

const edgeFade: React.CSSProperties = {
  background: [
    'linear-gradient(to right,  #080808 0%, transparent 20%)',
    'linear-gradient(to left,   #080808 0%, transparent 20%)',
    'linear-gradient(to bottom, #080808 0%, transparent 12%)',
    'linear-gradient(to top,    #080808 0%, transparent 18%)',
  ].join(', '),
}

export default function ContactPage() {
  return (
    <>
      <section className="min-h-screen border-b border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-screen">

          {/* Left – portrait with CSS mask + overlaid info */}
          <div className="relative hidden lg:flex flex-col overflow-hidden">
            <Image
              src="/headshot.png"
              alt="Bikash Gautam"
              fill
              unoptimized
              priority
              className="object-cover object-[center_15%]"
              sizes="520px"
            />
            <div className="absolute inset-0 pointer-events-none" style={edgeFade} />

            {/* Profile info — overlaid at bottom */}
            <div className="relative z-20 mt-auto px-10 pb-12 pt-8">
              <h1 className="font-display text-3xl font-bold text-white mb-1.5">
                Bikash Gautam
              </h1>
              <p className="text-white/45 text-[15px] mb-7">
                CS Student · AI Builder · Researcher
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-3 text-white/40 text-[14px]">
                  <MapPin size={14} className="shrink-0 text-white/30" strokeWidth={1.5} />
                  <span>United States</span>
                </div>
                <div className="flex items-center gap-3 text-white/40 text-[14px]">
                  <Mail size={14} className="shrink-0 text-white/30" strokeWidth={1.5} />
                  <span>bikash.gautam098@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/40 text-[14px]">
                  <Github size={14} className="shrink-0 text-white/30" strokeWidth={1.5} />
                  <span>github.com/bkshgtm</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="mailto:bikash.gautam098@gmail.com"
                  className="px-5 py-2.5 bg-white text-[#0a0a0a] text-[13px] font-semibold hover:bg-white/90 transition-all"
                >
                  SEND EMAIL
                </a>
                <a
                  href="https://linkedin.com/in/bkshgtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-white/[0.12] text-white/55 text-[13px] hover:border-white/25 hover:text-white transition-all"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>

          {/* Right – CTA + contact links */}
          <div className="flex flex-col justify-center px-8 lg:px-16 pt-[96px] pb-16 lg:pt-0 lg:pb-0">

            {/* Mobile profile header */}
            <div className="lg:hidden mb-10">
              <p className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-2 font-medium">
                Contact
              </p>
              <h1 className="font-display text-5xl font-black text-white mb-2">
                Bikash Gautam
              </h1>
              <p className="text-white/40 text-[15px]">CS Student · AI Builder · Researcher</p>
            </div>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-4 font-medium"
              >
                Let&apos;s Connect
              </motion.p>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-display text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.95] mb-7"
              >
                Let&apos;s Work
                <br />
                Together
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/45 text-[17px] leading-relaxed max-w-[400px] mb-12"
              >
                I&apos;m actively looking for internships, research collaborations,
                and exciting projects. If you&apos;re building something interesting,
                I&apos;d love to be part of it.
              </motion.p>

              {/* Contact cards */}
              <motion.div variants={stagger} className="space-y-px">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      variants={fadeUp}
                      transition={{ duration: 0.5 }}
                      className="group flex items-center justify-between p-5 border border-white/[0.06] bg-[#080808] hover:border-white/15 hover:bg-white/[0.02] transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/[0.08] rounded-[3px] flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all shrink-0">
                          <Icon size={17} className="text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-white/70 text-[15px] font-medium mb-0.5">
                            {link.label}
                          </p>
                          <p className="text-white/30 text-[13px]">{link.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-white/20 group-hover:text-white/60 transition-colors shrink-0"
                      />
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* Availability */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-8 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                <p className="text-white/35 text-[13px]">
                  Available for Summer 2026 internships and research positions
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
