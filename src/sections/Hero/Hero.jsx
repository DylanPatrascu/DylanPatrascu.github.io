import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/Headshot.png"
import linkedin from "../../assets/linkedin-light.svg"
import github from "../../assets/github-light.svg"
import itchio from "../../assets/itch-light.svg"
import resume from "../../assets/DylanPatrascuResume.pdf"
import scrollGif from "../../assets/mouse-scroll.gif"


function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImage} alt="Photo of Dylan Patrascu"/>
        </div>
        <div className={styles.info}>
            <h1>Dylan<br/> Patrascu</h1>
            <h2>Game Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/dylanpatrascu" target="_blank"> <img src={linkedin} alt="LinkedIn Icon"/></a>
                <a href="https://github.com/dylanpatrascu" target="_blank"> <img src={github} alt="GitHub Icon"/></a>
                <a href="https://dylanpatrascu.itch.io" target="_blank"> <img src={itchio} alt="Itch.io Icon"/></a>
            </span>
            <p className={styles.description}>A dedicated fourth-year computer science student focused on game development.</p>
            <a href={resume} target="_blank">
                <button className="hover">Resume</button>
            </a>
        </div>
        <img className={styles.scrollGif} src={scrollGif} alt="Scroll indicator"/>
        </section>
  )
}

export default Hero
