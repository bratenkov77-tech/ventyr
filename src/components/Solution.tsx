import { motion } from 'framer-motion'
import { Zap, Brain, Server, Smartphone, FileText, BookOpen } from 'lucide-react'

const solutions = [
  {
    icon: Zap,
    title: 'Universal Sport Recognition',
    desc: 'Intelligent activity classification across running, swimming, cycling, strength, yoga, martial arts, and more. Each sport gets its own load calculation model — not a generic strain score.',
    highlight: '12+ sport types',
  },
  {
    icon: Brain,
    title: 'Personalized BP Estimation',
    desc: 'Personal regression model (scikit-learn) trained on your HRV, RHR, sleep phases, and skin temperature — calibrated with a standard blood pressure monitor over 14 days. Weekly retraining.',
    highlight: '±5–10 mmHg accuracy',
  },
  {
    icon: Server,
    title: 'Own Your Data',
    desc: 'Your health data runs on your own server infrastructure (Hetzner Helsinki). PostgreSQL database, Docker containers, daily backups. No third-party data sharing, full GDPR compliance.',
    highlight: 'Self-hosted · GDPR',
  },
  {
    icon: Smartphone,
    title: 'Two Access Channels',
    desc: 'Progressive Web App installs as an icon on iOS, Android, macOS, and Windows — with offline support and push notifications. Plus a Telegram bot for quick input, morning reports, and alerts.',
    highlight: 'PWA + Telegram',
  },
  {
    icon: FileText,
    title: 'Doctor-ready PDF reports',
    desc: 'One-click export of your cardiovascular, sleep, and recovery data in a clean, clinical format. Available in English, Spanish, and Russian. Perfect for annual check-ups or consultations with specialists.',
    highlight: 'Medical-grade export',
  },
  {
    icon: BookOpen,
    title: 'Behavioral journal',
    desc: 'Track alcohol, caffeine, stress, travel, and 100+ other daily behaviors. Ventyr correlates them with your recovery, sleep, and stress metrics to reveal what actually affects your performance.',
    highlight: '100+ factors',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6" style={{ background: 'rgba(10,15,30,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Built differently, by design
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Ventyr adapts to the athlete, not the other way around. Every metric is calculated for your physiology, your sport, your data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(17,24,39,0.9), rgba(26,37,53,0.8))',
                border: '1px solid rgba(30,58,95,0.5)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.15)' }}
                >
                  <s.icon size={20} color="#10B981" />
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981' }}
                >
                  {s.highlight}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
