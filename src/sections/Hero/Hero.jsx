import styles from './HeroStyles.module.css';
import heroImage from "../../assets/heroImage.jpg"
function Hero() {
  return <section id="hero">
    <div><img src={heroImage} alt="Dylan Patrascu"></img></div>
  </section>
}

export default Hero
