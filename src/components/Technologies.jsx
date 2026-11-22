import apiIcon from "../../img/api.svg";
import dockerIcon from "../../img/docker.svg";
import gitIcon from "../../img/git2.svg";
import githubIcon from "../../img/githubazul.svg";
import laravelIcon from "../../img/laravel.svg";
import linuxIcon from "../../img/linux.svg";
import mysqlIcon from "../../img/mysql.svg";
import phpIcon from "../../img/php.svg";
import reactIcon from "../../img/react.svg";
import { useTranslation } from "../hooks/useTranslation.js";

function TechnologyItem({ icon, fontAwesomeIcon, name, alt, delay }) {
  return (
    <div className="tech-item" data-aos="fade-in" data-aos-delay={delay}>
      {icon ? (
        <img src={icon} alt={alt} className="tech-icon" loading="lazy" />
      ) : fontAwesomeIcon ? (
        <i
          className={`${fontAwesomeIcon} tech-icon tech-font-icon`}
          aria-hidden="true"
        />
      ) : null}
      <span className="tech-name">{name}</span>
    </div>
  );
}

const technologyCategories = [
  {
    key: "frontend",
    items: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", fontAwesomeIcon: "fab fa-js" },
      { name: "HTML5", fontAwesomeIcon: "fab fa-html5" },
      { name: "CSS3", fontAwesomeIcon: "fab fa-css3-alt" },
      { name: "Tailwind CSS", fontAwesomeIcon: "fas fa-wind" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "PHP", icon: phpIcon },
      { name: "Laravel", icon: laravelIcon },
      { name: "APIs REST", icon: apiIcon },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "MySQL", icon: mysqlIcon },
      { name: "SQLite", fontAwesomeIcon: "fas fa-database" },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Composer", fontAwesomeIcon: "fas fa-box-open" },
      { name: "Postman", fontAwesomeIcon: "fas fa-paper-plane" },
      { name: "Linux", icon: linuxIcon },
    ],
  },
  {
    key: "ai",
    descriptionKey: "technologies.ai.description",
    items: [
      { name: "Claude Code" },
      { name: "OpenAI Codex" },
      { name: "AI Agents" },
      { name: "LLMs" },
    ],
  },
];

function Technologies() {
  const { t } = useTranslation();

  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title text-center">{t("technologies.title")}</h2>
        <div className="tech-categories-grid">
          {technologyCategories.map(({ key, items, descriptionKey }) => (
            <article className="tech-category" data-aos="fade-up" key={key}>
              <div className="tech-category-header">
                <h3 className="tech-category-title">
                  {t(`technologies.${key}`)}
                </h3>
              </div>
              {descriptionKey && (
                <p className="tech-category-context">{t(descriptionKey)}</p>
              )}
              <div className="tech-grid">
                {items.map((technology) => (
                  <TechnologyItem
                    key={technology.name}
                    {...technology}
                    alt=""
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
