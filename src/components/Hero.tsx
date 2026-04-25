import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'

const WAITLIST_HREF = 'mailto:bratenkov77@gmail.com?subject=Ventyr%20Waitlist&body=Hi%20Evgeniy%2C%0A%0AI%27d%20like%20to%20join%20the%20Ventyr%20waitlist.%0A%0AName%3A%20%0ASport%2Factivity%3A%20%0ACurrent%20wearable%20(if%20any)%3A%20%0A%0AThanks!'

const HRV_PATH = "M0,60 L80,60 L100,60 L110,30 L120,85 L130,15 L140,90 L150,60 L180,60 L260,60 L280,60 L290,35 L300,80 L310,20 L320,85 L330,60 L360,60 L440,60 L460,60 L470,38 L480,78 L490,22 L500,82 L510,60 L540,60 L600,60"

function HRVWave() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl mx-auto opacity-80">
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0" />
          <stop offset="20%" stopColor="#10B981" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="80%" stopColor="#10B981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <line x1="0" y1="60" x2="600" y2="60" stroke="#1E3A5F" strokeWidth="1" strokeOpacity="0.3" />
      {/* Static dim background wave */}
      <path d={HRV_PATH} stroke="url(#waveGrad)" strokeWidth="2" fill="none" opacity="0.25" />
      {/* Running ECG highlight — Framer Motion keeps values in SVG user units (no px conversion) */}
      <motion.path
        d={HRV_PATH}
        stroke="#10B981"
        strokeWidth="2.5"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="200 1150"
        animate={prefersReducedMotion ? {} : { strokeDashoffset: [0, -1350] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      {/* Pulsing peak dot */}
      <motion.circle
        cx="490"
        cy="22"
        r="4"
        fill="#10B981"
        animate={prefersReducedMotion ? {} : { opacity: [1, 0.3, 1], scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24 overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,58,95,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <Heart size={14} />
          Built on Garmin · Barcelona, Spain
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="text-white">Next-generation</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #10B981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            health monitoring
          </span>
          <br />
          <span className="text-white">for every athlete</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#94a3b8' }}
        >
          Ventyr adapts to your sport — running, swimming, strength, cycling, yoga and more.
          Personalized recovery, BP estimation, stress tracking, and full data ownership.
          Your health, your infrastructure. Public access opens in Q4 2026.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href={WAITLIST_HREF}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 0 30px rgba(16,185,129,0.3)' }}
          >
            Join Waitlist <ArrowRight size={18} />
          </a>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all"
            style={{ background: 'rgba(30,58,95,0.3)', color: '#94a3b8', border: '1px solid rgba(30,58,95,0.5)' }}
          >
            Learn more
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <HRVWave />
          <p className="text-xs mt-2" style={{ color: '#475569' }}>Live HRV monitoring · Recovery Score · Sport Recognition</p>
        </motion.div>
      </div>
    </section>
  )
}
