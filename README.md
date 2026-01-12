<div align="center">
   <img src="img/preview.jpg" alt="Pré-visualização do Portfólio" width="760" />

   <h1>Portfólio — Natan Da Luz</h1>
   <p>Desenvolvedor de Software</p>
</div>

---

## Visão Geral

Portfólio estático (HTML/CSS/JS) para apresentar projetos e competências. Interface responsiva, multilíngue (PT/EN/FR) e com alternância de tema claro/escuro, incluindo microinterações e boas práticas de acessibilidade.

---

## Funcionalidades

- **Responsivo:** experiência fluida em mobile e desktop.
- **Multilíngue:** PT/EN/FR via `data-translate` e `data-translate-attr`.
- **Tema Dinâmico:** alternância `dark`/`light` com persistência em `localStorage`.
- **UX aprimorada:** AOS para animações, barra de progresso de scroll e botão voltar ao topo.
- **Contato:** links diretos para e-mail, LinkedIn e GitHub.

---

## Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript, AOS, Font Awesome
- **Outros:** Tailwind CSS (em projetos listados), PHP/Laravel e MySQL
- **Desktop:** Python, Tkinter, SQLite, Pandas, OpenPyXL

---

## Estrutura

```
Portfolioweb/
├── index.html        # Home, Sobre, Tecnologias, Projetos, Contato
├── style.css         # Tema por variáveis, componentes e responsividade
├── script.js         # Idioma, tema, scroll, microinterações
├── translations.js   # Mapeamento de textos PT/EN/FR
├── CurriculoNatanDaLuz.pdf  # Currículo acessível na raiz (Vercel)
├── img/              # Imagens e ícones
└── README.md         # Documentação
```

---

## Execução Local

```powershell
git clone https://github.com/NatanLuz/Portfolioweb.git
cd Portfolioweb
npx http-server .
```

Acesse em `http://localhost:8080`. Para testes locais sem servidor, alguns caminhos absolutos (`/...`) podem não funcionar via `file://`.

---

## Convenções

- Usar variáveis de tema (evitar cores fixas).
- Manter traduções sincronizadas em PT/EN/FR.
- Adotar padrões de componentes (`.project-card`, `.tech-grid`).
- Links externos com `target="_blank"` e `rel="noopener"`.

---

## Contato

- **Email:** natandaluz01@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/natan-da-luz-3156582a2/
