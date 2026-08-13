import apiIcon from '../../img/api.svg'
import dockerIcon from '../../img/docker.svg'
import gitIcon from '../../img/git2.svg'
import githubIcon from '../../img/githubazul.svg'
import laravelIcon from '../../img/laravel.svg'
import linuxIcon from '../../img/linux.svg'
import phpIcon from '../../img/php.svg'
import postgresqlIcon from '../../img/postgresql.svg'
import reactIcon from '../../img/react.svg'
import { useTranslation } from '../hooks/useTranslation.js'

function TechnologyItem({ icon, name, alt, delay, iconClassName = '' }) {
  const iconClasses = `tech-icon${iconClassName ? ` ${iconClassName}` : ''}`

  return (
    <div className="tech-item" data-aos="fade-in" data-aos-delay={delay}>
      <img src={icon} alt={alt} className={iconClasses} loading="lazy" />
      <span className="tech-name">{name}</span>
    </div>
  )
}

function Technologies() {
  const { t } = useTranslation()

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title text-center">
          {t('technologies.title')}
        </h2>

        <div className="tech-category" data-aos="fade-up">
          <div className="backend-emphasis" data-aos="fade-in">
            <h3 className="tech-category-title tech-title-with-badge">
              {t('technologies.backend')}
              <span className="tech-focus-label focus-primary">
                {t('technologies.backend.focus')}
              </span>
            </h3>
            <p className="tech-category-description">
              {t('technologies.backend.description')}
            </p>
          </div>

          <div className="tech-grid backend-grid">
            <TechnologyItem icon={phpIcon} name="PHP" alt="PHP" delay="100" />
            <TechnologyItem
              icon={laravelIcon}
              name="Laravel"
              alt="Laravel"
              delay="200"
            />
            <TechnologyItem
              icon={apiIcon}
              name="API's"
              alt="APIs REST"
              delay="300"
            />
          </div>
        </div>

        <div className="tech-category" data-aos="fade-up">
          <h3 className="tech-category-title">
            {t('technologies.databases')}
          </h3>
          <p className="tech-category-description">
            {t('technologies.databases.description')}
          </p>
          <div className="tech-grid database-grid">
            <TechnologyItem
              icon={postgresqlIcon}
              name="PostgreSQL"
              alt="PostgreSQL"
              delay="100"
            />
          </div>
        </div>

        <div className="tech-category frontend-secondary" data-aos="fade-up">
          <h3 className="tech-category-title tech-title-with-badge">
            {t('technologies.frontend')}
          </h3>
          <p className="tech-category-description">
            {t('technologies.frontend.description')}
          </p>
          <div className="tech-grid frontend-grid">
            <TechnologyItem
              icon={reactIcon}
              name="React"
              alt="React"
              delay="100"
              iconClassName="react-icon"
            />
          </div>
        </div>

        <div className="tech-category" data-aos="fade-up">
          <h3 className="tech-category-title">
            {t('technologies.tools')}
          </h3>
          <p className="tech-category-description">
            {t('technologies.tools.description')}
          </p>
          <div className="tech-grid tools-grid">
            <TechnologyItem icon={gitIcon} name="Git" alt="Git" delay="100" />
            <TechnologyItem
              icon={githubIcon}
              name="GitHub"
              alt="GitHub"
              delay="150"
            />
            <TechnologyItem
              icon={dockerIcon}
              name="Docker"
              alt="Docker"
              delay="250"
            />
            <TechnologyItem
              icon={linuxIcon}
              name="Linux"
              alt="Linux"
              delay="350"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
