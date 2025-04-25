import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"
import Footer from './sections/Footer/Footer'
import NavBar from './sections/Navbar/Navbar'


function App() {
  return (
    <>
      <div id="Top">
      <Hero/>
      </div>
      <NavBar/>
      <div id="Projects">
      <Projects/>
      </div>
      <div id="Contact">
      <Contact/>
      </div>
      <div id="Experience">
      <Footer/>
      </div>
    </>
  )
}

export default App
