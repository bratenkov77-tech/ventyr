import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'

const WAITLIST_HREF = 'mailto:bratenkov77@gmail.com?subject=Ventyr%20Waitlist&body=Hi%20Evgeniy%2C%0A%0AI%27d%20like%20to%20join%20the%20Ventyr%20waitlist.%0A%0AName%3A%20%0ASport%2Factivity%3A%20%0ACurrent%20wearable%20(if%20any)%3A%20%0A%0AThanks!'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ borderBottom: '1px solid rgba(30,58,95,0.5)', backdropFilter: 'blur(12px)', background: 'rgba(10,15,30,0.8)' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={22} color="#10B981" />
          <span className="text-white font-semibold text-lg tracking-wide">Ventyr</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: '#94a3b8' }}>
          <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-white transition-colors">Solution</a>
          <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </nav>
        <a
          href={WAITLIST_HREF}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
          style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(16,185,129,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(16,185,129,0.15)')}
        >
          Join Waitlist
        </a>
      </div>
    </motion.header>
  )
}
