import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useScroll } from '../hooks/useScroll.js'
import { useTheme } from '../hooks/useTheme.js'
import { useTranslation } from '../hooks/useTranslation.js'

const navigationItems = [
  { href: '#home', translationKey: 'nav.home' },
  { href: '#projetos', translationKey: 'nav.projects' },
  { href: '#tecnologias', translationKey: 'nav.technologies' },
  { href: '#sobre', translationKey: 'nav.about' },
  { href: '#trajetoria', translationKey: 'nav.experience' },
  { href: '#contato', translationKey: 'nav.contact' },
]

const languageOptions = [
  { code: 'pt', label: 'PT', translationKey: 'language.pt' },
  { code: 'en', label: 'EN', translationKey: 'language.en' },
  { code: 'fr', label: 'FR', translationKey: 'language.fr' },
]

const sectionIds = navigationItems.map(({ href }) => href.slice(1))

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, changeLanguage, t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { direction, scrollY } = useScroll()
  const activeSection = useActiveSection(sectionIds)
  const isNavbarVisible = isMenuOpen || scrollY <= 100 || direction === 'up'

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top${scrollY > 50 ? ' scrolled' : ''}`}
      id="navbar"
      style={{ transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label={t('header.menu.aria')}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center${isMenuOpen ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navigationItems.map(({ href, translationKey }) => (
              <li className="nav-item" key={href}>
                <a
                  className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                  href={href}
                  aria-current={activeSection === href.slice(1) ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {t(translationKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="header-controls">
          <button
            className="theme-toggle"
            type="button"
            aria-label={t('hero.themeToggle.aria')}
            onClick={toggleTheme}
          >
            <i
              className={`fas ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}
              aria-hidden="true"
            />
          </button>

          <div
            className="language-selector"
            role="group"
            aria-label={t('header.languageSelector.aria')}
          >
            {languageOptions.map(({ code, label, translationKey }) => {
              const isActive = language === code

              return (
                <button
                  className={`lang-btn${isActive ? ' active' : ''}`}
                  type="button"
                  aria-label={t(translationKey)}
                  aria-pressed={isActive}
                  onClick={() => changeLanguage(code)}
                  key={code}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
