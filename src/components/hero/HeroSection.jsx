import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../../data/content'

// ─── Typewriter effect ────────────────────────────────────────────────────────
function TypeWriter({ titles }) {
  const [idx, setIdx]         = useState(0)
  const [text, setText]       = useState('')
  const [deleting, setDel]    = useState(false)

  useEffect(() => {
    const full = titles[idx]
    if (!deleting && text.length < full.length) {
      const t = setTimeout(() => setText(full.slice(0, text.length + 1)), 75)
      return () => clearTimeout(t)
    }
    if (!deleting && text.length === full.length) {
      const t = setTimeout(() => setDel(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 40)
      return () => clearTimeout(t)
    }
    if (deleting && text.length === 0) {
      setDel(false)
      setIdx((idx + 1) % titles.length)
    }
  }, [text, deleting, idx, titles])

  return (
    <span>
      <span className="hero-typewriter">{text}</span>
      <span className="hero-cursor" />
    </span>
  )
}

const PHOTOS = [
  { src: '/assets/main-pic-1.png', pos: '58% 50%', size: '180%' },
  { src: '/assets/main-pic-2.png', pos: '47% 50%', size: '175%' },
  { src: '/assets/main-pic-3.png', pos: '55% 50%', size: '170%' },
  { src: '/assets/main-pic-4.png', pos: '42% 50%', size: '182%' },
]
const INTERVAL = 2800

// ─── Hero section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [active, setActive] = useState(0)

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % PHOTOS.length), INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-gradient" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-avatar-wrap">
            {PHOTOS.map(({ src, pos, size }, i) => (
              <div
                key={src}
                role="img"
                aria-label="Shubha Singh"
                className={`hero-avatar${i === active ? ' active' : ''}`}
                style={{ backgroundImage: `url(${src})`, backgroundPosition: pos, backgroundSize: size }}
              />
            ))}
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 500 }}>
            Hello, I'm
          </p>
          <h1 className="hero-name gradient-text">
            <span className="hero-name-line">Shubha Swarnim </span>
            <span className="hero-name-line">Singh</span>
          </h1>
        </motion.div>

        <motion.div
          className="hero-typewriter-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <TypeWriter titles={personal.titles} />
        </motion.div>

        

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume ↗
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hero-social-btn"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  )
}
