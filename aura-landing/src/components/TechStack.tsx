import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import {
  Cpu,
  Monitor,
  Database,
  ShieldCheck,
  Workflow,
  Sparkles,
  Coffee,
  Layers,
  Server,
  Route,
  Atom,
  FileCode,
  LayoutTemplate,
  AppWindow,
  DatabaseBackup,
  Table2,
  KeyRound,
  Fingerprint,
  Timer,
  GitBranch,
  Container,
  Webhook,
  Package,
} from 'lucide-react'

type Skill = { name: string; icon: LucideIcon }

type Category = {
  icon: LucideIcon
  title: string
  subtitle: string
  color: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    icon: Cpu,
    title: 'Backend & Lenguajes',
    subtitle: 'APIs REST · lógica de negocio · servicios',
    color: '#3D81E3',
    skills: [
      { name: 'Java 17', icon: Coffee },
      { name: 'Spring Boot', icon: Layers },
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Route },
    ],
  },
  {
    icon: Monitor,
    title: 'Frontend & UI',
    subtitle: 'Interfaces reactivas · SPAs · UX',
    color: '#7eb8ff',
    skills: [
      { name: 'React', icon: Atom },
      { name: 'JavaScript', icon: FileCode },
      { name: 'HTML5 / CSS3', icon: LayoutTemplate },
      { name: 'SPAs', icon: AppWindow },
    ],
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    subtitle: 'Modelado relacional · consultas · persistencia',
    color: '#34d399',
    skills: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MySQL', icon: DatabaseBackup },
      { name: 'SQL', icon: Table2 },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad & Auth',
    subtitle: 'Autenticación · sesiones · tokens',
    color: '#f59e0b',
    skills: [
      { name: 'JWT', icon: KeyRound },
      { name: 'OAuth (Google)', icon: Fingerprint },
      { name: 'Sessions', icon: Timer },
    ],
  },
  {
    icon: Workflow,
    title: 'DevOps & Herramientas',
    subtitle: 'CI/CD · contenedores · despliegue',
    color: '#e879f9',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Container },
      { name: 'Postman', icon: Webhook },
      { name: 'Maven', icon: Package },
    ],
  },
]

function TechCard({ category, index }: { category: Category; index: number }) {
  const { icon: CategoryIcon, title, subtitle, color, skills } = category

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="liquid-glass glass-card group relative flex flex-col rounded-2xl p-7 min-h-[220px]"
    >
      <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 min-w-0">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110"
            style={{
              background: `${color}12`,
              border: `1px solid ${color}28`,
            }}
          >
            <CategoryIcon
              size={20}
              strokeWidth={1.2}
              style={{ color }}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold tracking-tight text-white leading-snug text-balance">
              {title}
            </h3>
            <p className="mt-1 text-[11px] font-medium tracking-wide text-white/35 uppercase text-balance">
              {subtitle}
            </p>
          </div>
        </div>
        <span
          className="hidden sm:block h-px w-8 shrink-0 mt-5 opacity-30 transition-all duration-500 group-hover:w-12 group-hover:opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
        />
      </div>

      <ul className="relative z-10 mt-auto flex flex-wrap gap-2">
        {skills.map(({ name, icon: SkillIcon }) => (
          <li key={name}>
            <span className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium text-white/55 transition-all duration-300 group-hover:text-white/70 bg-white/[0.025] border border-white/[0.06] group-hover:bg-white/[0.045] group-hover:border-white/[0.1]">
              <SkillIcon size={13} strokeWidth={1.2} className="shrink-0 opacity-50 transition-opacity duration-300 group-hover:opacity-80" style={{ color }} />
              {name}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          background: 'radial-gradient(ellipse 900px 450px at 50% 40%, #3D81E3, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3D81E3]/80">
            Experiencia Técnica
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-white md:text-[2.75rem] md:leading-[1.08] text-balance">
            Stack de producción
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-white/45 text-pretty">
            Tecnologías con las que diseño APIs REST, modelado de datos y aplicaciones full stack
            desplegadas en entornos reales.
          </p>
        </motion.header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {categories.map((category, i) => (
            <TechCard key={category.title} category={category} index={i} />
          ))}

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: categories.length * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass glass-card group relative flex flex-col justify-between rounded-2xl p-7 sm:col-span-2 lg:col-span-1"
          >
            <div className="relative z-10">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#3D81E3]/25 bg-[#3D81E3]/10 transition-transform duration-500 group-hover:scale-110">
                <Sparkles size={20} strokeWidth={1.2} className="text-[#3D81E3]" />
              </div>
              <h3 className="text-[15px] font-semibold tracking-tight text-white">
                Evolución continua
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-white/40">
                Profundizando en arquitecturas backend con Spring Boot, orquestación con Docker y
                despliegues cloud — siempre aplicado en proyectos con impacto real.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap gap-2">
              {['Spring Boot', 'Docker', 'Cloud'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/35 transition-colors duration-300 group-hover:border-[#3D81E3]/20 group-hover:text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
