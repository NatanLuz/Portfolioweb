import { useEffect, useMemo, useRef, useState } from 'react'
import ScrollContext from './scrollContext.js'

const initialScrollState = {
  scrollY: 0,
  direction: 'up',
  progress: 0,
}

function ScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState(initialScrollState)
  const previousScrollYRef = useRef(0)

  useEffect(() => {
    let animationFrameId = null

    const updateScrollState = () => {
      const scrollY = window.scrollY
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const difference = scrollY - previousScrollYRef.current

      setScrollState((currentState) => ({
        scrollY,
        direction:
          Math.abs(difference) < 4
            ? currentState.direction
            : difference > 0
              ? 'down'
              : 'up',
        progress: Math.min(100, Math.max(0, (scrollY / scrollableHeight) * 100)),
      }))

      previousScrollYRef.current = scrollY
      animationFrameId = null
    }

    const scheduleUpdate = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateScrollState)
      }
    }

    previousScrollYRef.current = window.scrollY
    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  const contextValue = useMemo(() => scrollState, [scrollState])

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
