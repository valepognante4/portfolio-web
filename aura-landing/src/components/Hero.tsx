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
          <div className="flex flex-col justify-center order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-badge" />
              <span className="text-xs font-medium text-white/60">
                Desarrolladora de Software Backend &amp; Full Stack · Córdoba, Argentina
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-2 text-balance"
            >
              <span className="text-white">María Valentina</span>
              <br />
              <span className="text-white">Pognante</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-4 text-lg md:text-xl font-medium gradient-text animate-shiny leading-snug max-w-lg text-balance"
            >
              Construyendo soluciones web escalables y digitalizando procesos de negocio.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-5 text-white/55 text-base leading-[1.7] max-w-lg text-pretty"
            >
              Especializada en Java, Spring Boot, Node.js y React. Experiencia diseñando APIs REST, modelando bases de datos relacionales y llevando aplicaciones a producción con estándares profesionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 w-full"
            >
              <a
                href="#projects"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#3D81E3] text-white font-semibold text-sm hover:bg-[#5593e8] transition-all shadow-xl shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <ExternalLink size={15} strokeWidth={1.2} />
                Ver Proyectos
              </a>
              <a
                href="/CV-María Valentina Pognante (28).pdf"
                download="CV_Maria_Valentina_Pognante.pdf"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-medium text-sm w-full sm:w-auto"
              >
                <Download size={15} strokeWidth={1.2} />
                Descargar CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-12 flex items-center gap-2 text-white/30 text-xs"
            >
              <ArrowDown size={13} strokeWidth={1.2} className="animate-bounce" />
              Desliza para explorar
            </motion.div>
          </div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 flex justify-center lg:justify-end group"
          >
            <div className="relative">
              {/* Premium Gradient Frame */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-[#3D81E3]/40 shadow-2xl shadow-black/50 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(61,129,227,0.3)] group-hover:from-white/30 group-hover:to-[#3D81E3]/60">
                <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-[15px] overflow-hidden bg-[#0c0c0c]">
                  <img
                    src="/avatar.jpg"
                    alt="María Valentina Pognante"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 px-5 py-4 backdrop-blur-md bg-black/40 border-t border-white/10 transition-colors group-hover:border-[#3D81E3]/30">
                    <p className="text-sm font-bold text-white">María Valentina Pognante</p>
                    <p className="text-[11px] text-white/70 mt-0.5">Backend &amp; Full Stack · Córdoba, AR</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
