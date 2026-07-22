import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" />
      </div>

      {/* ── Ambient background particles / noise ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top-left subtle glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #3D81E3 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Bottom-right subtle glow */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #a8c4f5 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── Page content ── */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          {/* About anchor (thin separator) */}
          <div id="about" className="max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  )
}
