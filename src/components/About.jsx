const softSkills = [
  {
    translationKey: 'about.softSkills.teamwork',
    label: 'Trabalho em equipe',
    delay: '100',
  },
  {
    translationKey: 'about.softSkills.communication',
    label: 'Comunicação clara',
    delay: '150',
  },
  {
    translationKey: 'about.softSkills.problemSolving',
    label: 'Resolução de problemas',
    delay: '200',
  },
  {
    translationKey: 'about.softSkills.agility',
    label: 'Autonomia',
    delay: '250',
  },
  {
    translationKey: 'about.softSkills.adaptability',
    label: 'Atenção a detalhes',
    delay: '300',
  },
  {
    translationKey: 'about.softSkills.proactivity',
    label: 'Aprendizado contínuo',
    delay: '350',
  },
]

const languages = [
  {
    translationKey: 'about.languages.english',
    name: 'Inglês',
    level: 'Avançado (C1)',
    delay: '150',
  },
  {
    translationKey: 'about.languages.french',
    name: 'Francês',
    level: 'Intermediário Básico (A2)',
    delay: '200',
  },
]

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <h2
              className="section-title text-center"
              data-translate="about.title"
            >
              Sobre Mim
            </h2>

            <div className="about-content">
              <div className="about-intro-layout">
                <div className="about-intro-box">
                  <p
                    className="about-intro-text"
                    data-translate="about.intro"
                  >
                    Sou Desenvolvedor de Software com foco em backend, atuando
                    principalmente com PHP, Laravel e bancos relacionais como
                    MySQL e PostgreSQL. Gosto de resolver problemas por trás da
                    aplicação: modelagem de dados, autenticação, autorização e
                    organização de código são pontos aos quais dou bastante
                    atenção em cada projeto.
                    <br />
                    <br />
                    Uso Docker para padronizar ambientes de desenvolvimento e
                    também tenho conhecimento complementar em Frontend, o que
                    me ajuda a integrar as duas pontas de um sistema com mais
                    autonomia. Estou sempre estudando arquitetura de software e
                    boas práticas para evoluir como desenvolvedor.
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
            <h3
              className="skills-title text-center"
              data-translate="about.softSkills.title"
            >
              Soft Skills
            </h3>

            <div className="soft-skills-grid">
              {softSkills.map(({ translationKey, label, delay }) => (
                <div
                  className="skill-item"
                  data-aos="fade-in"
                  data-aos-delay={delay}
                  key={translationKey}
                >
                  <span data-translate={translationKey}>{label}</span>
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
            <h3
              className="skills-title text-center"
              data-translate="about.languages.title"
            >
              Idiomas
            </h3>

            <div className="languages-grid">
              {languages.map(
                ({ translationKey, name, level, delay }) => (
                  <div
                    className="language-item"
                    data-aos="fade-in"
                    data-aos-delay={delay}
                    key={translationKey}
                  >
                    <span
                      className="language-name"
                      data-translate={translationKey}
                    >
                      {name}
                    </span>
                    <span className="language-level">{level}</span>
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
