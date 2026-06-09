import { motion } from 'framer-motion'
import { education } from '../../data/content'

export default function EducationSection() {
  return (
    <section id="education" className="section section-bg-alt2">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 0 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Academic Journey</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" style={{ margin: '1rem auto 0' }} />
        </motion.div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="edu-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="edu-icon">🎓</div>
              <div className="edu-period">{edu.period}</div>
              <h3 className="edu-school">{edu.school}</h3>
              <p className="edu-degree">{edu.degree}</p>
              {edu.note && <span className="edu-note">{edu.note}</span>}
              <p className="edu-location">📍 {edu.location}</p>
              {edu.coursework.length > 0 && (
                <div className="edu-coursework">
                  {edu.coursework.map((c) => (
                    <span className="edu-course" key={c}>{c}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
