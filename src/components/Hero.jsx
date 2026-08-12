import resumeUrl from '../../CurriculoNatanDaLuz.pdf'
import heroImage from '../../img/fotoportfolio.jpg'

function Hero() {
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

          <h1 className="hero-title">Natan Da Luz</h1>
          <p className="hero-subtitle">Desenvolvedor Backend</p>

          <div className="hero-buttons">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener"
              className="btn-cta-primary cv-download-btn"
              download
            >
              <i className="fas fa-download me-2" aria-hidden="true" />
              <span>Download Currículo</span>
            </a>

            <a href="#projetos" className="btn-cta-secondary">
              <i className="fas fa-folder-open me-2" aria-hidden="true" />
              Ver Projetos
            </a>

            <button
              className="theme-toggle"
              type="button"
              aria-label="Alternar tema claro e escuro"
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
