import petSystemVideo from '../../img/Petsystem.mp4'
import { useTranslation } from '../hooks/useTranslation.js'

const balanceFeatures = Array.from(
  { length: 5 },
  (_, index) => `projects.balance.feature${index + 1}`,
)
const petSystemFeatures = Array.from(
  { length: 6 },
  (_, index) => `projects.petSystem.feature${index + 1}`,
)
const corteAzulFeatures = Array.from(
  { length: 5 },
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

        <div className="row g-4 projects-tier-gap">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <article className="project-card featured-financeiro">
              <div className="project-content">
                <span className="project-highlight-badge">
                  {t('projects.highlight')}
                </span>
                <h3 className="project-name">{t('projects.balance.title')}</h3>
                <p className="project-tagline">
                  {t('projects.balance.description')}
                </p>

                <div className="project-detail-block">
                  <div className="project-info-group">
                    <h4 className="project-info-title">
                      {t('projects.details')}
                    </h4>
                    <FeatureList translationKeys={balanceFeatures} t={t} />
                  </div>

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
                    className="btn-cta-primary ms-2"
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
        </div>

        <div className="row g-4 projects-tier-gap">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="140">
            <article className="project-card featured-petshop">
              <div className="project-content">
                <span className="project-highlight-badge">
                  {t('projects.highlight')}
                </span>
                <h3 className="project-name">
                  {t('projects.petSystem.title')}
                </h3>
                <p className="project-tagline">
                  {t('projects.petSystem.description')}
                </p>

                <div className="project-detail-block">
                  <div className="project-info-stack">
                    <div className="project-info-group petshop-highlights">
                      <h4 className="project-info-title">
                        {t('projects.details')}
                      </h4>
                      <FeatureList translationKeys={petSystemFeatures} t={t} />
                    </div>

                    <div className="project-info-group">
                      <h4 className="project-info-title">
                        {t('projects.technologies')}
                      </h4>
                      <TechnologiesList technologies={['PHP', 'MySQL']} />
                    </div>
                  </div>

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
          </div>
        </div>

        <div className="row g-4 projects-tier-gap">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="180">
            <article className="project-card tier-secondary">
              <div className="project-content">
                <h3 className="project-name">
                  {t('projects.corteAzul.title')}
                </h3>
                <p className="project-tagline">
                  {t('projects.corteAzul.description')}
                </p>

                <div className="project-detail-block">
                  <div className="project-info-group">
                    <h4 className="project-info-title">
                      {t('projects.details')}
                    </h4>
                    <FeatureList translationKeys={corteAzulFeatures} t={t} />
                  </div>

                  <div className="project-info-group">
                    <h4 className="project-info-title">
                      {t('projects.technologies')}
                    </h4>
                    <TechnologiesList
                      technologies={['React', 'JavaScript', 'TailwindCSS']}
                    />
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
                    className="btn-cta-primary ms-2"
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
        </div>

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
