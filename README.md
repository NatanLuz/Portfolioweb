# Portfolio Web — Website Pessoal

Aplicação web estática responsiva desenvolvida para apresentação profissional, destacando meus  projetos, tecnologias e evolução como desenvolvedor backend, com suporte a múltiplos idiomas e alternância de tema.

---

## 🎯 Proposta do projeto feito

Centralizar a apresentação profissional em uma interface web moderna, acessível e organizada, facilitando a visualização de projetos, habilidades técnicas e formas de contato.

**Benefícios principais:**

* Apresentação clara e estruturada de projetos reais
* Suporte multilíngue (PT/EN/FR)
* Experiência personalizada com tema claro/escuro
* Interface responsiva e acessível
* Foco em backend com visão full stack

---

## ⚙️ Funcionalidades

### Interface e UX

* Layout responsivo (desktop, tablet e mobile)
* Navegação fluida com scroll e organização por seções
* Botão de retorno ao topo
* Animações suaves com AOS

### Internacionalização

* Sistema multilíngue (Português, Inglês e Francês)
* Tradução dinâmica via `data-translate`
* Gerenciamento centralizado em `translations.js`

### Personalização

* Alternância de tema (claro/escuro)
* Persistência de preferência com `localStorage`

### Conteúdo Profissional

* Seção de tecnologias com foco em backend (PHP, Python, SQL)
* Seção de projetos com aplicações reais
* Área de contato integrada

---

## 🏗️ Arquitetura / Estrutura

Separação clara entre estrutura, estilo e comportamento:

* **HTML** → estrutura e conteúdo
* **CSS** → layout, responsividade e temas
* **JavaScript** → interações, idioma e lógica de UI

**Estrutura do projeto:**

```bash
Portfolioweb/
├── index.html
├── style.css
├── script.js
├── translations.js
├── assets/
├── img/
└── README.md
```

---

## 🔐 Segurança

* Aplicação estática (sem backend)
* Sem manipulação de dados sensíveis
* Uso seguro de links externos (`rel="noopener"`)

---

## 🧰 Stack Tecnológica

* HTML5 (semântico)
* CSS3
* JavaScript (Vanilla JS)
* AOS (Animate On Scroll)

---

## 🚀 Instalação

### Pré-requisitos

* Navegador moderno
* (Opcional) Git

### Passos

```bash
git clone <url-do-repositorio>
cd Portfolioweb
```

---

## ▶️ Execução

Abrir diretamente no navegador:

```bash
index.html
```

Ou usar servidor local (recomendado):

```bash
python -m http.server 8080
```

Acesse: http://localhost:8080

---

## 🧪 Testes Rápidos

Checklist funcional:

* Testar troca de idioma (PT/EN/FR)
* Alternar tema claro/escuro
* Validar responsividade em diferentes dispositivos
* Verificar navegação entre seções
* Testar links de projetos e contato

---

## 📸 Screenshots

Adicione aqui capturas do portfólio (home, projetos, tecnologias, contato).

---

## 👤 Autor

**Natan Da Luz**
Desenvolvedor de Software

📧 [natandaluz01@gmail.com](mailto:natandaluz01@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/natan-da-luz-3156582a2/)

---

## 📄 Licença

Projeto de portfólio pessoal para fins de apresentação profissional.
