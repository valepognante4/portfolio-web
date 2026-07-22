import { motion } from 'motion/react'
import { Server, Globe, Database, Shield, Settings } from 'lucide-react'

const categories = [
  {
    icon: Server,
    title: 'Backend & Languages',
    color: '#3D81E3',
    skills: ['Java 17', 'Spring Boot', 'Node.js', 'Express', 'Spring Data JPA', 'Hibernate'],
  },
  {
    icon: Globe,
    title: 'Frontend & Interactivity',
    color: '#a8c4f5',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SPAs'],
  },
  {
    icon: Database,
    title: 'Databases & Persistence',
    color: '#34d399',
    skills: ['PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    color: '#f59e0b',
    skills: ['JWT', 'OAuth (Google Sign-In)', 'Cookies & Sessions'],
  },
  {
    icon: Settings,
    title: 'DevOps & Tools',
    color: '#f472b6',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Maven', 'Layered Architecture'],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32">
      {/* Section background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: 'radial-gradient(ellipse 800px 400px at 50% 50%, #3D81E3, transparent)',
        }}
      />

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
            <span className="text-xs font-medium text-[#3D81E3]">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Tech Stack
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-[1.7]">
            A curated set of technologies I work with to build robust, scalable,
            and production-ready applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, title, color, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass glass-card rounded-2xl p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}25`,
                      color: `${color}cc`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* "Currently learning" card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: categories.length * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-2xl p-6 border border-dashed border-white/10 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10">
                <span className="text-base">🚀</span>
              </div>
              <h3 className="text-sm font-semibold text-white/70">Always Learning</h3>
            </div>
            <p className="text-xs text-white/40 leading-[1.7]">
              Currently deepening knowledge in AI & Agents, REST API specialization with Spring Boot/Java,
              and exploring advanced Docker orchestration for cloud deployments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
