## Portfólio — Natan da Luz

Por que este portfólio existe

- Mostrar, de forma direta e honesta, competências técnicas e cuidado com a experiência do usuário.
- Fornecer uma vitrine profissional que comunique clareza, organização e atenção a práticas modernas de desenvolvimento.
- Servir como base reutilizável para apresentar trabalhos a clientes ou empregadores e para iterar melhorias ao longo do tempo.

Como foi desenvolvido (resumo técnico)

- Estrutura: site estático composto por `index.html`, `style.css`, `script.js` e arquivos de tradução (`translations.js`).
- Abordagem: desenvolvimento com ênfase em HTML semântico, responsividade e progressive enhancement — o conteúdo funciona mesmo sem JavaScript e melhora com interações adicionais.
- Frameworks e bibliotecas: uso de Bootstrap para grid e utilitários, AOS para animações ao rolar a página, Font Awesome para ícones e Google Fonts para tipografia. Essas escolhas aceleram a construção mantendo consistência visual.
- Estilização: CSS customizado (variáveis CSS e temas) para manter um sistema de cores e permitir alternância de tema (escuro/claro) com persistência da preferência do usuário.
- Acessibilidade e SEO: estrutura semântica, atributos ARIA onde necessário, meta tags bem definidas e foco em textos legíveis — tudo pensado para melhorar indexação e usabilidade.
- Internacionalização leve: o arquivo `translations.js` contém chaves de tradução que permitem alternância de idioma sem recarregar a página.

Decisões de engenharia e boas práticas

- Código legível e organizado: priorizei classes reutilizáveis e estruturas claras para facilitar manutenção.
- Progressive enhancement: funcionalidades extras (animações, temas, troca de idioma) são adicionadas por cima de uma base funcional, reduzindo dependências críticas.
- Performance: imagens otimizadas (webp/png), carregamento preguiçoso (lazy loading) onde aplicável, e seleção seletiva de bibliotecas para reduzir peso.
- Segurança minimal: por se tratar de site estático, evitei expor segredos e preferi links externos com `rel="noopener"` para abrir em novas abas com segurança.

Fluxo de desenvolvimento

1. Planejamento: definir seções principais (sobre, tecnologias, projetos, contato) e metas de experiência do usuário.
2. Estrutura inicial em HTML: marcação semântica e metas de SEO.
3. Estilo e layout: implementar grid responsivo com Bootstrap e ajustar com CSS customizado.
4. Interação: adicionar scripts para alternância de tema, navegação suave, e sistema de tradução.
5. Testes rápidos: checagem em dispositivos móveis, teclado e leitores de tela básicos.
6. Deploy: hospedar como site estático (GitHub Pages, Netlify, Vercel ou similar) para disponibilizar rapidamente.

Observações finais

- O foco deste portfólio foi comunicar profissionalismo e maturidade técnica através de uma experiência clara e responsiva. A escolha por uma página estática garante performance, fácil deploy e portabilidade.
- Se desejar, posso transformar partes do portfólio em componentes React, adicionar formulário de contato com integração (Formspree/Netlify Forms) ou preparar um pipeline de CI/CD para deploy automático.

---

Se quiser que eu ajuste o tom (mais técnico, mais comercial ou mais curto) ou que gere versões em outros idiomas para o README, me avise.

# Natan da Luz - Fullstack Developer Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()

[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)]()
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=flat&logo=mysql&logoColor=white)]()
[![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

![Pré-visualização do Portfólio](img/preview.jpg)

## 🚀 **Professional Frontend Developer**

**Systems Information Student** | **Multi-language Portfolio** | **Client-focused Solutions**

A passionate frontend developer specializing in creating **clean, functional interfaces** and delivering **real-world business solutions**. Currently pursuing Systems Information degree while building professional websites for diverse clients.

---

## **Featured Professional Projects**

### **CorteAzulTea – Specialized Barber Shop**

**Professional Website** | **Live Project** | **Social Impact**

- **Client**: Barber shop specialized in humanized care for children with ASD (Autism Spectrum Disorder)
- **Technologies**: HTML5, CSS3, Tailwind CSS, JavaScript ES6+
- **Key Features**: PWA configuration, WhatsApp integration, responsive design
- **Impact**: Builds trust with families and facilitates contact for specialized care
- **Live Demo**: [projeto-corte-azul-tea.vercel.app](https://projeto-corte-azul-tea.vercel.app/)

### **Marcos Garcia Tattoo – Professional Studio**

**Professional Website** | **Portfolio Showcase** | **Business Growth**

- **Client**: Professional tattoo studio
- **Technologies**: HTML5, CSS3, Tailwind CSS, JavaScript
- **Key Features**: Filtered portfolio by categories, real testimonials, WhatsApp/Instagram integration, Google Maps
- **Impact**: Highlights unique artistic style and facilitates connection with new clients
- **Live Demo**: [Vercel Deployment](https://vercel.com/natan-da-luzs-projects/marcosgarcia-tattoo-website)

---

## **Technical Expertise**

### **Frontend Development**

- **HTML5** – Semantic structure and accessibility
- **CSS3** – Advanced styling with CSS variables and custom themes
- **JavaScript ES6+** – Interactive functionalities and modern features
- **Bootstrap 5.3.2** – Responsive CSS framework
- **Tailwind CSS** – Utility-first CSS framework for rapid development
- **AOS (Animate On Scroll)** – Smooth scroll animations
- **Font Awesome 6.4.0** – Comprehensive icon library

### **Backend & Database**

- **PHP** – Server-side development
- **MySQL** – Database management and optimization
- **SQL** – Advanced database queries
- **REST APIs** – Web service integration

### **Development Tools & Deployment**

- **VS Code** – Primary development environment
- **Git & GitHub** – Version control and collaboration
- **Vercel** – Modern deployment platform
- **Responsive Design** – Mobile-first approach

---

## **Portfolio Features**

### ** Multi-Language Support**

- **Portuguese (PT)** – Native language
- **English (EN)** – Complete translation
- **French (FR)** – Complete translation
- Dynamic switching without page reload
- Persistent language preferences

### ** Advanced Theme System**

- **Dark Theme (Default)** – Professional black background with beige text
- **Light Theme** – Clean white background with dark text
- Smooth transitions and user preference persistence
- CSS Variables system for easy maintenance

### ** Responsive & Accessible**

- **Mobile-First Design** – Optimized for all devices
- **Bootstrap 5.3.2** grid system
- **Tailwind CSS** utility classes
- **Full keyboard navigation** support
- **ARIA labels** and semantic HTML structure
- **SEO optimized** with comprehensive meta tags

---

## **Academic & Development Projects**

### **Sistema de Escala de Trabalho**

**Desktop Application** | **Python Development**

- Complete work schedule management system
- Technologies: Python, Tkinter, Pandas
- Features: Employee management, automatic schedule generation, reports
- [GitHub Repository](https://github.com/archivesysl/bettertable)

### **Red Dead Redemption 2 Website**

**Academic Project** | **Game-themed Design**

- Responsive website with game theme
- Technologies: HTML, CSS, JavaScript
- Features: CSS animations, visual effects, modern design
- Hosted on Vercel with YouTube demonstration

### **Amazon Scraper – Full-stack**

**Web Application** | **Full-stack Development**

- Modern web application for Amazon product search
- Responsive interface with advanced search functionality
- Full-stack technologies demonstrating complete development skills

---

## **Professional Skills**

### **Soft Skills**

- **Team Collaboration** – Effective teamwork and communication
- **Problem Solving** – Analytical approach to complex challenges
- **Adaptability** – Quick learning and technology adaptation
- **Proactivity** – Initiative-taking and self-directed work
- **Client Communication** – Professional client relationship management

### **Languages**

- **Portuguese** – Native proficiency
- **English** – C1 level (Advanced)
- **French** – A2 level (Basic)

---

## 📂 **Project Structure**

```
Portfolioweb-main/
├── index.html                    # Semantic HTML5 structure
├── style.css                     # Custom CSS with theme system
├── script.js                     # JavaScript interactions
├── translations.js               # Multi-language system
├── assets/
│   └── NatanDaLuzCvDev.pdf.pdf  # Professional resume
├── img/                          # Images and icons
│   ├── foto portfolio.jpg        # Profile photo
│   ├── *.svg                     # Technology icons
│   ├── *.webp                    # Project screenshots
│   └── *.PNG                     # Certificates
└── README.md                     # Documentation
```

---

## **Getting Started**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NatanLuz/Portfolioweb-main.git
   ```

2. **Open the project:**

   - Simply open `index.html` in your browser
   - Or use a local server for development

3. **Customize:**
   - Edit `translations.js` to modify language content
   - Update `style.css` to change themes and styling
   - Modify `script.js` for additional functionality

---

##  **Let's Connect**

**Email:** [natandaluz01@gmail.com](mailto:natandaluz01@gmail.com)

**LinkedIn:** [https://www.linkedin.com/in/natan-da-luz-3156582a2/](https://www.linkedin.com/in/natan-da-luz-3156582a2/)

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Thank You!**

Thank you for visiting my portfolio! I'm always open to new opportunities, collaborations, and challenging projects. Let's create something amazing together!

**Ready to bring your ideas to life?** Let's connect and discuss how we can work together to achieve your goals.
