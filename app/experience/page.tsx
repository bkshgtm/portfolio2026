'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CreditCard,
  Bot,
  Microscope,
  GraduationCap,
  Gamepad2,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const experiences = [
  {
    icon: CreditCard,
    company: 'Mastercard',
    role: 'Software Engineering Intern',
    period: 'Jun 2026 – Aug 2026',
    type: 'Internship',
    description:
      'Engineering intern on the core payments infrastructure team. Working on distributed systems and API design at global scale.',
    highlights: [
      'Payments infrastructure',
      'API design & integration',
      'Distributed systems',
      'Performance optimization',
    ],
  },
  {
    icon: Bot,
    company: 'WGI Inc. (Wantman Group)',
    role: 'AI Intern',
    period: 'Apr 2026 – Jun 2026',
    type: 'Internship',
    description:
      'Applied AI and automation to engineering workflows at a leading infrastructure consultancy.',
    highlights: [
      'LLM integration',
      'Workflow automation',
      'Data pipeline design',
      'Python tooling',
    ],
  },
  {
    icon: Microscope,
    company: 'University of Maryland, Baltimore County',
    role: 'ML Research Intern — NSF REU',
    period: 'Jun 2025 – Aug 2025',
    type: 'Research',
    description:
      'NSF-funded summer research in medical imaging ML. Built deep learning pipelines for real-time proton therapy imaging classification.',
    highlights: [
      'PyTorch training pipelines',
      'GPU workload optimization',
      '82% accuracy, 3× speed gain',
      'SLURM cluster computing',
    ],
  },
  {
    icon: GraduationCap,
    company: 'Alabama A&M University',
    role: 'AI Research Assistant',
    period: 'Nov 2024 – May 2025',
    type: 'Research',
    description:
      'Developed a reinforcement learning system for adaptive learning paths and containerized the full stack for scalable deployment.',
    highlights: [
      'Reinforcement learning system',
      'Django + Celery + Neo4j',
      'Docker containerization',
      'Curriculum graph modeling',
    ],
  },
  {
    icon: Gamepad2,
    company: 'Activision Blizzard × HBCU',
    role: 'Game Development Fellow',
    period: 'Summer 2024',
    type: 'Fellowship',
    description:
      'Selected for the HBCU Game Dev Program in Los Angeles. Built Unity prototypes with industry mentors from Activision Blizzard.',
    highlights: [
      'Unity C# development',
      'Event-driven game systems',
      'Gameplay mechanics',
      'Industry mentorship',
    ],
  },
]

export default function ExperiencePage() {
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
              Career
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-5xl md:text-6xl font-black text-white"
            >
              Experience
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ─── EXPERIENCE GRID ─────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]"
        >
          {experiences.map((exp, i) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[#080808] p-9 group"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-7">
                  <div className="w-11 h-11 border border-white/[0.08] rounded-[4px] flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all">
                    <Icon size={19} className="text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="px-2.5 py-1 border border-white/[0.06] text-white/30 text-[11px] uppercase tracking-wider rounded-[2px]">
                    {exp.type}
                  </span>
                </div>

                {/* Company + role */}
                <h2 className="font-display text-[17px] font-semibold text-white mb-1.5">
                  {exp.role}
                </h2>
                <p className="text-white/40 text-[14px] mb-1">{exp.company}</p>
                <p className="text-white/25 text-[12px] mb-6">{exp.period}</p>

                {/* Description */}
                <p className="text-white/50 text-[15px] leading-relaxed mb-7">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <ChevronRight size={13} className="text-white/30 shrink-0" strokeWidth={2} />
                      <span className="text-white/45 text-[13px]">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}

          {/* Open to opportunities card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: experiences.length * 0.07 }}
            className="bg-[#080808] p-9 flex flex-col justify-between"
          >
            <div>
              <p className="text-white/35 text-[12px] uppercase tracking-[0.22em] mb-7 font-medium">
                What&apos;s Next
              </p>
              <h2 className="font-display text-3xl font-bold text-white mb-5">
                Open to
                <br />
                Opportunities
              </h2>
              <p className="text-white/45 text-[15px] leading-relaxed">
                I&apos;m actively seeking internships and research roles in AI, ML, and
                full-stack engineering. If you&apos;re working on something interesting,
                I&apos;d love to hear about it.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] text-[13px] font-semibold hover:bg-white/90 transition-all w-fit"
            >
              GET IN TOUCH
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
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
