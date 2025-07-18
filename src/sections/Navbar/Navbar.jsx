import styles from "./NavbarStyles.module.css";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li onClick={() => scrollToSection("Top")}>Home</li>
        <li onClick={() => scrollToSection("Projects")}>Projects</li>
        <li onClick={() => scrollToSection("Experience")}>Experience</li>
        <li onClick={() => scrollToSection("Involvement")}>Involvement</li>
        <li onClick={() => scrollToSection("Contact")}>Contact Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
