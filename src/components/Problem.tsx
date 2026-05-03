import { motion } from 'framer-motion'
import { AlertTriangle, Lock, TrendingDown, DollarSign } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    title: 'One-size-fits-all strain',
    desc: 'Generic platforms measure all activity through a single cardiovascular strain metric. This fails for strength training (low HR, high neuromuscular load), yoga, swimming, and martial arts.',
  },
  {
    icon: DollarSign,
    title: 'Subscription dependency',
    desc: 'Many platforms charge $200–$360 per year for insights derived from your own biometric data. Their business model depends on you paying forever, not on the value you receive.',
  },
  {
    icon: Lock,
    title: 'Closed ecosystem',
    desc: 'Your health data often lives on third-party servers, accessible only through proprietary apps. No raw export, no integrations with your own tools, no data ownership.',
  },
  {
    icon: AlertTriangle,
    title: 'Generic, not personalized',
    desc: 'Recovery scores are calibrated to population averages, not your physiology. A 15-year-old competitive swimmer and a 40-year-old strength athlete need fundamentally different models.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Existing solutions fall short
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Most wearable platforms are built for the average user — not the serious athlete who trains across multiple disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(30,58,95,0.4)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(239,68,68,0.1)' }}
              >
                <p.icon size={20} color="#ef4444" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{p.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
