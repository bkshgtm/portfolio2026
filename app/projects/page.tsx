'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import {
  SplitSpreeSVG,
  BlipAirSVG,
  BulldogsMarketSVG,
  CoreMetricsSVG,
  PromptGammaSVG,
  PAL2SVG,
} from '@/components/project-svgs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.09 } } }

const projects = [
  {
    title: 'SplitSpree',
    category: 'Full-Stack',
    description:
      'AI-powered bill splitting app that reads receipts and fairly distributes expenses using image-to-text and GenAI. Built for real-world use with friends.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    gradient: 'radial-gradient(ellipse at 20% 20%, #1a0a2e 0%, #080808 65%)',
    href: 'https:splitspree.vercel.app',
    SvgComponent: SplitSpreeSVG,
  },
  {
    title: 'BlipAir',
    category: 'Systems',
    description:
      'Encrypted peer-to-peer file sharing with WebRTC and QR-based pairing. No servers, no accounts — just scan and share.',
    tech: ['React', 'WebRTC', 'Express'],
    gradient: 'radial-gradient(ellipse at 80% 20%, #001528 0%, #080808 65%)',
    href: 'https://blipair.com',
    SvgComponent: BlipAirSVG,
  },
  {
    title: 'Bulldogs Market',
    category: 'Web',
    description:
      'Token-based campus marketplace for free exchange of goods among students. Community-driven and built for college ecosystems.',
    tech: ['Next.js', 'Firebase', 'TypeScript'],
    gradient: 'radial-gradient(ellipse at 20% 80%, #1a1200 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm/bulldogs-market',
    SvgComponent: BulldogsMarketSVG,
  },
  {
    title: 'CoreMetrics',
    category: 'Analytics',
    description:
      'Real-time analytics dashboard for small and medium businesses. Clean data visualizations with live updates and historical trends.',
    tech: ['React', 'Prisma', 'PostgreSQL'],
    gradient: 'radial-gradient(ellipse at 80% 80%, #001a0a 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm/coremetrics',
    SvgComponent: CoreMetricsSVG,
  },
  {
    title: 'Prompt Gamma ML',
    category: 'Research',
    description:
      'Deep learning system for classifying prompt gamma scattering events in real-time proton therapy imaging. Built large-scale training pipelines with CNNs, LSTMs, and transformers.',
    tech: ['PyTorch', 'NumPy', 'scikit-learn', 'SLURM', 'Geant4'],
    gradient: 'radial-gradient(ellipse at 50% 30%, #1a0808 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm/big-data-reu',
    SvgComponent: PromptGammaSVG,
  },
  {
    title: 'PAL 2.0',
    category: 'AI / ML',
    description:
      'AI-driven adaptive learning platform for programming education. Combines knowledge tracing, attention models, and curriculum graphs to generate personalized Java learning paths.',
    tech: ['Django', 'PostgreSQL', 'PyTorch', 'Celery', 'Redis', 'Docker'],
    gradient: 'radial-gradient(ellipse at 50% 70%, #080a1a 0%, #080808 65%)',
    href: 'https://github.com/bkshgtm/PersonalizedAdaptiveLearning',
    SvgComponent: PAL2SVG,
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-[96px] pb-12 border-b border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-3 font-medium"
            >
              Work
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex items-end justify-between"
            >
              <h1 className="font-display text-5xl md:text-6xl font-black text-white">
                All Projects
              </h1>
              <p className="text-white/30 text-[15px] hidden md:block">
                {projects.length} Projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ───────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]"
        >
          {projects.map((project) => {
            const { SvgComponent } = project
            return (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="group bg-[#080808] relative block overflow-hidden"
              >
                <div className="flex items-start justify-between p-7 pb-0">
                  <div>
                    <h2 className="text-white text-[18px] font-semibold leading-tight mb-1.5">
                      {project.title}
                    </h2>
                    <span className="text-white/30 text-[13px]">{project.category}</span>
                  </div>
                  <div className="w-9 h-9 border border-white/[0.08] rounded-[3px] flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-200 shrink-0">
                    <ArrowUpRight size={15} className="text-white/25 group-hover:text-white/60 transition-colors"/>
                  </div>
                </div>

                <div
                  className="mx-0 mt-6 aspect-[16/9] relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  <SvgComponent />
                </div>

                <div className="p-7 pt-6">
                  <p className="text-white/45 text-[15px] leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 border border-white/[0.06] text-white/30 text-[12px] rounded-[2px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8"
          >
            <div>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl font-bold text-white"
              >
                Let&apos;s Work Together
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0a0a0a] text-[14px] font-semibold hover:bg-white/90 transition-all"
              >
                LET&apos;S TALK →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
