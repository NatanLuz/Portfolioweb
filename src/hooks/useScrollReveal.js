import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-aos]')]
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const timers = new Set()

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return () => {
        elements.forEach((element) => element.classList.remove('is-revealed'))
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const delay = Number(entry.target.dataset.aosDelay) || 0
          const timerId = window.setTimeout(() => {
            entry.target.classList.add('is-revealed')
            timers.delete(timerId)
          }, delay)

          timers.add(timerId)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      timers.forEach((timerId) => window.clearTimeout(timerId))
      elements.forEach((element) => element.classList.remove('is-revealed'))
    }
  }, [])
}
