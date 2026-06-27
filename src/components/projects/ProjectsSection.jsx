import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../data/content'

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className={`project-status-badge ${project.status}`}>
          {project.status === 'complete' ? '✓ Complete' : '⚡ In Progress'}
        </span>
      </div>

      <div className="project-body">
        <div className="project-highlight">{project.highlight}</div>
        <h3 className="project-title">{project.title}</h3>

        <p className="project-desc">
          {expanded ? project.description : project.description.slice(0, 100) + '…'}
        </p>

        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--blue-light)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '0 0 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {expanded ? '▲ Show less' : '▼ Read more'}
        </button>

        <div className="project-tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <GitHubIcon />
              GitHub
            </a>
          ) : (
            <span className="project-link-btn" style={{ opacity: 0.4, cursor: 'default' }}>
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-divider" style={{ margin: '1rem auto' }} />
          <p className="section-desc" style={{ margin: '0 auto 0' }}>
            A selection of projects that showcase my engineering range — from real-time systems to machine learning tools.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 48 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/singhshubha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GitHubIcon />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
