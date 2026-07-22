import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Menu, X } from 'lucide-react'
import { GithubIcon as Github } from './Icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
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
          <a href="#hero" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3D81E3] to-[#1a4fa8] flex items-center justify-center font-bold text-sm text-white shadow-lg">
                MVP
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black animate-badge" />
            </div>
            <span className="hidden sm:block font-semibold text-sm text-white/80 group-hover:text-white transition-colors">
              Valentina Pognante
            </span>
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
              <Github size={14} />
              GitHub
            </a>
            <a
              href="mailto:valentinapognante4@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3D81E3] text-sm font-medium text-white hover:bg-[#5593e8] transition-all shadow-lg shadow-brand/20"
            >
              <Mail size={14} />
              Email Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
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
                Email Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
