import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const photos = [
  '/assets/graduation/55293911227_213bdb690d_o.jpg',
  '/assets/graduation/55294796261_be01153b95_o (1).jpg',
  '/assets/graduation/55294856556_4de1d59964_o.jpg',
  '/assets/graduation/55295038519_cb0f1bfbae_o.jpg',
  '/assets/graduation/55295142524_5aabcc14a5_o.jpg',
  '/assets/graduation/55295182840_ce0d28f6f2_o.jpg',
  '/assets/graduation/55295208565_8a12bf49e4_o.jpg',
  '/assets/graduation/55295230565_c2cdd5ba77_o.jpg',
]

export default function GraduationSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length)
    }, 5000)
    return () => clearInterval(id)
  }, [paused])

  const goTo = (i) => {
    setCurrent(i)
    setPaused(true)
    setTimeout(() => setPaused(false), 8000)
  }

  const prev = () => goTo((current - 1 + photos.length) % photos.length)
  const next = () => goTo((current + 1) % photos.length)

  return (
    <section id="graduation" className="section section-bg-alt">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: 0 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Celebrating the Milestone</p>
          <h2 className="section-title">Graduation</h2>
          <div className="section-divider" style={{ margin: '1rem auto 0' }} />
        </motion.div>

        <motion.div
          className="grad-slideshow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grad-frame">
            {photos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Graduation photo ${i + 1}`}
                className={`grad-img${i === current ? ' active' : ''}`}
              />
            ))}

            <button className="grad-arrow grad-arrow-prev" onClick={prev} aria-label="Previous photo">
              ‹
            </button>
            <button className="grad-arrow grad-arrow-next" onClick={next} aria-label="Next photo">
              ›
            </button>
          </div>

          <div className="grad-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`grad-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
