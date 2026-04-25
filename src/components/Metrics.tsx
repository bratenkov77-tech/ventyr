import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Heart, Flame, Moon, Activity, Clock, Gauge } from 'lucide-react'

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReducedMotion = useReducedMotion()

  const match = value.match(/^([\d.]+)(%?)$/)
  const isNumeric = !!match
  const suffix = match?.[2] ?? ''
  const decimals = match?.[1]?.includes('.') ? match[1].split('.')[1].length : 0
  const end = match ? parseFloat(match[1]) : 0

  // Start at '0' / '0%' for numeric values so there's no jump when counter begins
  const [display, setDisplay] = useState<string>(
    !isNumeric || prefersReducedMotion ? value : '0' + suffix
  )

  useEffect(() => {
    if (!isNumeric || prefersReducedMotion) {
      setDisplay(value)
      return
    }
    if (!inView) return

    const duration = 1200
    const startTime = performance.now()
    let frame: number

    function tick(now: number) {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay((end * eased).toFixed(decimals) + suffix)
      if (t < 1) frame = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, prefersReducedMotion, value])

  return <span ref={ref}>{display}</span>
}

function PulsingDot() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full"
      style={{ background: '#F59E0B' }}
      animate={prefersReducedMotion ? {} : { scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const metrics = [
  {
    icon: Heart,
    name: 'Recovery Score',
    formula: '0.5 × HRV + 0.25 × RHR + 0.25 × Sleep',
    desc: 'Daily readiness for training based on your personal 30-day baseline, not population averages.',
    value: '84%',
    valueColor: '#10B981',
    color: '#10B981',
  },
  {
    icon: Flame,
    name: 'Strain Score',
    formula: 'Cardio Strain + Strength Strain',
    desc: 'Split into cardiovascular and neuromuscular strain — the only platform that separates them.',
    value: '14.2',
    valueColor: '#f97316',
    color: '#f97316',
  },
  {
    icon: Moon,
    name: 'Sleep Performance',
    formula: 'actual_sleep / need_sleep × quality_factor',
    desc: 'Deep sleep, REM cycles, SpO2, skin temperature, and wake events — all weighted.',
    value: '91%',
    valueColor: '#8b5cf6',
    color: '#8b5cf6',
  },
  {
    icon: Activity,
    name: 'Blood Pressure',
    formula: 'Personal ML regression · HRV + RHR + sleep',
    desc: 'Estimated SBP/DBP from wearable signals, calibrated with your tonometer over 14 days.',
    value: 'Tracking',
    valueColor: '#f1f5f9',
    color: '#ef4444',
  },
  {
    icon: Clock,
    name: 'Biological Age',
    formula: 'PhenoAge methodology',
    desc: 'Longitudinal tracking of biological aging pace based on VO2max trend and recovery metrics.',
    value: '34.2',
    valueColor: '#06b6d4',
    color: '#06b6d4',
  },
  {
    icon: Gauge,
    name: 'Stress Level',
    formula: '0–3 scale · Real-time HRV analysis',
    desc: 'Continuous stress monitoring throughout the day. Distinguishes physical strain from psychological tension, with guided breathwork when stress rises.',
    value: '1.8',
    valueColor: '#f59e0b',
    color: '#f59e0b',
  },
]

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: '#10B981' }}>
            Key Metrics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Six dimensions of athlete health
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Each metric is computed from transparent formulas — not black-box algorithms. You can see exactly how your scores are calculated.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 relative"
              style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(30,58,95,0.4)' }}
            >
              {m.name === 'Stress Level' && <PulsingDot />}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${m.color}20` }}
                >
                  <m.icon size={18} color={m.color} />
                </div>
                <span className="text-2xl font-bold" style={{ color: m.valueColor }}>
                  <CountUp value={m.value} />
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{m.name}</h3>
              <p className="text-xs mb-3 font-mono" style={{ color: '#475569' }}>{m.formula}</p>
              <p className="text-sm" style={{ color: '#94a3b8', lineHeight: '1.5' }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
