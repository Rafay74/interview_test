import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
  