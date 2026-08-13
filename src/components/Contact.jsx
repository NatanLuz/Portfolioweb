import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation.js'

const emailAddress = 'natandaluz01@gmail.com'
const emailLink = `mailto:${emailAddress}?subject=Contato%20via%20site`

function Contact() {
  const [isEmailFeedbackVisible, setIsEmailFeedbackVisible] = useState(false)
  const redirectTimeoutRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current)
      }
    }
  }, [])

  const handleEmailClick = (event) => {
    event.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress).catch(() => {})
    }

    setIsEmailFeedbackVisible(true)
    if (redirectTimeoutRef.current) {
      window.clearTimeout(redirectTimeoutRef.current)
    }
    redirectTimeoutRef.current = window.setTimeout(() => {
      setIsEmailFeedbackVisible(false)
      window.location.href = emailLink
    }, 1200)
  }

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-content" data-aos="fade-up">
              <h2 className="section-title text-center">
                {t('contact.title')}
              </h2>

              <div
                className="contact-buttons mb-4"
                role="group"
                aria-label={t('contact.group.aria')}
              >
                <a
                  href={emailLink}
                  className="contact-btn email-btn btn-cta-primary"
                  aria-label={t('contact.email.aria')}
                  onClick={handleEmailClick}
                >
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <span>{t('contact.email')}</span>
                  <small
                    id="emailFeedback"
                    className="email-feedback"
                    style={{
                      display: isEmailFeedbackVisible ? 'inline' : 'none',
                    }}
                    aria-live="polite"
                  >
                    {t('contact.email.feedback')}
                  </small>
                </a>

                <a
                  href="https://www.linkedin.com/in/natandaluz/"
                  target="_blank"
                  rel="noopener"
                  className="contact-btn linkedin-btn btn-cta-secondary"
                  aria-label={t('contact.linkedin.aria')}
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                  <span>{t('contact.linkedin')}</span>
                </a>

                <a
                  href="https://github.com/NatanLuz"
                  target="_blank"
                  rel="noopener"
                  className="contact-btn github-btn btn-cta-secondary"
                  aria-label={t('contact.github.aria')}
                >
                  <i className="fab fa-github" aria-hidden="true" />
                  <span>{t('contact.github')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
