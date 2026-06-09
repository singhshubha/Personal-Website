import { motion } from 'framer-motion'
import { experience } from '../../data/content'

function TimelineCard({ item, index }) {
  const isEven = index % 2 === 0
  const delay  = index * 0.1

  return (
    <div className="timeline-item">
      {/* Left placeholder / content */}
      <motion.div
        className={`timeline-content ${isEven ? 'timeline-content-right' : 'timeline-content-left'}`}
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay }}
        style={isEven ? { visibility: 'visible' } : { visibility: 'hidden' }}
      >
        {isEven && <TimelineCardBody item={item} />}
      </motion.div>

      {/* Center dot + period */}
      <motion.div
        className="timeline-dot-wrap"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: delay + 0.05 }}
      >
        <div className="timeline-dot">{item.icon}</div>
        <div className="timeline-period">{item.period}</div>
      </motion.div>

      {/* Right placeholder / content */}
      <motion.div
        className={`timeline-content ${isEven ? 'timeline-content-left' : 'timeline-content-right'}`}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay }}
        style={!isEven ? { visibility: 'visible' } : { visibility: 'hidden' }}
      >
        {!isEven && <TimelineCardBody item={item} />}
      </motion.div>
    </div>
  )
}

function TimelineCardBody({ item }) {
  return (
    <>
      <span className={`timeline-type-badge ${item.type}`}>
        {item.type === 'professional' ? 'Professional' : 'Leadership'}
      </span>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-org">{item.organization}</div>
      <p className="timeline-desc">{item.description}</p>
    </>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section section-bg-alt">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Experience & <span>Leadership</span></h2>
          <div className="section-divider" style={{ margin: '1rem auto' }} />
          <p className="section-desc">
            From leading fraternities to building software at Micron — a track record of initiative and impact.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineCard key={item.role + item.organization} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
