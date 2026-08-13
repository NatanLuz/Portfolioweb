import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import ThemeContext from './themeContext.js'

const DEFAULT_THEME = 'dark'
const THEME_STORAGE_KEY = 'theme'
const SUPPORTED_THEMES = ['dark', 'light']

const getInitialTheme = () => {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    return SUPPORTED_THEMES.includes(storedTheme) ? storedTheme : DEFAULT_THEME
  } catch {
    return DEFAULT_THEME
  }
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Mantém o tema em memória quando o armazenamento não está disponível.
    }
  }, [theme])

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
