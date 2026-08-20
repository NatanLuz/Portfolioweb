import petSystemVideo from '../../img/Petsystem.mp4'
import { useTranslation } from '../hooks/useTranslation.js'

const balanceFeatures = Array.from(
  { length: 5 },
  (_, index) => `projects.balance.feature${index + 1}`,
)
const petSystemFeatures = Array.from(
  { length: 4 },
  (_, index) => `projects.petSystem.feature${index + 1}`,
)
const corteAzulFeatures = Array.from(
  { length: 4 },
  (_, index) => `projects.corteAzul.feature${index + 1}`,
)

function FeatureList({ translationKeys, t }) {
  return (
    <ul className="project-feature-list">
      {translationKeys.map((translationKey) => (
        <li key={translationKey}>{t(translationKey)}</li>
      ))}
    </ul>
  )
}

function TechnologiesList({ technologies }) {
  return (
    <div className="project-tech">
      {technologies.map((technology) => (
        <span className="tech-tag" key={technology}>
          {technology}
        </span>
      ))}
    </div>
  )
}

function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t('projects.title')}</h2>

        <div className="projects-featured-grid">
          <article
            className="project-card project-card-featured featured-petshop"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="project-content">
              <div className="project-heading-row">
                <div>
                  <span className="project-highlight-badge">
                    {t('projects.highlight')}
                  </span>
                  <h3 className="project-name">
                    {t('projects.petSystem.title')}
                  </h3>
                </div>
              </div>

              <p className="project-tagline">
                {t('projects.petSystem.description')}
              </p>

              <div className="project-video-wrapper">
                <video
                  className="project-video-embed"
                  controls
                  preload="metadata"
                  title={t('projects.petSystem.video.title')}
                >
                  <source src={petSystemVideo} type="video/mp4" />
                  {t('projects.petSystem.video.fallback')}
                </video>
              </div>

              <div className="project-card-details">
                <div className="project-info-group">
                  <h4 className="project-info-title">
                    {t('projects.technologies')}
                  </h4>
                  <TechnologiesList technologies={['PHP', 'MySQL']} />
                </div>

                <div className="project-info-group">
                  <h4 className="project-info-title">
                    {t('projects.details')}
                  </h4>
                  <FeatureList translationKeys={petSystemFeatures} t={t} />
                </div>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/NatanLuz/Petshopsystemv2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-secondary project-github-btn"
                  aria-label={t('projects.actions.repository.aria')}
                >
                  <i className="fab fa-github me-2" aria-hidden="true" />
                  {t('projects.actions.repository')}
                </a>
              </div>
            </div>
          </article>

          <article
            className="project-card project-card-featured featured-financeiro"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            <div className="project-content">
              <div className="project-heading-row">
                <div>
                  <span className="project-highlight-badge">
                    {t('projects.highlight')}
                  </span>
                  <h3 className="project-name">
                    {t('projects.balance.title')}
                  </h3>
                </div>
              </div>

              <p className="project-tagline">
                {t('projects.balance.description')}
              </p>

              <div className="project-card-details">
                <div className="project-info-group">
                  <h4 className="project-info-title">
                    {t('projects.technologies')}
                  </h4>
                  <TechnologiesList
                    technologies={[
                      'Laravel',
                      'PHP',
                      'Blade',
                      'TailwindCSS',
                      'Chart.js',
                      'Vite',
                    ]}
                  />
                </div>

                <div className="project-info-group">
                  <h4 className="project-info-title">
                    {t('projects.details')}
                  </h4>
                  <FeatureList translationKeys={balanceFeatures} t={t} />
                </div>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/NatanLuz/meu-saldo-certo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-secondary project-github-btn"
                  aria-label={t('projects.actions.repository.aria')}
                >
                  <i className="fab fa-github me-2" aria-hidden="true" />
                  {t('projects.actions.fullRepository')}
                </a>
                <a
                  href="https://meu-saldo-certo-9o9r.onrender.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-primary"
                  aria-label={t('projects.actions.online.aria')}
                >
                  <i
                    className="fas fa-external-link-alt me-2"
                    aria-hidden="true"
                  />
                  {t('projects.actions.online')}
                </a>
              </div>
            </div>
          </article>
        </div>

        <article
          className="project-card project-card-secondary tier-secondary"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          <div className="project-content">
            <div className="project-secondary-main">
              <div className="project-heading-row">
                <div>
                  <span className="project-complementary-badge">
                    {t('projects.complementary')}
                  </span>
                  <h3 className="project-name">
                    {t('projects.corteAzul.title')}
                  </h3>
                </div>
              </div>

              <p className="project-tagline">
                {t('projects.corteAzul.description')}
              </p>
            </div>

            <div className="project-secondary-details">
              <div className="project-info-group">
                <h4 className="project-info-title">
                  {t('projects.technologies')}
                </h4>
                <TechnologiesList technologies={['JavaScript', 'TailwindCSS']} />
              </div>

              <div className="project-info-group">
                <h4 className="project-info-title">
                  {t('projects.details')}
                </h4>
                <FeatureList translationKeys={corteAzulFeatures} t={t} />
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/NatanLuz/projeto-corte-azul-tea"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-secondary project-github-btn"
                aria-label={t('projects.actions.repository.aria')}
              >
                <i className="fab fa-github me-2" aria-hidden="true" />
                {t('projects.actions.repository')}
              </a>
              <a
                href="https://projeto-corte-azul-tea.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-primary"
                aria-label={t('projects.actions.online.aria')}
              >
                <i
                  className="fas fa-external-link-alt me-2"
                  aria-hidden="true"
                />
                {t('projects.actions.online')}
              </a>
            </div>
          </div>
        </article>

        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="600">
          <a
            href="https://github.com/NatanLuz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-secondary"
          >
            <i className="fab fa-github me-2" aria-hidden="true" />
            {t('projects.viewMore')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
