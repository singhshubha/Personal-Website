import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { skillGroups } from '../../data/content'

// Fresh random duration each page load — range 28–42s, narrow spread so
// rows feel related but never fully lock in sync with each other.
const randDur = () => +(Math.random() * 14 + 28).toFixed(1)
const DIRECTIONS = ['left', 'right', 'left', 'right']
const DURATIONS  = [randDur(), randDur(), randDur(), randDur()]

function MarqueeRow({ items, direction, duration, label }) {
  const minRep = Math.ceil(14 / items.length)
  const track  = Array.from({ length: minRep * 2 }, () => items).flat()

  return (
    <div className="sk-row-wrap">
      <span className="sk-row-label" aria-hidden="true">{label}</span>
      <div className="sk-marquee-outer">
        <div
          className={`sk-marquee-track sk-marquee-${direction}`}
          style={{ '--dur': `${duration}s` }}
        >
          {track.map((skill, i) => (
            <span key={i} className="sk-marquee-item">
              <span className="sk-marquee-name">{skill.name}</span>
              <span className="sk-marquee-sep" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const sectionRef = useRef()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgScale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.78, 1],
    [1.14, 1.0, 1.0, 1.07]
  )

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section section-bg-alt"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div className="sk-bg" style={{ scale: bgScale }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <motion.p className="section-label"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45 }}>
          Technical Proficiency
        </motion.p>
        <motion.h2 className="section-title"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }}>
          My <span>Skills</span>
        </motion.h2>
        <motion.div className="section-divider"
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.14 }} />

        <div className="sk-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              className="sk-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.48, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <MarqueeRow
                items={group.items}
                direction={DIRECTIONS[gi]}
                duration={DURATIONS[gi]}
                label={group.label}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
