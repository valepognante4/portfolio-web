import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { AppleButton } from './Primitives'

export default function FinalCTA() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        {/* Radial glow overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
            opacity: 0.3,
          }}
        />

        <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] text-white">
          Close the tabs.
          <br />
          Open your day.
        </h2>

        <p className="relative mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
          Join thousands of builders, founders, and operators who treat email like a tool — not an
          obligation.
        </p>

        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <AppleButton label="Download Aura" />
          <button className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors">
            Talk to sales
            <ChevronRight size={14} />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
