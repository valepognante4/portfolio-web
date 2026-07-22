import { motion } from 'motion/react'
import { GraduationCap, BookOpen, Globe, Award } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    title: 'Tecnicatura Superior en Desarrollo de Software',
    institution: 'Instituto de Enseñanza Superior (IDES)',
    period: '2024 – Present',
    status: 'Final Year · Thesis in progress',
    statusColor: '#3D81E3',
    color: '#3D81E3',
    details: [
      'Final-year student building thesis: Soundly — Audio Streaming Platform',
      'Specialized in backend systems, REST APIs, and full stack development',
      'Project-based curriculum with real production deployments',
    ],
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    institution: 'BIG School · Various Platforms',
    period: 'Ongoing',
    status: 'Self-directed',
    statusColor: '#a78bfa',
    color: '#a78bfa',
    details: [
      'AI & Agents course — BIG School',
      'REST API Specialization (Spring Boot / Java)',
      'Advanced Docker & container orchestration',
    ],
  },
]

const languages = [
  {
    lang: 'Spanish',
    level: 'Native',
    icon: '🇦🇷',
    color: '#34d399',
    percent: 100,
  },
  {
    lang: 'English',
    level: 'A2 — Technical reading & daily practice',
    icon: '🇬🇧',
    color: '#3D81E3',
    percent: 35,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-white/[0.05]">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3D81E3]/30 bg-[#3D81E3]/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D81E3]" />
            <span className="text-xs font-medium text-[#3D81E3]">Background</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Education & Background
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Education timeline */}
          <div className="lg:col-span-2 space-y-5">
            {education.map(({ icon: Icon, title, institution, period, status, statusColor, color, details }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="liquid-glass glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-white leading-snug">{title}</h3>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: `${statusColor}15`, color: statusColor, border: `1px solid ${statusColor}30` }}
                      >
                        {status}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mb-1">{institution}</p>
                    <p className="text-[10px] text-white/30 mb-4">{period}</p>
                    <ul className="space-y-1.5">
                      {details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-white/55">
                          <span className="w-1 h-1 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Certifications teaser */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                  <Award size={18} className="text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Certifications & Courses</h3>
                  <p className="text-[10px] text-white/40">Continuously earned</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI & Agents – BIG School', 'REST API Specialization', 'Spring Boot / Java', 'Docker Fundamentals'].map((cert) => (
                  <span key={cert} className="text-[10px] px-2.5 py-1 rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/08 text-[#f59e0b]/80">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {/* Languages card */}
            <div className="liquid-glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10">
                  <Globe size={18} className="text-white/60" />
                </div>
                <h3 className="text-sm font-semibold text-white">Languages</h3>
              </div>
              <div className="space-y-5">
                {languages.map(({ lang, level, icon, color, percent }) => (
                  <div key={lang}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{icon}</span>
                        <span className="text-sm font-medium text-white">{lang}</span>
                      </div>
                      <span className="text-xs text-white/40">{percent}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: color }}
                      />
                    </div>
                    <p className="text-[10px] text-white/35 mt-1.5">{level}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts card */}
            <div className="liquid-glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Córdoba, Argentina 🇦🇷' },
                  { label: 'Availability', value: 'Open to work ✅' },
                  { label: 'Focus', value: 'Backend / Full Stack' },
                  { label: 'Current', value: 'Thesis in progress' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-white/35 uppercase tracking-widest">{label}</span>
                    <span className="text-xs text-white/70">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
