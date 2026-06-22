import { useEffect, useRef } from 'react'

// Muted warm tones — same hue family as the cream bg (#e9e4d9),
// just slightly darker. They blend in, not stand out.
const WAVES = [
  { amp: 48, freq: 0.0018, speed: 0.028, phase: 0.0,  color: 'rgba(172,158,136,0.28)', w: 1.1 },
  { amp: 64, freq: 0.0013, speed: 0.022, phase: 2.0,  color: 'rgba(185,170,148,0.20)', w: 1.3 },
  { amp: 36, freq: 0.0026, speed: 0.038, phase: 3.5,  color: 'rgba(160,146,124,0.25)', w: 0.9 },
  { amp: 58, freq: 0.0019, speed: 0.030, phase: 0.9,  color: 'rgba(178,163,140,0.22)', w: 1.2 },
  { amp: 42, freq: 0.0031, speed: 0.044, phase: 4.6,  color: 'rgba(154,140,118,0.26)', w: 0.8 },
  { amp: 70, freq: 0.0011, speed: 0.018, phase: 1.4,  color: 'rgba(188,173,150,0.18)', w: 1.4 },
  { amp: 32, freq: 0.0038, speed: 0.052, phase: 5.1,  color: 'rgba(164,150,128,0.22)', w: 0.8 },
  { amp: 52, freq: 0.0022, speed: 0.034, phase: 2.8,  color: 'rgba(168,154,132,0.20)', w: 1.0 },
]

const REPEL_R = 200
const REPEL_S = 90

const toFade = (rgba) => rgba.replace(/[\d.]+\)$/, '0)')

export default function WaveBackground() {
  const canvasRef = useRef()
  const cursorRef = useRef({ x: -9999, y: -9999 })
  const smoothRef = useRef({ x: -9999, y: -9999 })
  const gradsRef  = useRef([])
  const rafRef    = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const buildGrads = () => {
      const W = canvas.width
      gradsRef.current = WAVES.map(wv => {
        const g = ctx.createLinearGradient(0, 0, W, 0)
        g.addColorStop(0,    toFade(wv.color))
        g.addColorStop(0.10, wv.color)
        g.addColorStop(0.90, wv.color)
        g.addColorStop(1,    toFade(wv.color))
        return g
      })
    }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      buildGrads()
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const onMouse = (e) => { cursorRef.current = { x: e.clientX, y: e.clientY } }
    const onTouch = (e) => {
      const t = e.touches[0]
      if (t) cursorRef.current = { x: t.clientX, y: t.clientY }
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })

    let start = null

    const frame = (ts) => {
      if (!start) start = ts
      const t = (ts - start) / 1000

      const W = canvas.width
      const H = canvas.height
      const N = WAVES.length
      const { current: grads } = gradsRef

      const sm = smoothRef.current
      const cr = cursorRef.current
      sm.x += (cr.x - sm.x) * 0.06
      sm.y += (cr.y - sm.y) * 0.06

      ctx.clearRect(0, 0, W, H)

      WAVES.forEach((wv, i) => {
        const drift = Math.sin(t * 0.08 + i * 0.72) * 10
        const baseY = H * (i + 1) / (N + 1) + drift
        const g     = grads[i]
        if (!g) return

        ctx.beginPath()
        for (let x = 0; x <= W; x += 4) {
          const rawY = baseY
            + Math.sin(x * wv.freq + wv.phase + t * wv.speed) * wv.amp
            + Math.sin(x * wv.freq * 2.73 + wv.phase * 1.5 + t * wv.speed * 1.6) * (wv.amp * 0.28)

          const dx   = x - sm.x
          const dy   = rawY - sm.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          let y = rawY
          if (dist < REPEL_R && dist > 0) {
            const f = (1 - dist / REPEL_R) ** 2
            y = rawY + (dy / dist) * f * REPEL_S
          }

          if (x === 0) ctx.moveTo(x, y)
          else          ctx.lineTo(x, y)
        }

        ctx.save()
        ctx.strokeStyle = g
        ctx.lineWidth   = wv.w
        ctx.lineJoin    = 'round'
        ctx.stroke()
        ctx.restore()
      })

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        0,
        pointerEvents: 'none',
        width:         '100%',
        height:        '100%',
      }}
    />
  )
}
