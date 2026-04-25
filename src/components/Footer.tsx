import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Mail, MapPin, ArrowRight } from 'lucide-react'

const WAITLIST_HREF = 'mailto:bratenkov77@gmail.com?subject=Ventyr%20Waitlist&body=Hi%20Evgeniy%2C%0A%0AI%27d%20like%20to%20join%20the%20Ventyr%20waitlist.%0A%0AName%3A%20%0ASport%2Factivity%3A%20%0ACurrent%20wearable%20(if%20any)%3A%20%0A%0AThanks!'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} style={{ borderTop: '1px solid rgba(30,58,95,0.4)' }}>
      {/* CTA section */}
      <div
        className="py-20 px-6 text-center"
        style={{ background: 'linear-gradient(180deg, rgba(10,15,30,0) 0%, rgba(16,185,129,0.05) 100%)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the first to know
          </h2>
          <p className="text-lg mb-8" style={{ color: '#94a3b8' }}>
            Ventyr is in private development through 2026 — founder and family only. Public access opens Q4 2026 with open source release and managed cloud option. Join the waitlist to be notified when invites open.
          </p>
          <a
            href={WAITLIST_HREF}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 0 30px rgba(16,185,129,0.25)' }}
          >
            Join Waitlist <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div
        className="px-6 py-8"
        style={{ background: 'rgba(10,15,30,0.8)', borderTop: '1px solid rgba(30,58,95,0.3)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Activity size={18} color="#10B981" />
            <span className="font-semibold text-white">Ventyr</span>
            <span className="text-sm" style={{ color: '#475569' }}>· ventyr.pro</span>
          </div>

          <div className="flex items-center gap-6 text-sm" style={{ color: '#64748b' }}>
            <a href="mailto:bratenkov77@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} />
              bratenkov77@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              Barcelona, Spain
            </span>
          </div>

          <p className="text-xs" style={{ color: '#334155' }}>
            © 2026 Ventyr · Garmin® is a trademark of Garmin Ltd. · Open source · Privacy-first
          </p>
        </div>
      </div>
    </footer>
  )
}
