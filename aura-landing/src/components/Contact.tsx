import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Mail,
  ArrowUpRight,
  Heart,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons'

const CONTACT_EMAIL = 'valentinapognante4@gmail.com'

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@valepognante4',
    href: 'https://github.com/valepognante4',
    color: '#ffffff',
    desc: 'Repositorios y proyectos open-source',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'María Valentina Pognante',
    href: 'https://linkedin.com/in/mar%C3%ADa-valentina-pognante-ba3491363',
    color: '#0A66C2',
    desc: 'Conexión profesional',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    color: '#3D81E3',
    desc: 'Contacto directo',
  },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const accessKey = formData.get('access_key')?.toString()

    if (!accessKey || accessKey === 'TU_ACCESS_KEY_AQUI') {
      setErrorMessage(
        `Por favor, reemplaza "TU_ACCESS_KEY_AQUI" en el código con tu clave real de Web3Forms, o escríbeme a ${CONTACT_EMAIL}`
      )
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.get('nombre'),
          email: formData.get('email'),
          message: formData.get('mensaje'),
          subject: 'Portfolio — Nuevo mensaje de contacto',
          from_name: 'Portfolio · María Valentina Pognante',
          replyto: formData.get('email'),
        }),
      })

      const data = await response.json()

      if (data.success) {
        form.reset()
        setStatus('success')
      } else {
        throw new Error(data.message || 'No se pudo enviar el mensaje')
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Error al enviar. Intenta nuevamente o escríbeme por email.'
      )
      setStatus('error')
    }
  }

  const dismissSuccess = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  return (
    <>
      <section id="contact" className="relative border-t border-white/[0.05] py-28 md:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse 800px 520px at 50% 100%, #3D81E3, transparent)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3D81E3]/80">
              Contacto
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-white md:text-[2.75rem]">
              Trabajemos juntos
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.75] text-white/45">
              Nuevos proyectos, colaboraciones o una conversación sobre tecnología — escríbeme y
              te respondo a la brevedad.
            </p>
          </motion.header>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-3 lg:col-span-2"
            >
              {contacts.map(({ icon: Icon, label, handle, href, color, desc }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link liquid-glass glass-card group flex items-center gap-4 rounded-2xl p-5"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}22`,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.2} style={{ color }} className="transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-0.5 truncate text-xs text-white/40">{handle}</p>
                    <p className="mt-1 text-[11px] text-white/28">{desc}</p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.2}
                    className="shrink-0 text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/50"
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-3"
            >
              <div className="contact-form-shell liquid-glass glass-card relative min-h-[460px] overflow-hidden rounded-3xl p-8 md:p-9 cursor-default">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#3D81E3]/[0.06] blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#3D81E3]/[0.04] blur-[70px]" />

                <div className="relative z-10 mb-7 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3D81E3]/20 bg-[#3D81E3]/10 transition-transform duration-500 hover:scale-105 hover:rotate-3">
                    <MessageSquare size={18} className="text-[#3D81E3]" strokeWidth={1.2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      Envíame un mensaje
                    </h3>
                    <p className="mt-1 text-[13px] text-white/38">
                      Llega directo a{' '}
                      <span className="text-white/55">{CONTACT_EMAIL}</span> vía Web3Forms.
                    </p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  {/* CAMBIA "TU_ACCESS_KEY_AQUI" POR TU CLAVE REAL DE WEB3FORMS */}
                  <input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        disabled={status === 'loading'}
                        autoComplete="name"
                        className="contact-input transition-colors duration-300 hover:border-white/20 focus:border-[#3D81E3]/50 focus:bg-[#3D81E3]/5"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        disabled={status === 'loading'}
                        autoComplete="email"
                        className="contact-input transition-colors duration-300 hover:border-white/20 focus:border-[#3D81E3]/50 focus:bg-[#3D81E3]/5"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      disabled={status === 'loading'}
                      className="contact-input resize-none transition-colors duration-300 hover:border-white/20 focus:border-[#3D81E3]/50 focus:bg-[#3D81E3]/5"
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                      required
                    />
                  </div>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -6, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-start gap-2.5 overflow-hidden rounded-xl border border-red-500/20 bg-red-500/[0.08] px-4 py-3"
                      >
                        <AlertCircle size={16} strokeWidth={1.2} className="mt-0.5 shrink-0 text-red-400" />
                        <p className="text-xs leading-[1.6] text-red-300/90">{errorMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="contact-submit group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={17} strokeWidth={1.2} className="animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send
                          size={17}
                          strokeWidth={1.2}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Floating success toast */}
                <AnimatePresence>
                  {status === 'success' && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 z-20 rounded-3xl bg-[#0c0c0c]/55 backdrop-blur-[2px]"
                        onClick={dismissSuccess}
                        aria-hidden
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 z-30 flex items-center justify-center p-5 pointer-events-none"
                      >
                        <motion.div
                          role="status"
                          initial={{ opacity: 0, y: 28, scale: 0.92 }}
                          animate={{
                            opacity: 1,
                            y: [0, -6, 0],
                            scale: 1,
                          }}
                          exit={{ opacity: 0, y: -16, scale: 0.95 }}
                          transition={{
                            opacity: { duration: 0.3 },
                            scale: { type: 'spring', stiffness: 320, damping: 26 },
                            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                          }}
                          className="success-toast pointer-events-auto w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl bg-black/60 backdrop-blur-xl border border-white/10"
                        >
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 18 }}
                          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/15"
                        >
                          <CheckCircle2 size={28} className="text-emerald-400" strokeWidth={1.2} />
                        </motion.div>

                        <motion.h4
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.18, duration: 0.35 }}
                          className="text-base font-semibold tracking-tight text-white"
                        >
                          Mensaje enviado correctamente
                        </motion.h4>

                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.26, duration: 0.35 }}
                          className="mt-2 text-[13px] leading-[1.65] text-white/45"
                        >
                          Gracias por contactarme. Revisaré tu mensaje y te responderé pronto en tu
                          correo.
                        </motion.p>

                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.38, duration: 0.3 }}
                          type="button"
                          onClick={dismissSuccess}
                          className="mt-5 rounded-xl border border-white/10 px-4 py-2 text-xs font-medium text-white/55 transition-all hover:border-white/20 hover:text-white hover:bg-white/[0.04]"
                        >
                          Enviar otro mensaje
                        </motion.button>

                        <motion.div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.05] py-8 relative">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span>© 2026 María Valentina Pognante</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={10} strokeWidth={1.2} className="mx-0.5 inline text-[#3D81E3] animate-pulse" /> en Córdoba,
              Argentina
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/valepognante4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-all hover:text-white hover:scale-110"
            >
              <Github size={15} strokeWidth={1.2} />
            </a>
            <a
              href="https://linkedin.com/in/mar%C3%ADa-valentina-pognante-ba3491363"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition-all hover:text-white hover:scale-110"
            >
              <Linkedin size={15} strokeWidth={1.2} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/30 transition-all hover:text-white hover:scale-110"
            >
              <Mail size={15} strokeWidth={1.2} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
