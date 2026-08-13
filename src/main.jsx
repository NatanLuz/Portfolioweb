import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style.css'
import App from './App.jsx'
import LanguageProvider from './contexts/LanguageContext.jsx'
import ScrollProvider from './contexts/ScrollContext.jsx'
import ThemeProvider from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
)
