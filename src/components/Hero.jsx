import resumeUrl from '../../CurriculoNatanDaLuz.pdf'
import heroImage from '../../img/fotoportfolio.jpg'
import { useTranslation } from '../hooks/useTranslation.js'

function Hero() {
  const { t } = useTranslation()

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

          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>

          <div className="hero-buttons">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener"
              className="btn-cta-primary cv-download-btn"
              download
            >
              <i className="fas fa-download me-2" aria-hidden="true" />
              <span>{t('hero.cta.cv')}</span>
            </a>

            <a href="#projetos" className="btn-cta-secondary">
              <i className="fas fa-folder-open me-2" aria-hidden="true" />
              {t('hero.cta.projects')}
            </a>

            <button
              className="theme-toggle"
              type="button"
              aria-label={t('hero.themeToggle.aria')}
            >
              <i className="fas fa-moon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
