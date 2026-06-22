import { Suspense, lazy } from 'react'
import Navbar          from './components/Navbar'
import ScrollProgress  from './components/ScrollProgress'
import HeroSection     from './components/hero/HeroSection'
import WaveBackground  from './components/WaveBackground'

// Lazy-load below-fold sections for faster initial load
const AboutSection      = lazy(() => import('./components/about/AboutSection'))
const SkillsSection     = lazy(() => import('./components/skills/SkillsSection'))
const ProjectsSection   = lazy(() => import('./components/projects/ProjectsSection'))
const ExperienceSection = lazy(() => import('./components/experience/ExperienceSection'))
const EducationSection    = lazy(() => import('./components/education/EducationSection'))
const GraduationSection  = lazy(() => import('./components/graduation/GraduationSection'))
const ContactSection      = lazy(() => import('./components/contact/ContactSection'))

function SectionLoader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      color: 'var(--text-muted)',
      fontSize: '0.85rem',
    }}>
      Loading…
    </div>
  )
}

function Footer() {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Graduation', 'Contact']
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-nav">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="footer-copy">
        © {new Date().getFullYear()} Shubha Swarnim Singh. All rights reserved.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <WaveBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <EducationSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GraduationSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
