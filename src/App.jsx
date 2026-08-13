import About from './components/About.jsx'
import BackToTop from './components/BackToTop.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Technologies from './components/Technologies.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

function App() {
  useScrollReveal()

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
