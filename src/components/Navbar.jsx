import { useState, useEffect } from 'react'
import { personal } from '../data/content'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // Active section detection
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

          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume ↗
          </a>

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
