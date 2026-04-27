'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const experience = [
  {
    company: 'Mastercard',
    role: 'Software Engineering Intern',
    period: 'Jun 2026 – Aug 2026',
    type: 'Internship',
  },
  {
    company: 'WGI Inc. (Wantman Group)',
    role: 'AI Intern',
    period: 'Apr 2026 – Jun 2026',
    type: 'Internship',
  },
  {
    company: 'UMBC — NSF REU',
    role: 'Machine Learning Research Intern',
    period: 'Jun 2025 – Aug 2025',
    type: 'Research',
  },
  {
    company: 'Alabama A&M University',
    role: 'AI Research Assistant',
    period: 'Nov 2024 – May 2025',
    type: 'Research',
  },
  {
    company: 'Activision Blizzard',
    role: 'Game Development Fellow',
    period: 'Summer 2024',
    type: 'Fellowship',
  },
]

const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Express', 'Django', 'TensorFlow'] },
  { category: 'Infrastructure', items: ['PostgreSQL', 'Neo4j', 'Docker', 'AWS', 'Git'] },
]

const awards = [
  { title: 'NSF REU Research Fellowship', year: '2025', org: 'University of Maryland' },
  { title: 'HBCU Game Dev Fellowship', year: '2024', org: 'Activision Blizzard' },
  { title: 'AI Research Grant', year: '2024', org: 'Alabama A&M University' },
  { title: 'CS Honors Program', year: '2023', org: 'Undergraduate Program' },
]

const edgeFade: React.CSSProperties = {
  background: [
    'linear-gradient(to right,  #080808 0%, transparent 20%)',
    'linear-gradient(to left,   #080808 0%, transparent 20%)',
    'linear-gradient(to bottom, #080808 0%, transparent 12%)',
    'linear-gradient(to top,    #080808 0%, transparent 18%)',
  ].join(', '),
}

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-[85vh]">

          {/* Left – portrait with CSS mask */}
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

          {/* Right – bio + experience */}
          <div className="pt-[96px] pb-16 px-8 lg:px-16">
            {/* Mobile name header */}
            <div className="lg:hidden mb-10">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-2 font-medium"
              >
                About
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display text-5xl font-black text-white"
              >
                Bikash Gautam
              </motion.h1>
            </div>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-6 font-medium hidden lg:block"
              >
                About
              </motion.p>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-white/65 text-[17px] leading-relaxed max-w-[520px] mb-16"
              >
                I&apos;m Bikash Gautam, a Computer Science student building at the
                intersection of AI and software engineering. I believe great software
                comes from understanding both the technical foundations and the human
                experience. Currently focused on machine learning research, full-stack
                applications, and clean, functional design.
              </motion.p>

              {/* Experience list */}
              <motion.div variants={stagger}>
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="text-white/35 text-[12px] uppercase tracking-[0.25em] mb-6 font-medium"
                >
                  Experience
                </motion.p>
                <div className="space-y-0">
                  {experience.map((exp, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start justify-between py-5 border-b border-white/[0.05] last:border-0"
                    >
                      <div>
                        <p className="text-white text-[15px] font-medium mb-1">
                          {exp.role}
                        </p>
                        <p className="text-white/40 text-[13px]">{exp.company}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="text-white/30 text-[12px]">{exp.period}</p>
                        <span className="inline-block mt-1.5 px-2 py-0.5 border border-white/[0.08] text-white/25 text-[10px] uppercase tracking-wider rounded-[2px]">
                          {exp.type}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ──────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-2 font-medium"
            >
              Stack
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-3xl font-bold text-white mb-12"
            >
              Technical Skills
            </motion.h2>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="bg-[#080808] p-9"
                >
                  <p className="text-white/35 text-[12px] uppercase tracking-[0.2em] mb-6 font-medium">
                    {skill.category}
                  </p>
                  <div className="space-y-3">
                    {skill.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-white/25" />
                        <span className="text-white/60 text-[15px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── AWARDS ──────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-white/35 text-[13px] uppercase tracking-[0.22em] mb-2 font-medium"
            >
              Recognition
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-3xl font-bold text-white mb-12"
            >
              Awards &amp; Fellowships
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-[#080808] p-8 flex items-start gap-5"
                >
                  <div className="w-10 h-10 border border-white/[0.08] rounded-[3px] flex items-center justify-center shrink-0 mt-0.5">
                    <Award size={17} className="text-white/30" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/80 text-[15px] font-medium mb-1.5">
                      {award.title}
                    </p>
                    <p className="text-white/30 text-[13px]">
                      {award.org} · {award.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
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
      </section>
    </>
  )
}
