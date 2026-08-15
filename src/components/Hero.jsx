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

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
