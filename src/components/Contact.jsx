import { useEffect, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation.js'

const emailAddress = 'natandaluz01@gmail.com'

function Contact() {
  const [isEmailCopied, setIsEmailCopied] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (!isEmailCopied) return undefined

    const feedbackTimeout = window.setTimeout(() => {
      setIsEmailCopied(false)
    }, 2000)

    return () => window.clearTimeout(feedbackTimeout)
  }, [isEmailCopied])

  const handleCopyEmail = async () => {
    if (!navigator.clipboard) return

    try {
      await navigator.clipboard.writeText(emailAddress)
      setIsEmailCopied(true)
    } catch {
      setIsEmailCopied(false)
    }
  }

  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-content" data-aos="fade-up">
              <h2 className="section-title text-center">
                {t('contact.title')}
              </h2>

              <p className="contact-subtitle">{t('contact.subtitle')}</p>
              <p className="contact-description">
                {t('contact.description')}
              </p>

              <button
                type="button"
                className="btn-cta-primary contact-email-cta"
                onClick={handleCopyEmail}
              >
                <span aria-live="polite" aria-atomic="true">
                  {isEmailCopied
                    ? t('contact.email.copied')
                    : t('contact.email.copy')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
