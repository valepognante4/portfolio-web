import { motion } from 'motion/react'

const testimonials = [
  {
    quote:
      'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
    name: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    quote:
      'The command palette alone has changed how I process messages. I can\'t imagine going back to a traditional client.',
    name: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    quote:
      'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
    name: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
]

export default function Testimonials() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, role, company }, i) => (
          <motion.figure
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-2xl p-6"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6]">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-white/50">{role}</p>
              <p className="mt-1 text-xs text-white font-semibold tracking-wide uppercase">
                {company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
