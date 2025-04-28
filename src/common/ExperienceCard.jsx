import styles from "./ExperienceCardStyles.module.css";

function ExperienceCard({ logo, company, title, location, dates, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={logo} alt={`${company} logo`} className={styles.logo} />
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
      <p>{dates}</p>
    </div>
  );
}

export default ExperienceCard;

