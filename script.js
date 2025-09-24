// Sistema de mudança de idioma pt en fr
let currentLanguage = 'pt';


// Sistema de loading
function showLoading() {
    document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.remove('show');
}

// Barra de progresso de scroll
function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
}


// Lazy loading para imagens
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores sem suporte
        images.forEach(img => img.classList.add('loaded'));
    }
}

// Skeleton loading
function showSkeleton(element) {
    element.classList.add('skeleton');
}

function hideSkeleton(element) {
    element.classList.remove('skeleton');
}

function changeLanguage(lang) {
    currentLanguage = lang;

    // Atualiza botões de idioma conforme a linguagem selecionada
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Atualiza todos os elementos com data-translate sem dar erros
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Atualiza o atributo lang do HTML
    document.documentElement.lang = lang;
}

// Função que verifica se o elemento está visível
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para scroll suave, sem interferir com o scroll suave ou em uma att de pagina
// Permite definir um offset para o scroll

function smoothScrollTo(element, offset = 80) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Função para mostrar/ocultar botão "Voltar ao topo" sem interferir com o scroll suave ou em uma att de pagina
window.addEventListener('scroll', toggleBackToTop);
function toggleBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Função que anima elementos no scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animated');
        }
    });
}

// Função para atualizar navegação ativa
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Função que inicia as animações
function initializeAnimations() {
    // Animação de digitação para o título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 500);
    }

    // Animação de fade-in para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // observa > todas as seções
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Função para iniciar funcionalidades
function initializeFeatures() {
    // Navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });

    // Botão desenvolvido para > "Voltar ao topo"
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Event listeners para botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// Função para gerenciar scroll
function handleScroll() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Atualizar navegação > "ativa"
    updateActiveNavigation();

    // Mostrar e oculta botão > "Voltar ao topo"
    toggleBackToTop();

    // Animar elementos no scroll
    animateOnScroll();
}

// Função para inicializar tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Inicializar funcionalidades que addicionam eventos e animações
    initializeFeatures();

    // Inicializar animações que ocorrem no carregamento
    initializeAnimations();

    // Adicionar event listeners para scroll
    window.addEventListener('scroll', handleScroll);

    // Efeito parallax no hero suavizando a visualização
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Modal para projetos
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                const projectTitle = this.querySelector('h3').textContent;
                const projectDesc = this.querySelector('p').textContent;

                console.log('Projeto clicado:', projectTitle);
            }
        });
    });

    // Smooth reveal para elementos (particularmente falando é útil para textos e imagens)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Adicionar classe para animações do CSS
    document.body.classList.add('loaded');
});

// Função para mostrar e ocultar navbar no scroll (opcional)
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scroll para baixo
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll para cima
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScrollTop;
});

// Função para adicionar efeitos de carregamento
function addLoadingEffects() {
    // Adicionar classe de loading ao body
    document.body.classList.add('loading');

    // Remove classe de loading quando tudo estiver carregado
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    });
}

// Função para otimizar a performance
function optimizePerformance() {
    // Lazy loading para imagens que não estão visíveis
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Debounce para eventos de scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 10);
    });
}

// Inicializar otimizações de performance
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Adicionar efeitos de loading (quando a página é carregada)
addLoadingEffects();

// Funcionalidade de troca de tema funçao feita para ser responsiva e fácil de usar
// Permite alternar entre temas claro e escuro, com ícones representativos
// Armazena a preferência do usuário no localStorage para persistência entre sessões
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    // Verifica a preferência de tema salva ou define como 'dark' por padrão
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#themeToggle i');
    if (theme === 'light') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Inicializa a troca de um tema
initializeThemeToggle();

// Função principal de inicialização das novas funcionalidades
function initializeNewFeatures() {
    // Inicializar lazy loading
    initializeLazyLoading();

    // Loading simulation para demonstração
    setTimeout(() => {
        hideLoading();
    }, 1000);
}

// Inicializar novas funcionalidades quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeNewFeatures);
