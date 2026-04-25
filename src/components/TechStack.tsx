import { motion } from 'framer-motion'

const stack = [
  { category: 'Backend', items: ['FastAPI (Python 3.11)', 'PostgreSQL 16', 'Docker + Nginx'] },
  { category: 'Data Collection', items: ['Garmin Connect API', 'APScheduler (15 min)', 'python-garminconnect'] },
  { category: 'Machine Learning', items: ['scikit-learn', 'NumPy + pandas', 'Online learning (90d window)'] },
  { category: 'Frontend & PWA', items: ['React 18 + Vite + TypeScript', 'Tailwind CSS + Recharts', 'Vite PWA Plugin + Workbox'] },
  { category: 'Notifications', items: ['Web Push API (VAPID)', 'Telegram Bot API', 'python-telegram-bot v21'] },
  { category: 'Infrastructure', items: ['Hetzner Helsinki VPS', "Let's Encrypt TLS", 'Hetzner Storage Box backups'] },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6" style={{ background: 'rgba(10,15,30,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Production-grade from day one
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            No no-code tools, no hosted databases, no vendor lock-in. Every component is open source, self-hosted, and built to scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {stack.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(30,58,95,0.4)' }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#10B981' }}>
                {s.category}
              </h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#cbd5e1' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#1E3A5F' }} />
                    {item}
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
