import { useTranslation } from '../hooks/useTranslation.js'

const languages = [
  {
    translationKey: 'about.languages.english',
    levelTranslationKey: 'about.languages.englishLevel',
  },
  {
    translationKey: 'about.languages.french',
    levelTranslationKey: 'about.languages.frenchLevel',
  },
]

function About() {
  const { t } = useTranslation()
  const introParagraphs = t('about.intro').split('\n\n')

  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9" data-aos="fade-up">
            <h2 className="section-title text-center">{t('about.title')}</h2>

            <div className="about-content">
              <div className="about-intro-layout">
                <div className="about-intro-box">
                  {introParagraphs.map((paragraph) => (
                    <p className="about-intro-text" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="about-languages"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="about-languages-title">
                {t('about.languages.title')}
              </h3>

              <div className="languages-grid">
                {languages.map(
                  ({ translationKey, levelTranslationKey }) => (
                    <div className="language-item" key={translationKey}>
                      <span className="language-name">
                        {t(translationKey)}
                      </span>
                      <span className="language-level">
                        {t(levelTranslationKey)}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
