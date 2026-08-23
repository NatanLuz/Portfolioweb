import { useEffect, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation.js'

const emailAddress = 'natandaluz01@gmail.com'
const whatsappDisplayNumber = '(48) 99148-4817'
const whatsappNumber = '5548991484817'
const whatsappMessage =
  'Olá, Natan! Vi seu portfólio e gostaria de conversar com você.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

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
          <div className="col-lg-8">
            <div className="contact-content" data-aos="fade-up">
              <h2 className="section-title text-center">
                {t('contact.title')}
              </h2>

              <p className="contact-subtitle">{t('contact.subtitle')}</p>
              <p className="contact-description">
                {t('contact.description')}
              </p>

              <div className="contact-options">
                <article className="contact-method">
                  <i
                    className="fas fa-envelope contact-method-icon"
                    aria-hidden="true"
                  />
                  <h3 className="contact-method-title">
                    {t('contact.email.label')}
                  </h3>
                  <p className="contact-method-value">{emailAddress}</p>
                  <button
                    type="button"
                    className="btn-cta-primary contact-action"
                    onClick={handleCopyEmail}
                  >
                    <span aria-live="polite" aria-atomic="true">
                      {isEmailCopied
                        ? t('contact.email.copied')
                        : t('contact.email.copy')}
                    </span>
                  </button>
                </article>

                <article className="contact-method">
                  <i
                    className="fab fa-whatsapp contact-method-icon"
                    aria-hidden="true"
                  />
                  <h3 className="contact-method-title">
                    {t('contact.whatsapp.label')}
                  </h3>
                  <p className="contact-method-value">
                    {whatsappDisplayNumber}
                  </p>
                  <a
                    className="btn-cta-secondary contact-action"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.whatsapp.action')}
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
