import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation.js'

const navigationItems = [
  { href: '#home', translationKey: 'nav.home' },
  { href: '#sobre', translationKey: 'nav.about' },
  { href: '#tecnologias', translationKey: 'nav.technologies' },
  { href: '#projetos', translationKey: 'nav.projects' },
  { href: '#contato', translationKey: 'nav.contact' },
]

const languageOptions = [
  { code: 'pt', label: 'PT', translationKey: 'language.pt' },
  { code: 'en', label: 'EN', translationKey: 'language.en' },
  { code: 'fr', label: 'FR', translationKey: 'language.fr' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, changeLanguage, t } = useTranslation()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
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
                <a className="nav-link" href={href} onClick={closeMenu}>
                  {t(translationKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

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
    </nav>
  )
}

export default Header
