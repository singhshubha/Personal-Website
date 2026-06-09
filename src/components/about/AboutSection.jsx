import { motion } from 'framer-motion'
import { personal } from '../../data/content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay },
})

const stats = [
  { num: '2+',  label: 'Years Experience' },
  { num: '4+',  label: 'Projects Built'   },
  { num: '7+',  label: 'Leadership Roles' },
]

const badges = ['CS & Business', 'Data Science', 'Full-Stack Dev', 'ML & AI', 'Student Leader']

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* ── Image column ── */}
          <motion.div className="about-image-wrap" {...fadeUp(0.1)}>
            <div className="about-image-glow" />
            <div className="about-image-frame">
              <img src="/assets/full-pp.JPG" alt="Shubha Swarnim Singh" />
            </div>
            <div className="about-stat-chips">
              {stats.map(({ num, label }) => (
                <div className="about-stat-chip" key={label}>
                  <div className="about-stat-num">{num}</div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Text column ── */}
          <div className="about-content">
            <motion.p className="section-label" {...fadeUp(0.15)}>Get to know more</motion.p>
            <motion.h2 className="section-title" {...fadeUp(0.2)}>
              About <span>Me</span>
            </motion.h2>
            <motion.div className="section-divider" {...fadeUp(0.25)} />

            <motion.p className="about-text" {...fadeUp(0.3)}>
              {personal.bio}
            </motion.p>

            <motion.div className="about-badges" {...fadeUp(0.35)}>
              {badges.map((b) => (
                <span className="about-badge" key={b}>{b}</span>
              ))}
            </motion.div>

            <motion.div
              style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}
              {...fadeUp(0.4)}
            >
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume ↗
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn Profile
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
