import { useState, useEffect } from 'react'
import { personal } from '../data/content'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',   href: '#education'   },
  { label: 'Graduation',  href: '#graduation'  },
  { label: 'Contact',     href: '#contact'     },
]

const SunIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1"     x2="12" y2="3"     />
    <line x1="12" y1="21"    x2="12" y2="23"    />
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1"  y1="12"    x2="3"  y2="12"    />
    <line x1="21" y1="12"    x2="23" y2="12"    />
    <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"  />
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark,     setDark]     = useState(
    () => {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    }
  )

  // Apply theme to <html> whenever dark changes
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : ''
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <span className="nav-logo">{personal.shortName}</span>

          <ul className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href.slice(1) ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              className="nav-theme-toggle"
              onClick={() => setDark(d => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume ↗
            </a>
          </div>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
          >
            {label}
          </a>
        ))}
        <a
          href={personal.resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--blue-light)', marginTop: 8 }}
          onClick={() => setMenuOpen(false)}
        >
          Resume ↗
        </a>
      </div>
    </>
  )
}
