import { useTranslation } from '../hooks/useTranslation.js'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="text-center">
            <p>
              <span>{t('footer.credit')}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
