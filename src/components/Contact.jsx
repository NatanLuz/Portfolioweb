import { useEffect, useRef, useState } from 'react'

const emailAddress = 'natandaluz01@gmail.com'
const emailLink = `mailto:${emailAddress}?subject=Contato%20via%20site`

function Contact() {
  const [isEmailFeedbackVisible, setIsEmailFeedbackVisible] = useState(false)
  const redirectTimeoutRef = useRef(null)

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
              <h2
                className="section-title text-center"
                data-translate="contact.title"
              >
                Contato
              </h2>

              <div
                className="contact-buttons mb-4"
                role="group"
                aria-label="Links de contato"
              >
                <a
                  href={emailLink}
                  className="contact-btn email-btn btn-cta-primary"
                  data-translate-attr="aria-label:contact.email.aria"
                  aria-label="Enviar email para Natan Da Luz"
                  onClick={handleEmailClick}
                >
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <span data-translate="contact.email">Enviar email</span>
                  <small
                    id="emailFeedback"
                    className="email-feedback"
                    style={{
                      display: isEmailFeedbackVisible ? 'inline' : 'none',
                    }}
                    aria-live="polite"
                  >
                    Email Copiado!
                  </small>
                </a>

                <a
                  href="https://www.linkedin.com/in/natandaluz/"
                  target="_blank"
                  rel="noopener"
                  className="contact-btn linkedin-btn btn-cta-secondary"
                  data-translate-attr="aria-label:contact.linkedin.aria"
                  aria-label="Abrir perfil do LinkedIn de Natan Da Luz"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                  <span data-translate="contact.linkedin">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/NatanLuz"
                  target="_blank"
                  rel="noopener"
                  className="contact-btn github-btn btn-cta-secondary"
                  data-translate-attr="aria-label:contact.github.aria"
                  aria-label="Abrir repositório do GitHub de Natan Da Luz"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                  <span data-translate="contact.github">Github</span>
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
