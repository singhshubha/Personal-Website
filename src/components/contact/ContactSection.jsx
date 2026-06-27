import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../../data/content'

// ─── Contact links data ────────────────────────────────────────────────────────
const CONTACT_LINKS = [
  {
    label:  'Email',
    value:  personal.email,
    href:   `mailto:${personal.email}`,
    icon:   (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label:  'LinkedIn',
    value:  'shubha-swarnim-s',
    href:   personal.linkedin,
    icon:   (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label:  'GitHub',
    value:  'singhshubha',
    href:   personal.github,
    icon:   (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
]

// ─── Contact form ──────────────────────────────────────────────────────────────
function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(formRef.current)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✉️</div>
        <p style={{ fontSize: '1.1rem', marginBottom: 8 }}>Message sent!</p>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Thanks for reaching out. I'll get back to you soon.
        </p>
        <button
          className="btn btn-outline"
          style={{ marginTop: 20 }}
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="d9f1025d-f4f0-4276-ae93-912744d0bf20" />
      <input type="hidden" name="subject" value="Portfolio Contact Form - New Message" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="What's on your mind?"
          required
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: 12 }}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 64 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <div className="section-divider" style={{ margin: '1rem auto' }} />
        </motion.div>

        <div className="contact-layout">
          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="contact-info-title">Let's build something great</h3>
            <p className="contact-info-text">
              I'm always open to new opportunities, collaborations, or just a good conversation about
              technology, data, or entrepreneurship. Reach out!
            </p>

            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">{link.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
                      {link.label}
                    </div>
                    <div style={{ fontWeight: 500 }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download Resume ↗
            </a>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-form-title">Send a message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
