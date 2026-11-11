# My Portfolio

## Technologies

The portfolio was developed using the following technologies:

- React;
- JavaScript;
- HTML5;
- CSS3;
- Bootstrap, loaded externally for responsive structure and utility classes;
- Font Awesome, loaded externally for icons;
- Google Fonts, using the Inter and JetBrains Mono families.

## Features

- Interface componentized with React;
- responsive layout for desktop, tablet, and mobile devices;
- responsive navigation with a mobile menu;
- active section identification and dynamic navbar behavior while scrolling;
- smooth navigation between sections with compensation for the fixed navbar;
- complete translation into Portuguese, English, and French;
- persistence of the selected language in `localStorage`;
- updating of the document language, title, and meta description;
- switching between light and dark themes, with persisted preference;
- entrance animations implemented with `IntersectionObserver`;
- typing effect in the Hero title;
- page progress bar;
- back-to-top button;
- presentation, technologies, projects, and contact sections;
- email contact with a button to copy the address;
- direct WhatsApp access with an initial message;
- support for `prefers-reduced-motion` to reduce animations when requested by the system.

## Project architecture

```text
src/
├── components/
├── contexts/
├── hooks/
├── i18n/
├── App.jsx
└── main.jsx
```

- `components/`: visual components and interface sections;
- `contexts/`: global language, theme, and scrolling states;
- `hooks/`: reusable behaviors such as translation, active section tracking, animations, and typing;
- `i18n/`: application translation catalog;
- `App.jsx`: main interface composition;
- `main.jsx`: React initialization and global provider configuration.

## Main application structure

```text
main.jsx
└── Language, theme, and scrolling providers
    └── App.jsx
        ├── ScrollProgress
        ├── Header
        ├── Hero
        ├── About
        ├── Technologies
        ├── Projects
        ├── Contact
        ├── Footer
        └── BackToTop
```

## Featured projects

- **Meu Saldo Certo:** financial system developed with Laravel to manage income, expenses, categories, and balances for authenticated users;

- **PetSystem:** management system for pet shops, organizing appointments, clients, pets, and services;
- **CorteAzul:** responsive institutional website created to strengthen its digital presence and make it easier for clients to get in touch.

## How to run locally

Node.js and npm must be installed.

```bash
git clone https://github.com/NatanLuz/Portfolioweb.git
cd Portfolioweb
npm install
npm run dev
```

Vite will display the application's local address in the terminal.

## Available scripts

- `npm run dev`: starts the Vite development server;
- `npm run build`: generates the optimized production build;
- `npm run lint`: runs static code analysis with ESLint;
- `npm run preview`: starts a local preview of the production build.

## Production build

```bash
npm run build
```

The command generates optimized files in the `dist/` folder. This directory is a build artifact and is not versioned.

## Internationalization

The application supports Portuguese, English, and French. The React catalog is located at `src/i18n/translations.js`, and `LanguageContext` controls the current language, translation fallbacks, and preference persistence in `localStorage`.

## Theme

Light and dark themes are controlled by React's context infrastructure. The user's choice is applied through the `data-theme` attribute and stored in `localStorage`.

## Deployment

Application: [portfolionatan.vercel.app](https://portfolionatan.vercel.app/)

## Author

**Natan Da Luz**

- [LinkedIn](https://www.linkedin.com/in/natandaluz/)
- [Portfolio](https://portfolionatan.vercel.app/)
