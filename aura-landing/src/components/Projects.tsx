import { motion } from 'motion/react'
import { ExternalLink, Music, CheckSquare, Stethoscope } from 'lucide-react'
import { GithubIcon as Github } from './Icons'

const projects = [
  {
    icon: Music,
    badge: 'Thesis Project',
    badgeColor: '#f59e0b',
    title: 'Soundly',
    subtitle: 'Audio Streaming Platform',
    description:
      'SPA with dynamic navigation for continuous playback without interruptions. Advanced search engine integrated with Deezer API, real-time persistence, and secure password recovery using Java Mail Sender (SMTP).',
    stack: ['Java', 'Spring Boot', 'React'],
    stackColor: '#3D81E3',
    highlights: [
      'Deezer API integration',
      'Continuous audio playback SPA',
      'SMTP password recovery',
      'Real-time persistence',
    ],
    status: 'Thesis',
    accentColor: '#f59e0b',
  },
  {
    icon: CheckSquare,
    badge: 'Live in Production',
    badgeColor: '#34d399',
    title: 'VPlan',
    subtitle: 'Productivity Web App',
    description:
      'Full Stack app deployed live in production on Render. Robust authentication with JWT and Google Sign-In (OAuth), secure session/cookie management, and relational database modeling with PostgreSQL.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    stackColor: '#34d399',
    highlights: [
      'JWT + OAuth Google Sign-In',
      'Session/cookie management',
      'PostgreSQL relational model',
      'Deployed on Render',
    ],
    status: 'Live',
    accentColor: '#34d399',
  },
  {
    icon: Stethoscope,
    badge: 'REST API',
    badgeColor: '#a78bfa',
    title: 'Veterinary Clinic API',
    subtitle: 'Clinic Management System',
    description:
      'Professional REST API designed with Java and Spring Boot following production standards. Environment automation with Docker and cloud deployment. Clean layered architecture with professional API design.',
    stack: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
    stackColor: '#a78bfa',
    highlights: [
      'Production-standard REST API',
      'Docker containerization',
      'Cloud deployment',
      'Layered architecture',
    ],
    status: 'Deployed',
    accentColor: '#a78bfa',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/[0.05]">
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
            <span className="text-xs font-medium text-[#3D81E3]">What I've Built</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Featured Projects
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-[1.7]">
            Real-world applications built with production standards — from full-stack
            web apps to deployed REST APIs.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, badge, badgeColor, title, subtitle, description, stack, highlights, accentColor }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass glass-card rounded-2xl p-6 flex flex-col group"
              style={{ '--accent': accentColor } as React.CSSProperties}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                >
                  <Icon size={20} style={{ color: accentColor }} />
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                  style={{ background: `${badgeColor}15`, color: badgeColor, border: `1px solid ${badgeColor}30` }}
                >
                  {badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-0.5">{title}</h3>
              <p className="text-xs text-white/40 font-medium mb-3">{subtitle}</p>

              {/* Description */}
              <p className="text-sm text-white/60 leading-[1.65] flex-1">{description}</p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-white/50">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: accentColor }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack badges */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                    style={{
                      background: `${accentColor}10`,
                      border: `1px solid ${accentColor}20`,
                      color: `${accentColor}bb`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 flex gap-2 pt-4 border-t border-white/[0.06]">
                <a
                  href="https://github.com/valepognante4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg border border-white/10 text-xs text-white/60 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Github size={12} />
                  Repository
                </a>
                <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all hover:opacity-90"
                  style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}30` }}
                >
                  <ExternalLink size={12} />
                  Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/valepognante4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
          >
            <Github size={16} />
            See all projects on GitHub
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
