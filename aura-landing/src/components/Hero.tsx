import { motion } from 'motion/react'
import { ArrowDown, ExternalLink, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ── Background radial glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #3D81E3 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #a8c4f5 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text content ── */}
          <div className="order-2 lg:order-1">
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-badge" />
              <span className="text-xs font-medium text-white/60">
                Backend &amp; Full Stack Developer · Córdoba, Argentina
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-2"
            >
              <span className="text-white">María Valentina</span>
              <br />
              <span className="text-white">Pognante</span>
            </motion.h1>

            {/* Shiny animated tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-4 text-lg md:text-xl font-medium gradient-text animate-shiny leading-snug max-w-lg"
            >
              Building scalable web solutions &amp; digitalizing business processes.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-5 text-white/55 text-base leading-[1.7] max-w-lg"
            >
              Final-year software development student specialized in Java, Spring Boot, Node.js,
              and React. Passionate about robust backend architectures, REST APIs, and production
              deployments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3D81E3] text-white font-semibold text-sm hover:bg-[#5593e8] transition-all shadow-xl shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5"
              >
                <ExternalLink size={15} />
                View Projects
              </a>
              <a
                href="mailto:valentinapognante4@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-white/25 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Download size={15} />
                Download CV / Contact
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-12 flex items-center gap-2 text-white/30 text-xs"
            >
              <ArrowDown size={13} className="animate-bounce" />
              Scroll to explore
            </motion.div>
          </div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-[-20px] rounded-3xl animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(61,129,227,0.15) 0%, transparent 70%)',
                }}
              />

              {/* Photo container */}
              <div className="relative animate-float">
                {/* Decorative corner accents */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#3D81E3]/60 rounded-tl-lg" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#3D81E3]/60 rounded-tr-lg" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#3D81E3]/60 rounded-bl-lg" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#3D81E3]/60 rounded-br-lg" />

                {/* Photo */}
                <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  <img
                    src="/avatar.jpg"
                    alt="María Valentina Pognante"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Name badge at bottom */}
                  <div className="absolute bottom-0 inset-x-0 px-4 py-3 backdrop-blur-sm bg-black/30 border-t border-white/10">
                    <p className="text-xs font-semibold text-white">María Valentina Pognante</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Backend &amp; Full Stack · Córdoba, AR</p>
                  </div>
                </div>

                {/* Floating tech pill */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-10 top-12 px-3 py-2 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md shadow-xl"
                >
                  <p className="text-[10px] text-white/50">Primary Stack</p>
                  <p className="text-xs font-semibold text-[#3D81E3] mt-0.5">Java · Spring Boot</p>
                </motion.div>

                {/* Floating status pill */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -left-10 bottom-16 px-3 py-2 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-badge" />
                    <p className="text-xs font-medium text-white/70">Open to work</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
