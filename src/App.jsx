import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"
import Footer from './sections/Footer/Footer'
import NavBar from './sections/Navbar/Navbar'
import Experience from './sections/Experience/Experience'
import Community from './sections/Community/Community'



function App() {
  return (
    <>
      <NavBar/>
      <div id="Top">
      <Hero/>
      </div>
      <div id="Projects">
      <Projects/>
      </div>
      <div id="Experience">
      <Experience/>
      </div>
      <div id="Involvement">
      <Community/>
      </div>
      <div id="Contact">
      <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
