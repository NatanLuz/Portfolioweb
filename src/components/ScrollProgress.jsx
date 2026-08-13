import { useScroll } from '../hooks/useScroll.js'

function ScrollProgress() {
  const { progress } = useScroll()

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
