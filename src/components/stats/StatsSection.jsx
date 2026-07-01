import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  {
    prefix: '$', value: 700, suffix: 'M+', label: 'CAPEX Decisions Supported', decimals: 0,
    org: 'Albertsons Companies',
    role: 'Data Science & Analytics Intern',
    detail: 'Deployed ML models to predict store profitability, directly informing $700M+ capital allocation decisions.',
    period: 'Jun – Aug 2025',
  },
  {
    prefix: '', value: 2200, suffix: '+', label: 'Store Locations Analyzed', decimals: 0,
    org: 'Albertsons Companies',
    role: 'Data Science & Analytics Intern',
    detail: 'Built Python, Scikit-learn & XGBoost infrastructure to analyze profitability signals across every Albertsons location.',
    period: 'Jun – Aug 2025',
  },
  {
    prefix: '', value: 200, suffix: '+', label: 'Students Led', decimals: 0,
    org: 'College of Idaho Residence Life',
    role: 'Student Hall Director & RA',
    detail: 'Oversaw residential operations for 200+ students through mentorship, crisis response, and community programming.',
    period: 'Aug 2023 – May 2026',
  },
  {
    prefix: '$', value: 100, suffix: 'K+', label: 'Budget Managed', decimals: 0,
    org: 'Associated Students of C of I',
    role: 'ASCI Treasurer',
    detail: 'Managed $100K+ student government budget, overseeing allocations and collaborating with campus leadership.',
    period: 'Aug 2024 – May 2025',
  },
  {
    prefix: '', value: 87.5, suffix: '%', label: 'Latency Reduced', decimals: 1,
    org: 'Albertsons Companies',
    role: 'Data Science & Analytics Intern',
    detail: 'Cut analysis latency by 87.5% through query rewrites and scalable data pipeline optimization.',
    period: 'Jun – Aug 2025',
  },
  {
    prefix: '', value: 1, suffix: 'M+', label: 'Database Records Managed', decimals: 0,
    org: 'The College of Idaho',
    role: 'IT Intern',
    detail: 'Maintained 1M+ record relational database and deployed MFA for 1,000+ campus users to strengthen security.',
    period: 'Dec 2022 – May 2023',
  },
]

function useCountUp(target, decimals, started) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const fps = 60
    const totalSteps = Math.round((duration / 1000) * fps)
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = Math.min(step / totalSteps, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(target * eased)
      if (step >= totalSteps) clearInterval(timer)
    }, 1000 / fps)

    return () => clearInterval(timer)
  }, [target, started])

  if (decimals > 0) return Number(count).toFixed(decimals)
  return Math.floor(count)
}

function StatCard({ prefix, value, suffix, label, decimals, org, role, detail, period, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCountUp(value, decimals, inView)

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      tabIndex={0}
      aria-label={`${prefix}${value}${suffix} ${label} — ${org}`}
    >
      <div className="stat-card-inner">

        {/* ── Front ── */}
        <div className="stat-card-front" aria-hidden="false">
          <div className="stat-number">
            {prefix}{count}{suffix}
          </div>
          <div className="stat-label">{label}</div>
        </div>

        {/* ── Back ── */}
        <div className="stat-card-back" aria-hidden="true">
          <p className="stat-back-org">{org}</p>
          <p className="stat-back-role">{role}</p>
          <div className="stat-back-divider" />
          <p className="stat-back-detail">{detail}</p>
          <p className="stat-back-period">{period}</p>
        </div>

      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
