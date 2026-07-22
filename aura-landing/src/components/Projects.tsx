import { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Music, CheckSquare, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react'
import { GithubIcon as Github } from './Icons'

const projects = [
  {
    icon: CheckSquare,
    badge: 'En Producción',
    badgeColor: '#34d399',
    title: 'VPlan',
    subtitle: 'Aplicación Web de Productividad',
    description:
      'Aplicación Full Stack desplegada en producción en Render. Autenticación robusta con JWT y Google Sign-In (OAuth), gestión segura de sesiones/cookies y modelo de base de datos relacional con PostgreSQL.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    stackColor: '#34d399',
    highlights: [
      'JWT + OAuth Google Sign-In',
      'Gestión de sesiones/cookies',
      'Modelo relacional PostgreSQL',
      'Desplegado en Render',
    ],
    accentColor: '#34d399',
    repoUrl: 'https://github.com/valepognante4',
    liveUrl: undefined as string | undefined,
  },
  {
    icon: Music,
    badge: 'Proyecto de Tesis',
    badgeColor: '#f59e0b',
    title: 'Soundly',
    subtitle: 'Plataforma de Streaming de Audio',
    description:
      'SPA con navegación dinámica para reproducción continua sin interrupciones. Motor de búsqueda avanzado integrado con la API de Deezer, persistencia en tiempo real y recuperación segura de contraseñas (SMTP).',
    stack: ['Java', 'Spring Boot', 'React'],
    stackColor: '#3D81E3',
    highlights: [
      'Integración API de Deezer',
      'SPA con reproducción continua',
      'Recuperación de contraseña SMTP',
      'Persistencia en tiempo real',
    ],
    accentColor: '#f59e0b',
    repoUrl: 'https://github.com/valepognante4',
    liveUrl: undefined as string | undefined,
  },
  {
    icon: Stethoscope,
    badge: 'API REST',
    badgeColor: '#a78bfa',
    title: 'API Clínica Veterinaria',
    subtitle: 'Sistema de Gestión de Clínica',
    description:
      'API REST profesional diseñada con Java y Spring Boot siguiendo estándares de producción. Automatización de entornos con Docker y despliegue en la nube. Arquitectura limpia por capas.',
    stack: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
    stackColor: '#a78bfa',
    highlights: [
      'API REST estándar de producción',
      'Contenerización con Docker',
      'Despliegue en la nube',
      'Arquitectura por capas',
    ],
    accentColor: '#a78bfa',
    repoUrl: 'https://github.com/valepognante4',
    liveUrl: undefined as string | undefined,
  },
]

const carouselTransition = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 28,
  mass: 0.8,
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const getPos = (i: number) => {
    let diff = i - currentIndex
    if (diff > 1) diff -= projects.length
    if (diff < -1) diff += projects.length
    return diff
  }

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/[0.05] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3D81E3]/30 bg-[#3D81E3]/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D81E3]" />
            <span className="text-xs font-medium text-[#3D81E3]">Lo Que He Construido</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-[1.7]">
            Aplicaciones del mundo real construidas con estándares de producción — desde apps web full-stack hasta APIs REST desplegadas.
          </p>
        </motion.div>

        <div className="relative h-[650px] md:h-[550px] flex items-center justify-center max-w-5xl mx-auto w-full">
          {projects.map((proj, i) => {
            const pos = getPos(i)
            const isCenter = pos === 0
            const isVisible = Math.abs(pos) <= 1

            return (
              <motion.article
                key={proj.title}
                animate={{
                  x: `${pos * 108}%`,
                  scale: isCenter ? 1 : 0.88,
                  opacity: isCenter ? 1 : isVisible ? 0.45 : 0,
                  zIndex: isCenter ? 10 : 5 - Math.abs(pos),
                  filter: isCenter ? 'blur(0px)' : 'blur(1px)',
                }}
                transition={carouselTransition}
                className="absolute w-full max-w-[320px] md:max-w-[380px] group cursor-default will-change-transform"
                style={{
                  '--accent': proj.accentColor,
                  pointerEvents: isCenter ? 'auto' : 'none',
                } as React.CSSProperties}
              >
                <div className="liquid-glass glass-card rounded-2xl p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${proj.accentColor}15`, border: `1px solid ${proj.accentColor}30` }}
                    >
                      <proj.icon size={20} strokeWidth={1.2} style={{ color: proj.accentColor }} />
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                      style={{ background: `${proj.badgeColor}15`, color: proj.badgeColor, border: `1px solid ${proj.badgeColor}30` }}
                    >
                      {proj.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-0.5">{proj.title}</h3>
                  <p className="text-xs text-white/40 font-medium mb-3">{proj.subtitle}</p>

                  <p className="text-sm text-white/60 leading-[1.65] flex-1">{proj.description}</p>

                  <ul className="mt-4 space-y-1.5">
                    {proj.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-white/50">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: proj.accentColor }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                        style={{
                          background: `${proj.accentColor}10`,
                          border: `1px solid ${proj.accentColor}20`,
                          color: `${proj.accentColor}bb`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2 pt-4 border-t border-white/[0.06]">
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 py-2 rounded-lg border border-white/10 text-xs text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all ${proj.liveUrl ? 'flex-1' : 'w-full'}`}
                    >
                      <Github size={14} strokeWidth={1.2} />
                      Repositorio
                    </a>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all hover:opacity-90"
                        style={{ background: `${proj.accentColor}20`, color: proj.accentColor, border: `1px solid ${proj.accentColor}30` }}
                      >
                        <ExternalLink size={14} strokeWidth={1.2} />
                        Detalles
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Proyecto anterior"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] transition-all active:scale-95"
          >
            <ChevronLeft size={18} strokeWidth={1.2} />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ir al proyecto ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#3D81E3] w-4' : 'bg-white/20 hover:bg-white/40 w-2'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Proyecto siguiente"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] transition-all active:scale-95"
          >
            <ChevronRight size={18} strokeWidth={1.2} />
          </button>
        </div>

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
            <Github size={16} strokeWidth={1.2} />
            Ver todos los proyectos en GitHub
            <ExternalLink size={13} strokeWidth={1.2} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
