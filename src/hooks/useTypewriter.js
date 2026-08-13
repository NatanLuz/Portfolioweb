import { useEffect, useState } from 'react'

export function useTypewriter(text, resetKey) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const timers = new Set()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timerId = window.setTimeout(() => {
        setDisplayedText(text)
        setIsTyping(false)
      }, 0)
      timers.add(timerId)
      return () => timers.forEach((id) => window.clearTimeout(id))
    }

    let characterIndex = 0

    const typeNextCharacter = () => {
      characterIndex += 1
      setDisplayedText(text.slice(0, characterIndex))

      if (characterIndex < text.length) {
        const timerId = window.setTimeout(typeNextCharacter, 80)
        timers.add(timerId)
      } else {
        setIsTyping(false)
      }
    }

    const resetTimerId = window.setTimeout(() => {
      setDisplayedText('')
      setIsTyping(true)
    }, 0)
    const typingTimerId = window.setTimeout(typeNextCharacter, 250)
    timers.add(resetTimerId)
    timers.add(typingTimerId)

    return () => timers.forEach((id) => window.clearTimeout(id))
  }, [resetKey, text])

  return { displayedText, isTyping }
}
