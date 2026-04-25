import { motion, useReducedMotion } from 'framer-motion'
import { Watch, Wifi, Database, RefreshCw } from 'lucide-react'

function AnimatedArrow() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) {
    return <span className="text-xl" style={{ color: '#1E3A5F' }}>→</span>
  }
  return (
    <svg width="44" height="20" viewBox="0 0 44 20" style={{ overflow: 'visible', flexShrink: 0 }}>
      <line x1="2" y1="10" x2="36" y2="10" stroke="#1E3A5F" strokeWidth="1.5" />
      <polygon points="32,6 42,10 32,14" fill="#1E3A5F" />
      {([0, 0.45, 0.9] as const).map((delay) => (
        <motion.circle
          key={delay}
          cx={2}
          cy={10}
          r={2.5}
          fill="#10B981"
          animate={{ cx: [2, 34], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, delay, ease: 'linear' }}
        />
      ))}
    </svg>
  )
}

const devices = [
  { name: 'Garmin Venu 3', note: 'Primary · HRV, SpO2, sleep, stress', color: '#10B981' },
  { name: 'Garmin Epix Pro Gen 2', note: 'Premium · AMOLED, advanced metrics', color: '#34d399' },
  { name: 'Garmin Fenix 8', note: 'Top-tier · Multisport professional', color: '#6ee7b7' },
  { name: 'Garmin Cirqa', note: 'Coming 2026 · Screenless band (Nicole)', color: '#a7f3d0' },
]

const dataFlow = [
  { icon: Watch, label: 'Garmin Watch', sub: 'Venu / Epix / Fenix / Cirqa' },
  { icon: Wifi, label: 'Garmin Connect', sub: 'Cloud sync via API' },
  { icon: RefreshCw, label: 'Ventyr Collector', sub: 'Every 15 min · FastAPI' },
  { icon: Database, label: 'PostgreSQL', sub: 'Helsinki server · Hetzner' },
]

export default function GarminStack() {
  return (
    <section id="garmin" className="py-24 px-6" style={{ background: 'rgba(10,15,30,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            Built on Garmin
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Powered by Garmin's ecosystem
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Ventyr is built exclusively on Garmin hardware and Garmin Connect API. We chose Garmin for its best-in-class HRV accuracy, open developer ecosystem, and multi-sport expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {dataFlow.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div
                className="flex flex-col items-center px-5 py-4 rounded-xl text-center min-w-[130px]"
                style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(30,58,95,0.4)' }}
              >
                <step.icon size={20} color="#10B981" className="mb-2" />
                <span className="text-sm font-semibold text-white">{step.label}</span>
                <span className="text-xs mt-1" style={{ color: '#64748b' }}>{step.sub}</span>
              </div>
              {i < dataFlow.length - 1 && <AnimatedArrow />}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-center text-sm font-medium uppercase tracking-widest mb-6" style={{ color: '#64748b' }}>
            Supported Devices
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {devices.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4, border: '1px solid rgba(16,185,129,0.4)', boxShadow: '0 8px 24px rgba(16,185,129,0.12)' }}
                className="rounded-xl p-4 text-center device-card cursor-pointer"
                style={{ background: 'rgba(17,24,39,0.6)', border: `1px solid ${d.color}30` }}
              >
                <div
                  className="w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center device-icon"
                  style={{ background: `${d.color}20` }}
                >
                  <Watch size={16} color={d.color} />
                </div>
                <p className="text-sm font-semibold text-white">{d.name}</p>
                <p className="text-xs mt-1" style={{ color: '#64748b' }}>{d.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm" style={{ color: '#475569' }}>
            Ventyr is an independent third-party application. Not affiliated with Garmin Ltd. or its subsidiaries.
            Built using Garmin Connect API under the Garmin Developer Program.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
