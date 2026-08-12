import apiIcon from '../../img/api.svg'
import dockerIcon from '../../img/docker.svg'
import gitIcon from '../../img/git2.svg'
import githubIcon from '../../img/githubazul.svg'
import laravelIcon from '../../img/laravel.svg'
import linuxIcon from '../../img/linux.svg'
import phpIcon from '../../img/php.svg'
import postgresqlIcon from '../../img/postgresql.svg'
import reactIcon from '../../img/react.svg'

function TechnologyItem({ icon, name, alt, delay, iconClassName = '' }) {
  const iconClasses = `tech-icon${iconClassName ? ` ${iconClassName}` : ''}`

  return (
    <div className="tech-item" data-aos="fade-in" data-aos-delay={delay}>
      <img
        src={icon}
        alt={alt}
        className={iconClasses}
        loading="lazy"
      />
      <span className="tech-name">{name}</span>
    </div>
  )
}

function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2
          className="section-title text-center"
          data-translate="technologies.title"
        >
          Tecnologias
        </h2>

        <div className="tech-category" data-aos="fade-up">
          <div className="backend-emphasis" data-aos="fade-in">
            <h3 className="tech-category-title tech-title-with-badge">
              Backend
              <span className="tech-focus-label focus-primary">
                PRINCIPAL
              </span>
            </h3>
            <p
              className="tech-category-description"
              data-translate="technologies.backend.description"
            >
              APIs REST • Regras de negócio • Persistência de dados
            </p>
          </div>

          <div className="tech-grid backend-grid">
            <TechnologyItem
              icon={phpIcon}
              name="PHP"
              alt="Ícone PHP"
              delay="100"
            />
            <TechnologyItem
              icon={laravelIcon}
              name="Laravel"
              alt="Ícone Laravel"
              delay="200"
            />
            <TechnologyItem
              icon={apiIcon}
              name="API's"
              alt="Ícone APIs REST"
              delay="300"
            />
          </div>
        </div>

        <div className="tech-category" data-aos="fade-up">
          <h3
            className="tech-category-title"
            data-translate="technologies.databases"
          >
            Banco de Dados
          </h3>
          <p
            className="tech-category-description"
            data-translate="technologies.databases.description"
          >
            Modelagem, consultas e persistência de dados relacionais
          </p>
          <div className="tech-grid database-grid">
            <TechnologyItem
              icon={postgresqlIcon}
              name="PostgreSQL"
              alt="Ícone PostgreSQL"
              delay="100"
            />
          </div>
        </div>

        <div
          className="tech-category frontend-secondary"
          data-aos="fade-up"
        >
          <h3 className="tech-category-title tech-title-with-badge">
            Frontend
          </h3>
          <p
            className="tech-category-description"
            data-translate="technologies.frontend.description"
          >
            Interfaces modernas e consumo de APIs
          </p>
          <div className="tech-grid frontend-grid">
            <TechnologyItem
              icon={reactIcon}
              name="React"
              alt="Ícone React"
              delay="100"
              iconClassName="react-icon"
            />
          </div>
        </div>

        <div className="tech-category" data-aos="fade-up">
          <h3
            className="tech-category-title"
            data-translate="technologies.tools"
          >
            Ferramentas
          </h3>
          <p
            className="tech-category-description"
            data-translate="technologies.tools.description"
          >
            Fluxo de versionamento, colaboração e execução de ambientes
          </p>
          <div className="tech-grid tools-grid">
            <TechnologyItem
              icon={gitIcon}
              name="Git"
              alt="Ícone Git"
              delay="100"
            />
            <TechnologyItem
              icon={githubIcon}
              name="GitHub"
              alt="Ícone GitHub"
              delay="150"
            />
            <TechnologyItem
              icon={dockerIcon}
              name="Docker"
              alt="Ícone Docker"
              delay="250"
            />
            <TechnologyItem
              icon={linuxIcon}
              name="Linux"
              alt="Ícone Linux"
              delay="350"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
