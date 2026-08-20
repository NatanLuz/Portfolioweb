import { useTranslation } from '../hooks/useTranslation.js'

const professionalExperiences = [
  {
    key: 'petSystem',
    technologies: ['PHP', 'MySQL'],
  },
  {
    key: 'dufrio',
  },
]

const educationEntries = [
  {
    key: 'informationSystems',
    hasType: true,
  },
  {
    key: 'webTechnician',
    hasType: false,
  },
]

function Experience() {
  const { t } = useTranslation()

  return (
    <section id="trajetoria" className="section experience-section">
      <div className="container">
        <h2 className="section-title text-center">{t('experience.title')}</h2>

        <div className="experience-layout">
          <div className="experience-column" data-aos="fade-up">
            <h3 className="experience-group-title">
              {t('experience.professional.title')}
            </h3>

            <div className="experience-list">
              {professionalExperiences.map(({ key, technologies }) => (
                <article className="experience-entry" key={key}>
                  <div className="experience-entry-header">
                    <div>
                      <h4 className="experience-entry-title">
                        {t(`experience.professional.${key}.organization`)}
                      </h4>
                      <p className="experience-entry-role">
                        {t(`experience.professional.${key}.role`)}
                      </p>
                    </div>
                    <span className="experience-entry-period">
                      {t(`experience.professional.${key}.period`)}
                    </span>
                  </div>

                  <p className="experience-entry-description">
                    {t(`experience.professional.${key}.description`)}
                  </p>

                  {technologies && (
                    <p className="experience-entry-technologies">
                      <span>{t('experience.technologies')}:</span>{' '}
                      {technologies.join(' • ')}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div
            className="experience-column experience-education"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="experience-group-title">
              {t('experience.education.title')}
            </h3>

            <div className="experience-list">
              {educationEntries.map(({ key, hasType }) => (
                <article className="experience-entry" key={key}>
                  <h4 className="experience-entry-title">
                    {t(`experience.education.${key}.course`)}
                  </h4>
                  <p className="experience-entry-institution">
                    {t(`experience.education.${key}.institution`)}
                  </p>
                  <div className="experience-education-meta">
                    {hasType && (
                      <span>{t(`experience.education.${key}.type`)}</span>
                    )}
                    <span className="experience-status">
                      {t(`experience.education.${key}.status`)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
