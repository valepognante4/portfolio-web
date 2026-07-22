import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Menu, X } from 'lucide-react'
import { GithubIcon as Github } from './Icons'

const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Tecnologías', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo / initials */}
          <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
            <span className="font-semibold text-lg md:text-xl tracking-tight text-white/90 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all">
              Valentina Pognante
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-badge mb-3 ml-0.5" />
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => setActive(link.label)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  active === link.label
                    ? 'text-white bg-white/[0.07]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/valepognante4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
            >
              <Github size={14} strokeWidth={1.2} />
              GitHub
            </a>
            <a
              href="mailto:valentinapognante4@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3D81E3] text-sm font-medium text-white hover:bg-[#5593e8] transition-all shadow-lg shadow-brand/20"
            >
              <Mail size={14} strokeWidth={1.2} />
              Contactar
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={16} strokeWidth={1.2} /> : <Menu size={16} strokeWidth={1.2} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 inset-x-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex flex-col gap-3 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/70 hover:text-white py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/valepognante4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-full border border-white/10 text-sm text-white/70"
              >
                GitHub
              </a>
              <a
                href="mailto:valentinapognante4@gmail.com"
                className="flex-1 text-center py-2 rounded-full bg-[#3D81E3] text-sm text-white font-medium"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
