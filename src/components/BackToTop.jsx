import { useScroll } from '../hooks/useScroll.js'
import { useTranslation } from '../hooks/useTranslation.js'

function BackToTop() {
  const { scrollY } = useScroll()
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top${scrollY > 400 ? ' visible' : ''}`}
      type="button"
      aria-label={t('backToTop.aria')}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  )
}

export default BackToTop
