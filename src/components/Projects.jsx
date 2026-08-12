import petSystemVideo from '../../img/Petsystem.mp4'

function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2
          className="section-title text-center"
          data-translate="projects.title"
        >
          Projetos
        </h2>

        <div className="row g-4 projects-tier-gap">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <article
              className="project-card featured-financeiro"
              data-cat="fullstack"
            >
              <div className="project-content">
                <span className="project-highlight-badge">
                  Projeto Destaque
                </span>
                <h3 className="project-name">Meu Saldo Certo</h3>
                <p className="project-tagline">
                  Sistema financeiro desenvolvido em Laravel para gerenciamento
                  de receitas, despesas, categorias e saldo por usuário
                  autenticado.
                </p>

                <div className="project-detail-block">
                  <div className="project-info-group">
                    <h4 className="project-info-title">Destaques</h4>
                    <ul className="project-feature-list">
                      <li>Dashboard Analítico</li>
                      <li>CRUD completo de transações</li>
                      <li>Categorias por usuário</li>
                      <li>Filtros por período</li>
                      <li>Policies e Form Requests</li>
                    </ul>
                  </div>

                  <div className="project-info-group">
                    <h4 className="project-info-title">Tecnologias</h4>
                    <div className="project-tech">
                      <span className="tech-tag">Laravel</span>
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">Blade</span>
                      <span className="tech-tag">TailwindCSS</span>
                      <span className="tech-tag">Chart.js</span>
                      <span className="tech-tag">Vite</span>
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/NatanLuz/meu-saldo-certo"
                    target="_blank"
                    rel="noopener"
                    className="btn-cta-secondary project-github-btn"
                    aria-label="Ver projeto completo"
                  >
                    <i className="fab fa-github me-2" aria-hidden="true" />
                    Repositório Completo
                  </a>
                  <a
                    href="https://meu-saldo-certo-9o9r.onrender.com/login"
                    target="_blank"
                    rel="noopener"
                    className="btn-cta-primary ms-2"
                    aria-label="Acessar aplicação online"
                  >
                    <i
                      className="fas fa-external-link-alt me-2"
                      aria-hidden="true"
                    />
                    Acessar Online
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="row g-4 projects-tier-gap">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="140">
            <article
              className="project-card featured-petshop"
              data-cat="fullstack"
            >
              <div className="project-content">
                <span className="project-highlight-badge">
                  Projeto Destaque
                </span>
                <h3 className="project-name">
                  PetSystem — Gestão de Petshop
                </h3>
                <p className="project-tagline">
                  Sistema de gestão para petshops desenvolvido para organizar
                  atendimentos, clientes, pets e serviços em ambiente real.
                </p>

                <div className="project-detail-block">
                  <div className="project-info-stack">
                    <div className="project-info-group petshop-highlights">
                      <h4 className="project-info-title">Destaques</h4>
                      <ul className="project-feature-list">
                        <li>Utilizado em ambiente real</li>
                        <li>Gestão de clientes, pets e serviços</li>
                        <li>Controle de agenda</li>
                        <li>Regras de negócio</li>
                        <li>Banco de dados MySQL</li>
                        <li>Interface responsiva</li>
                      </ul>
                    </div>

                    <div className="project-info-group">
                      <h4 className="project-info-title">Tecnologias</h4>
                      <div className="project-tech">
                        <span className="tech-tag">PHP</span>
                        <span className="tech-tag">MySQL</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-video-wrapper">
                    <video
                      className="project-video-embed"
                      controls
                      preload="metadata"
                      title="Vídeo Projeto PetSystem"
                    >
                      <source src={petSystemVideo} type="video/mp4" />
                      Seu navegador não suporta a reprodução de vídeo.
                    </video>
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/NatanLuz/Petshopsystemv2"
                    target="_blank"
                    rel="noopener"
                    className="btn-cta-secondary project-github-btn"
                    data-translate-attr="aria-label:project.github.aria"
                    aria-label="Ver projeto completo"
                  >
                    <i className="fab fa-github me-2" aria-hidden="true" />
                    <span data-translate="project.github.title">
                      Ver projeto completo
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="row g-4 projects-tier-gap">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="180">
            <article
              className="project-card tier-secondary"
              data-cat="frontend"
            >
              <div className="project-content">
                <h3 className="project-name">
                  CorteAzul — Website Institucional
                </h3>
                <p className="project-tagline">
                  Website institucional responsivo desenvolvido para fortalecer
                  a presença digital e facilitar o contato com clientes.
                </p>

                <div className="project-detail-block">
                  <div className="project-info-group">
                    <h4 className="project-info-title">Destaques</h4>
                    <ul className="project-feature-list">
                      <li>Layout responsivo</li>
                      <li>Navegação intuitiva</li>
                      <li>Apresentação clara dos serviços</li>
                      <li>Chamadas para contato</li>
                      <li>
                        Experiência otimizada para dispositivos móveis
                      </li>
                    </ul>
                  </div>

                  <div className="project-info-group">
                    <h4 className="project-info-title">Tecnologias</h4>
                    <div className="project-tech">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">TailwindCSS</span>
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/NatanLuz/projeto-corte-azul-tea"
                    target="_blank"
                    rel="noopener"
                    className="btn-cta-secondary project-github-btn"
                    data-translate-attr="aria-label:project.github.aria"
                    aria-label="Ver projeto completo"
                  >
                    <i className="fab fa-github me-2" aria-hidden="true" />
                    <span data-translate="project.github.title">
                      Ver projeto completo
                    </span>
                  </a>
                  <a
                    href="https://projeto-corte-azul-tea.vercel.app/"
                    target="_blank"
                    rel="noopener"
                    className="btn-cta-primary ms-2"
                    aria-label="Acessar aplicação online"
                  >
                    <i
                      className="fas fa-external-link-alt me-2"
                      aria-hidden="true"
                    />
                    Acessar Online
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
            rel="noopener"
            className="btn-cta-secondary"
            data-translate="projects.viewMore"
          >
            <i className="fab fa-github me-2" aria-hidden="true" />
            Veja mais Projetos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
