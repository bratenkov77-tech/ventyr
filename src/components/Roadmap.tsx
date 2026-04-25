import { motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1',
    period: 'Q2–Q3 2026',
    title: 'Single-user development & validation',
    status: 'active',
    items: [
      { done: true, text: 'Domain ventyr.pro registered' },
      { done: true, text: 'Technical specification finalized' },
      { done: false, text: 'Garmin Developer Program application' },
      { done: false, text: 'Garmin data collection pipeline (15-min sync)' },
      { done: false, text: 'Recovery, Strain, Sleep metrics v1' },
      { done: false, text: 'BP estimation model — 14-day calibration' },
      { done: false, text: 'Progressive Web App (PWA) + Telegram bot' },
      { done: false, text: 'Personal validation with founder and family' },
    ],
  },
  {
    phase: 'Phase 2',
    period: 'Q4 2026+',
    title: 'Public release · Open source + Cloud',
    status: 'planned',
    items: [
      { done: false, text: 'Multi-user accounts (family plan)' },
      { done: false, text: 'EN / ES / RU localization' },
      { done: false, text: 'Garmin commercial license upgrade' },
      { done: false, text: 'Open source release on GitHub' },
      { done: false, text: 'GDPR compliance documentation' },
      { done: false, text: 'Ventyr Cloud — managed hosting' },
      { done: false, text: 'Community contributions welcomed' },
    ],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            From personal tool to global platform
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            We start with rigorous personal validation — two athletes, one year — before commercialization. No premature scaling, no cutting corners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-8"
              style={{
                background: phase.status === 'active'
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(17,24,39,0.9))'
                  : 'rgba(17,24,39,0.8)',
                border: phase.status === 'active'
                  ? '1px solid rgba(16,185,129,0.3)'
                  : '1px solid rgba(30,58,95,0.4)',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: phase.status === 'active' ? 'rgba(16,185,129,0.15)' : 'rgba(30,58,95,0.3)',
                    color: phase.status === 'active' ? '#10B981' : '#64748b',
                  }}
                >
                  {phase.phase}
                </span>
                <span className="text-sm font-medium" style={{ color: '#64748b' }}>{phase.period}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    {item.done ? (
                      <CheckCircle size={16} color="#10B981" className="mt-0.5 shrink-0" />
                    ) : (
                      <Circle size={16} color="#334155" className="mt-0.5 shrink-0" />
                    )}
                    <span className="text-sm" style={{ color: item.done ? '#e2e8f0' : '#94a3b8' }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
