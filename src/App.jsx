import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import About from "./sections/About";
import Projects from './sections/Projects'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'


function App() {
  

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <ContactSection />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
