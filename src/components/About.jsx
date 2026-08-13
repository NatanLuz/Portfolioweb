import { Fragment } from 'react'
import { useTranslation } from '../hooks/useTranslation.js'

const softSkills = [
  {
    translationKey: 'about.softSkills.teamwork',
    delay: '100',
  },
  {
    translationKey: 'about.softSkills.communication',
    delay: '150',
  },
  {
    translationKey: 'about.softSkills.problemSolving',
    delay: '200',
  },
  {
    translationKey: 'about.softSkills.agility',
    delay: '250',
  },
  {
    translationKey: 'about.softSkills.adaptability',
    delay: '300',
  },
  {
    translationKey: 'about.softSkills.proactivity',
    delay: '350',
  },
]

const languages = [
  {
    translationKey: 'about.languages.english',
    levelTranslationKey: 'about.languages.englishLevel',
    delay: '150',
  },
  {
    translationKey: 'about.languages.french',
    levelTranslationKey: 'about.languages.frenchLevel',
    delay: '200',
  },
]

function About() {
  const { t } = useTranslation()
  const introParagraphs = t('about.intro').split('\n\n')

  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <h2 className="section-title text-center">{t('about.title')}</h2>

            <div className="about-content">
              <div className="about-intro-layout">
                <div className="about-intro-box">
                  <p className="about-intro-text">
                    {introParagraphs.map((paragraph, index) => (
                      <Fragment key={paragraph}>
                        {index > 0 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                        {paragraph}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-8 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="skills-title text-center">
              {t('about.softSkills.title')}
            </h3>

            <div className="soft-skills-grid">
              {softSkills.map(({ translationKey, delay }) => (
                <div
                  className="skill-item"
                  data-aos="fade-in"
                  data-aos-delay={delay}
                  key={translationKey}
                >
                  <span>{t(translationKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-8 mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="skills-title text-center">
              {t('about.languages.title')}
            </h3>

            <div className="languages-grid">
              {languages.map(
                ({ translationKey, levelTranslationKey, delay }) => (
                  <div
                    className="language-item"
                    data-aos="fade-in"
                    data-aos-delay={delay}
                    key={translationKey}
                  >
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
    </section>
  )
}

export default About
