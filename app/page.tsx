'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Atom, Code2, Flame, Triangle, Box, Terminal, Github } from 'lucide-react'
import { SplitSpreeSVG, BlipAirSVG, PromptGammaSVG, PAL2SVG } from '@/components/project-svgs'

const techStack = [
  { name: 'Python', icon: Terminal },
  { name: 'TypeScript', icon: Code2 },
  { name: 'React', icon: Atom },
  { name: 'PyTorch', icon: Flame },
  { name: 'Next.js', icon: Triangle },
  { name: 'Docker', icon: Box },
]

const marqueeItems = [
  'Machine Learning',
  'Full-Stack Development',
  'AI Research',
  'Computer Vision',
  'NLP',
  'Systems Design',
  'TypeScript',
  'PyTorch',
  'Next.js',
  'Django',
  'Docker',
  'Open Source',
]

const featuredProjects = [
  {
    title: 'SplitSpree',
    category: 'Full-Stack',
    gradient: 'radial-gradient(ellipse at 25% 25%, #1a0a2e 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm',
    SvgComponent: SplitSpreeSVG,
  },
  {
    title: 'BlipAir',
    category: 'Systems',
    gradient: 'radial-gradient(ellipse at 75% 25%, #001528 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm',
    SvgComponent: BlipAirSVG,
  },
  {
    title: 'Prompt Gamma ML',
    category: 'Research',
    gradient: 'radial-gradient(ellipse at 25% 75%, #1a0808 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm',
    SvgComponent: PromptGammaSVG,
  },
  {
    title: 'PAL 2.0',
    category: 'AI / ML',
    gradient: 'radial-gradient(ellipse at 75% 75%, #080a1a 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm',
    SvgComponent: PAL2SVG,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

const edgeFade: React.CSSProperties = {
  background: [
    'linear-gradient(to right,  #080808 0%, transparent 20%)',
    'linear-gradient(to left,   #080808 0%, transparent 20%)',
    'linear-gradient(to bottom, #080808 0%, transparent 12%)',
    'linear-gradient(to top,    #080808 0%, transparent 18%)',
  ].join(', '),
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="min-h-screen border-b border-white/[0.04] overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-screen">

          {/* Left – portrait */}
          <div className="relative hidden lg:block overflow-hidden">
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
          </div>

          {/* Right – content */}
          <div className="flex flex-col items-center justify-center px-8 lg:px-16 gap-14">

            {/* Tech stack grid */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-white/35 text-[12px] uppercase tracking-[0.25em] mb-6"
              >
                My Tech Stack
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-3 border border-white/[0.07] w-fit"
              >
                {techStack.map((tech, i) => {
                  const Icon = tech.icon
                  const isRightEdge = (i + 1) % 3 === 0
                  const isBottomRow = i >= 3
                  return (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center justify-center gap-2.5 px-8 py-6 group hover:bg-white/[0.02] transition-colors ${
                        !isRightEdge ? 'border-r border-white/[0.07]' : ''
                      } ${!isBottomRow ? 'border-b border-white/[0.07]' : ''}`}
                    >
                      <Icon className="w-6 h-6 text-white/35 group-hover:text-white/60 transition-colors" strokeWidth={1.5} />
                      <span className="text-white/30 text-[12px] tracking-wide group-hover:text-white/50 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Name + bio + buttons */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-6xl lg:text-7xl xl:text-[7.5rem] font-black tracking-tight text-white leading-[0.95] mb-5"
              >
                Bikash
                <br />
                Gautam
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white/45 text-[17px] max-w-[400px] leading-relaxed mb-9"
              >
                I build modern, functional applications with clean code and thoughtful design.
                CS student focused on AI and systems.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <a
                  href="https://github.com/bkshgtm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] text-[14px] font-semibold hover:bg-white/90 transition-all duration-200"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] text-white/55 text-[14px] hover:border-white/25 hover:text-white/80 transition-all duration-200"
                >
                  View Projects
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────── */}
      <div className="border-y border-white/[0.04] bg-[#080808] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap select-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 mr-5">
              <span className="text-[13px] text-white/25 tracking-wide">{item}</span>
              <span className="text-white/10 text-base">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-white/30 text-[12px] uppercase tracking-[0.25em] mb-2">
              Selected Work
            </motion.p>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-4xl font-bold text-white">
              Featured Projects
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link href="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-white/35 text-[13px] hover:text-white/70 transition-colors">
              View All <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]"
        >
          {featuredProjects.map((project) => {
            const { SvgComponent } = project
            return (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="group bg-[#080808] block overflow-hidden"
              >
                <div className="flex items-start justify-between p-7 pb-0">
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1.5">{project.title}</h3>
                    <span className="text-white/30 text-[13px]">{project.category}</span>
                  </div>
                  <div className="w-8 h-8 border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 transition-all shrink-0">
                    <ArrowUpRight size={14} className="text-white/25 group-hover:text-white/60 transition-colors" />
                  </div>
                </div>
                <div className="mt-6 aspect-[16/9] relative overflow-hidden" style={{ background: project.gradient }}>
                  <SvgComponent />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.04]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8"
          >
            <div>
              <motion.p variants={fadeUp} transition={{ duration: 0.5 }}
                className="text-white/30 text-[12px] uppercase tracking-[0.25em] mb-3">
                Available for Opportunities
              </motion.p>
              <motion.h2 variants={fadeUp} transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Let&apos;s Work<br />Together
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0a0a0a] text-[14px] font-semibold hover:bg-white/90 transition-all whitespace-nowrap">
                LET&apos;S TALK →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
