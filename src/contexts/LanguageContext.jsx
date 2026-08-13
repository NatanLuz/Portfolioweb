import { useCallback, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations.js'
import LanguageContext from './languageContext.js'

const DEFAULT_LANGUAGE = 'pt'
const LANGUAGE_STORAGE_KEY = 'portfolioLanguage'
const SUPPORTED_LANGUAGES = Object.freeze(['pt', 'en', 'fr'])
const LANGUAGE_TAGS = {
  pt: 'pt-BR',
  en: 'en',
  fr: 'fr',
}

const isSupportedLanguage = (language) =>
  SUPPORTED_LANGUAGES.includes(language)

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return isSupportedLanguage(storedLanguage)
      ? storedLanguage
      : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  const changeLanguage = useCallback((nextLanguage) => {
    if (isSupportedLanguage(nextLanguage)) {
      setLanguage(nextLanguage)
    }
  }, [])

  const t = useCallback(
    (key) => {
      const currentTranslation = translations[language]?.[key]
      if (currentTranslation !== undefined) {
        return currentTranslation
      }

      const portugueseFallback = translations[DEFAULT_LANGUAGE]?.[key]
      return portugueseFallback ?? key
    },
    [language],
  )

  useEffect(() => {
    document.documentElement.lang = LANGUAGE_TAGS[language]
    document.title = t('meta.title')

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'))
    }

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
    
    }
  }, [language, t])

  const contextValue = useMemo(
    () => ({
      language,
      changeLanguage,
      t,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
    [changeLanguage, language, t],
  )

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
