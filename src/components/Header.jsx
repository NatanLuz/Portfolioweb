import { useState } from 'react'

const navigationItems = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Alternar navegação"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center${isMenuOpen ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navigationItems.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a className="nav-link" href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="language-selector" aria-label="Selecionar idioma">
          <button className="lang-btn active" type="button" aria-label="Português">
            PT
          </button>
          <button className="lang-btn" type="button" aria-label="English">
            EN
          </button>
          <button className="lang-btn" type="button" aria-label="Français">
            FR
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
