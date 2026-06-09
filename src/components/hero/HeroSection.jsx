import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
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

// ─── Three.js neural network ──────────────────────────────────────────────────
const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 45 : 85
const MAX_DIST       = 4.2
const HALF_W         = 11
const HALF_H         = 7

function NeuralNet() {
  const pointsRef = useRef()
  const linesRef  = useRef()

  const { positions, velocities, lineBuffer } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * HALF_W * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * HALF_H * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
      velocities[i * 3]     = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.006
    }
    return {
      positions,
      velocities,
      lineBuffer: new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6),
    }
  }, [])

  useFrame(({ mouse, camera }) => {
    if (!pointsRef.current || !linesRef.current) return

    const pos = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3]     += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]
      if (Math.abs(pos[i * 3])     > HALF_W) velocities[i * 3]     *= -1
      if (Math.abs(pos[i * 3 + 1]) > HALF_H) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > 4)      velocities[i * 3 + 2] *= -1
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    let lineCount = 0
    const maxD2 = MAX_DIST * MAX_DIST
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = pos[i*3]   - pos[j*3]
        const dy = pos[i*3+1] - pos[j*3+1]
        const dz = pos[i*3+2] - pos[j*3+2]
        if (dx*dx + dy*dy + dz*dz < maxD2) {
          lineBuffer[lineCount*6]     = pos[i*3];   lineBuffer[lineCount*6+1] = pos[i*3+1]; lineBuffer[lineCount*6+2] = pos[i*3+2]
          lineBuffer[lineCount*6+3]   = pos[j*3];   lineBuffer[lineCount*6+4] = pos[j*3+1]; lineBuffer[lineCount*6+5] = pos[j*3+2]
          lineCount++
        }
      }
    }

    const lineGeo = linesRef.current.geometry
    lineGeo.setDrawRange(0, lineCount * 2)
    lineGeo.attributes.position.array.set(lineBuffer)
    lineGeo.attributes.position.needsUpdate = true

    // Smooth mouse parallax on camera
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.025
    camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.025
    camera.lookAt(0, 0, 0)
  })

  const linePositionArray = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6),
    []
  )

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.13}
          color="#60a5fa"
          transparent
          opacity={0.88}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT * PARTICLE_COUNT}
            array={linePositionArray}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.22} />
      </lineSegments>
    </>
  )
}

function NeuralNetCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 65 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <NeuralNet />
    </Canvas>
  )
}

// ─── Hero section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <NeuralNetCanvas />
      </div>
      <div className="hero-gradient" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-avatar-wrap">
            <img src="/assets/main-pic.png" alt="Shubha Singh" className="hero-avatar" />
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

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Exploring the intersection of Artificial Intelligence, Machine Learning, Software Engineering, and Data. From developing intelligent models to creating scalable applications, I enjoy transforming complex challenges into elegant solutions.
        </motion.p>

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
