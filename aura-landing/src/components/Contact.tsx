import { motion } from 'motion/react'
import { Mail, ArrowUpRight, Heart } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons'

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@valepognante4',
    href: 'https://github.com/valepognante4',
    color: '#ffffff',
    desc: 'Explore my repositories and open-source work',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'María Valentina Pognante',
    href: 'https://linkedin.com/in/mar%C3%ADa-valentina-pognante-ba3491363',
    color: '#0A66C2',
    desc: 'Connect with me professionally',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'valentinapognante4@gmail.com',
    href: 'mailto:valentinapognante4@gmail.com',
    color: '#3D81E3',
    desc: 'Best way to reach me directly',
  },
]

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative py-24 md:py-32 border-t border-white/[0.05]">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            background: 'radial-gradient(ellipse 700px 500px at 50% 100%, #3D81E3, transparent)',
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
              <span className="text-xs font-medium text-[#3D81E3]">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Let's Connect
            </h2>
            <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-[1.7]">
              I'm always open to discussing new projects, collaborations, or just a good
              conversation about tech. Feel free to reach out.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {contacts.map(({ icon: Icon, label, handle, href, color, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="liquid-glass glass-card rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-white/40 mt-0.5 break-all">{handle}</p>
                  <p className="text-[11px] text-white/30 mt-2 leading-[1.5]">{desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:valentinapognante4@gmail.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#3D81E3] text-white font-semibold text-sm hover:bg-[#5593e8] transition-all shadow-2xl shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-1"
            >
              <Mail size={16} />
              Send me a message
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span>© 2025 María Valentina Pognante</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={10} className="text-[#3D81E3] inline mx-0.5" /> in Córdoba, Argentina
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/valepognante4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/mar%C3%ADa-valentina-pognante-ba3491363"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:valentinapognante4@gmail.com"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
