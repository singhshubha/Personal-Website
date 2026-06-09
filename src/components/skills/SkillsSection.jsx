import { useRef, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useTexture, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../../data/content'

// ─── Lat/lng → 3-D point on sphere surface ───────────────────────────────────
const GLOBE_R = 2.5

function toVec3(lat, lng, r = GLOBE_R + 0.12) {
  const phi   = (90 - lat)  * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return [
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  ]
}

// ─── Pin definitions (name must match content.js exactly) ────────────────────
const PINS = [
  { name: 'Python',        lat:  52.4, lng:   4.9, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'           },
  { name: 'JavaScript',    lat:  37.8, lng:-122.4,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'  },
  { name: 'SQL',           lat:   1.3, lng: 103.8,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'            },
  { name: 'Node.js',       lat:  53.3, lng:  -6.3,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'          },
  { name: 'Express',       lat:  51.5, lng:  -0.1,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',    dark: true },
  { name: 'Flask',         lat:  48.2, lng:  16.4,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',        dark: true },
  { name: 'HTML/CSS',      lat:  47.4, lng:   8.5,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'            },
  { name: 'WebSocket',     lat:  35.7, lng: 139.7,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',  dark: true },
  { name: 'Bootstrap',     lat:  40.7, lng: -74.0,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'   },
  { name: 'XGBoost',       lat:  47.6, lng:-122.3,  logo: null },
  { name: 'Random Forest', lat: -33.9, lng:  18.4,  logo: null },
  { name: 'Scikit-learn',  lat:  48.9, lng:   2.3,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'Pandas',        lat:  19.1, lng:  72.9,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'          },
  { name: 'NumPy',         lat: -33.9, lng: 151.2,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg'            },
  { name: 'K-Means',       lat:  55.8, lng:  37.6,  logo: null },
  { name: 'SHAP',          lat:  52.5, lng:  13.4,  logo: null },
  { name: 'AngularJS',     lat:  37.6, lng: 127.0,  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg'    },
]

// Enrich pins with proficiency / level / color from content.js
const ALL_PINS = PINS.map(pin => {
  const s = skills.find(sk => sk.name === pin.name)
  return {
    ...pin,
    category:   s?.category   ?? 'dev',
    level:      s?.level      ?? 'Intermediate',
    proficiency:s?.proficiency ?? 70,
    color:      s?.color      ?? '#3b82f6',
  }
})

// ─── Globe scene (runs inside Canvas) ────────────────────────────────────────
function GlobeScene({ selected, onSelect, filter }) {
  const globeRef = useRef()
  const earthTex = useTexture(
    'https://raw.githubusercontent.com/mrdoob/three.js/r167/examples/textures/planets/earth_atmos_2048.jpg'
  )

  const pins = filter === 'all' ? ALL_PINS : ALL_PINS.filter(p => p.category === filter)

  return (
    <>
      <ambientLight intensity={1.0} />
      <directionalLight position={[8, 4, 6]}  intensity={1.8} />
      <pointLight      position={[-6, -4, -6]} intensity={0.5} color="#3b82f6" />

      <Stars radius={60} depth={30} count={2500} factor={3} saturation={0} fade speed={0.3} />

      {/* Earth sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[GLOBE_R, 64, 64]} />
        <meshStandardMaterial map={earthTex} roughness={0.75} metalness={0.1} />
      </mesh>

      {/* Thin atmosphere glow */}
      <mesh>
        <sphereGeometry args={[GLOBE_R + 0.08, 32, 32]} />
        <meshStandardMaterial
          color="#93c5fd"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Skill pins */}
      {pins.map(pin => (
        <Html
          key={pin.name}
          position={toVec3(pin.lat, pin.lng)}
          occlude={[globeRef]}
          center
          distanceFactor={6}
          zIndexRange={[1, 20]}
        >
          <button
            className={`globe-pin${selected?.name === pin.name ? ' active' : ''}`}
            style={{ '--c': pin.color }}
            onClick={() => onSelect(pin)}
          >
            {pin.logo ? (
              <img
                src={pin.logo}
                alt={pin.name}
                className={`globe-pin-icon${pin.dark ? ' dark' : ''}`}
              />
            ) : (
              <span className="globe-pin-badge">{pin.name.slice(0, 2).toUpperCase()}</span>
            )}
            <span className="globe-pin-name">{pin.name}</span>
          </button>
        </Html>
      ))}

      <OrbitControls
        enableZoom
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        minDistance={3.8}
        maxDistance={9}
        zoomSpeed={0.5}
      />
    </>
  )
}

// ─── Skill detail panel ───────────────────────────────────────────────────────
function SkillDetail({ skill }) {
  if (!skill) {
    return (
      <div className="skills-selected-card" style={{ opacity: 0.5 }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textAlign: 'center', padding: '12px 0' }}>
          Click any pin on the globe to explore a skill
        </p>
      </div>
    )
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.name}
        className="skills-selected-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="skills-selected-name">{skill.name}</div>
        <span className={`skills-selected-cat ${skill.category}`}>
          {skill.category === 'dev' ? 'Programming & Dev' : 'Data Science & ML'}
        </span>
        <div className="skills-bar-wrap">
          <div className="skills-bar-label">
            <span>{skill.level}</span>
            <span>{skill.proficiency}%</span>
          </div>
          <div className="skills-bar-track">
            <motion.div
              className="skills-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function SkillsSection() {
  const [filter,   setFilter]   = useState('all')
  const [selected, setSelected] = useState(null)

  const handleSelect = (pin) => {
    setSelected(prev => prev?.name === pin.name ? null : pin)
  }

  return (
    <section id="skills" className="section section-bg-alt">
      <div className="container">
        <div className="skills-layout">

          {/* ── Left panel ── */}
          <div className="skills-panel">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Interactive Globe
            </motion.p>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              My <span>Skills</span>
            </motion.h2>
            <motion.div
              className="section-divider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            />

            <motion.p
              style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '1.5rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Each skill is pinned to where it originated or where I've used it most.
              Drag the globe to explore, zoom to get closer, and click any pin to see proficiency.
            </motion.p>

            <motion.div
              className="skills-filter"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {[
                { id: 'all', label: 'All Skills' },
                { id: 'dev', label: 'Programming' },
                { id: 'ml',  label: 'Data Science' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  className={`skills-filter-btn${filter === id ? ' active' : ''}`}
                  onClick={() => { setFilter(id); setSelected(null) }}
                >
                  {label}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SkillDetail skill={selected} />
            </motion.div>
          </div>

          {/* ── Right: Globe canvas ── */}
          <motion.div
            className="skills-canvas-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Canvas
              camera={{ position: [0, 0, 7], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
              style={{ background: 'transparent' }}
            >
              <Suspense fallback={null}>
                <GlobeScene selected={selected} onSelect={handleSelect} filter={filter} />
              </Suspense>
            </Canvas>
            <div className="skills-canvas-hint">
              Drag to rotate · Scroll to zoom · Click a pin to explore
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
