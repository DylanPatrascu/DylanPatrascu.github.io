import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/Headshot.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import itchLight from "../../assets/itch-light.svg"
import itchDark from "../../assets/itch-dark.svg"
import resume from "../../assets/DylanPatrascuResume.pdf"
import { useTheme } from "../../common/ThemeContext"


function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const itchIcon = theme === "light" ? itchLight : itchDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImage} alt="Photo of Dylan Patrascu"/>
            <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt="Toggle Theme Icon"/>
        </div>
        <div className={styles.info}>
            <h1>Dylan<br/> Patrascu</h1>
            <h2>Game Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/dylanpatrascu" target="_blank"> <img src={linkedinIcon} alt="LinkedIn Icon"/></a>
                <a href="https://github.com/dylanpatrascu" target="_blank"> <img src={githubIcon} alt="GitHub Icon"/></a>
                <a href="https://dylanpatrascu.itch.io" target="_blank"> <img src={itchIcon} alt="Itch.io Icon"/></a>
            </span>
            <p className={styles.description}>A dedicated fourth-year computer science student focused on game development.</p>
            <a href={resume} target="_blank">
                <button className="hover">Resume</button>
            </a>
        </div>
        </section>
  )
}

export default Hero
