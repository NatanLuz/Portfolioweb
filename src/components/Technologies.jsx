import apiIcon from "../../img/api.svg";
import dockerIcon from "../../img/docker.svg";
import gitIcon from "../../img/git2.svg";
import githubIcon from "../../img/githubazul.svg";
import laravelIcon from "../../img/laravel.svg";
import linuxIcon from "../../img/linux.svg";
import phpIcon from "../../img/php.svg";
import reactIcon from "../../img/react.svg";
import { useTranslation } from "../hooks/useTranslation.js";

function TechnologyItem({ icon, fontAwesomeIcon, name, alt, delay }) {
  return (
    <div className="tech-item" data-aos="fade-in" data-aos-delay={delay}>
      {icon ? (
        <img src={icon} alt={alt} className="tech-icon" loading="lazy" />
      ) : (
        <i
          className={`${fontAwesomeIcon} tech-icon tech-font-icon`}
          aria-hidden="true"
        />
      )}
      <span className="tech-name">{name}</span>
    </div>
  );
}

function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t("technologies.title")}</h2>
        <div className="tech-categories-grid">
          <article
            className="tech-category tech-category-primary"
            data-aos="fade-up"
          >
            <div className="tech-category-header">
              <h3 className="tech-category-title">
                {t("technologies.backend")}
              </h3>
              <span className="tech-focus-label focus-primary">
                {t("technologies.backend.focus")}
              </span>
            </div>

            <div className="tech-grid backend-grid">
              <TechnologyItem icon={phpIcon} name="PHP" alt="PHP" delay="100" />
              <TechnologyItem
                icon={laravelIcon}
                name="Laravel"
                alt="Laravel"
                delay="150"
              />
              <TechnologyItem
                icon={apiIcon}
                name="APIs REST"
                alt="APIs REST"
                delay="200"
              />
            </div>
          </article>

          <article className="tech-category" data-aos="fade-up">
            <div className="tech-category-header">
              <h3 className="tech-category-title">
                {t("technologies.databases")}
              </h3>
            </div>

            <div className="tech-grid database-grid">
              <TechnologyItem
                fontAwesomeIcon="fas fa-database"
                name="MySQL"
                delay="150"
              />
            </div>
          </article>

          <article className="tech-category" data-aos="fade-up">
            <div className="tech-category-header">
              <h3 className="tech-category-title">
                {t("technologies.frontend")}
              </h3>
            </div>

            <div className="tech-grid frontend-grid">
              <TechnologyItem
                icon={reactIcon}
                name="React"
                alt="React"
                delay="100"
              />
              <TechnologyItem
                fontAwesomeIcon="fab fa-js"
                name="JavaScript"
                delay="150"
              />
            </div>
          </article>

          <article className="tech-category" data-aos="fade-up">
            <div className="tech-category-header">
              <h3 className="tech-category-title">{t("technologies.tools")}</h3>
            </div>

            <div className="tech-grid tools-grid">
              <TechnologyItem icon={gitIcon} name="Git" alt="Git" delay="100" />
              <TechnologyItem
                icon={githubIcon}
                name="GitHub"
                alt="GitHub"
                delay="130"
              />
              <TechnologyItem
                icon={dockerIcon}
                name="Docker"
                alt="Docker"
                delay="160"
              />
              <TechnologyItem
                fontAwesomeIcon="fas fa-box-open"
                name="Composer"
                delay="190"
              />
              <TechnologyItem
                fontAwesomeIcon="fas fa-paper-plane"
                name="Postman"
                delay="220"
              />
              <TechnologyItem
                icon={linuxIcon}
                name="Linux"
                alt="Linux"
                delay="250"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
