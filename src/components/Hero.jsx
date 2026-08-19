import resumeUrl from '../../CurriculoNatanDaLuz.pdf'
import heroImage from '../../img/fotoportfolio.jpg'
import { useTranslation } from '../hooks/useTranslation.js'
import { useTypewriter } from '../hooks/useTypewriter.js'

function Hero() {
  const { language, t } = useTranslation()
  const title = t('hero.title')
  const { displayedText, isTyping } = useTypewriter(title, language)

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-profile">
            <img
              src={heroImage}
              alt="Natan Da Luz"
              className="hero-image"
            />
          </div>

          <h1 className="hero-title" aria-label={title}>
            <span className="hero-title-text">{displayedText}</span>
            {isTyping && <span className="typewriter-cursor" aria-hidden="true" />}
          </h1>
          <p className="hero-subtitle">{t('hero.role')}</p>
          <p className="hero-techline">{t('hero.stack')}</p>

          <div className="hero-buttons">
            <a href="#projetos" className="btn-cta-primary">
              <i className="fas fa-folder-open me-2" aria-hidden="true" />
              {t('hero.cta.projects')}
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary cv-download-btn"
              download
            >
              <i className="fas fa-download me-2" aria-hidden="true" />
              <span>{t('hero.cta.cv')}</span>
            </a>
          </div>

          <nav className="hero-social-links" aria-label={t('hero.social.aria')}>
            <a
              href="https://github.com/NatanLuz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('hero.social.github.aria')}
            >
              <i className="fab fa-github" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/natandaluz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('hero.social.linkedin.aria')}
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Hero
