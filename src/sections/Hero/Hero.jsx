import styles from "./HeroStyles.module.css"
import heroImage from "../../assets/Headshot.png"
import { ReactComponent as LinkedInIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";
import { ReactComponent as ItchIcon } from "../../assets/itch.svg";
import { ReactComponent as DownArrow } from "../../assets/downArrow.svg";
import resume from "../../assets/DylanPatrascuResume.pdf"
import setThemeVars from '../../common/SetTheme';


function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <div className={styles.imageWrapper}>
                <img className={styles.hero} src={heroImage} alt="Photo of Dylan Patrascu" />
                <button className={styles.colorMode} onClick={setThemeVars}>?</button>
            </div>
        </div>
        <div className={styles.info}>
            <h1>Dylan<br/> Patrascu</h1>
            <h2>Game Developer</h2>
            <span>
                <a href="https://www.linkedin.com/in/dylanpatrascu" target="_blank"><LinkedInIcon className={styles.icon} /></a>
                <a href="https://github.com/dylanpatrascu" target="_blank"><GitHubIcon className={styles.icon} /></a>
                <a href="https://dylanpatrascu.itch.io" target="_blank"><ItchIcon className={styles.icon} /></a>
            </span>
            <p className={styles.description}>A computer science graduate with a passion for game development.</p>
            <a href={resume} target="_blank">
                <button className="hover">Resume</button>
            </a>
            <DownArrow className={`${styles.arrow} ${styles.wiggle}`} />

        </div>
        </section>
  )
}

export default Hero
