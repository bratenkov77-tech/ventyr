import { motion } from 'framer-motion'
import { Server, Cloud, CheckCircle } from 'lucide-react'

const plans = [
  {
    badge: 'FREE FOREVER',
    badgeColor: '#10B981',
    badgeBg: 'rgba(16,185,129,0.15)',
    icon: Server,
    title: 'Self-Hosted',
    price: '$0',
    period: 'forever',
    features: [
      'Open source · MIT license',
      'Full data ownership',
      'Docker Compose setup',
      'Community support',
      'All features included',
      'No user limits',
    ],
    highlighted: false,
  },
  {
    badge: 'MANAGED HOSTING',
    badgeColor: '#10B981',
    badgeBg: 'rgba(16,185,129,0.1)',
    icon: Cloud,
    title: 'Ventyr Cloud',
    price: '€4.99',
    period: 'per month',
    features: [
      'Zero setup · Instant start',
      'Automatic backups',
      'Mobile push notifications',
      'Priority email support',
      'Family profiles (up to 5)',
      'All features included',
    ],
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: 'rgba(10,15,30,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Open & fair pricing
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Choose what works for you. No feature paywalls. No data harvesting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                background: plan.highlighted
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(17,24,39,0.95))'
                  : 'rgba(17,24,39,0.8)',
                border: plan.highlighted
                  ? '1px solid rgba(16,185,129,0.35)'
                  : '1px solid rgba(30,58,95,0.4)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full tracking-wider"
                  style={{ background: plan.badgeBg, color: plan.badgeColor }}
                >
                  {plan.badge}
                </span>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.12)' }}
                >
                  <plan.icon size={18} color="#10B981" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold" style={{ color: '#10B981' }}>{plan.price}</span>
                <span className="text-sm" style={{ color: '#64748b' }}>{plan.period}</span>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle size={15} color="#10B981" className="shrink-0" />
                    <span className="text-sm" style={{ color: '#cbd5e1' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm mt-10"
          style={{ color: '#475569' }}
        >
          Pricing subject to refinement. Join the waitlist for launch updates.
        </motion.p>
      </div>
    </section>
  )
}
