import styles from "./ModalStyles.module.css";
import Carousel from "../Carousel/Carousel";

function Modal({ isOpen, onClose, project, isExperience = false }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        {/* Show correct image depending on mode */}
        {project.logo && isExperience && (
          <img src={project.logo} alt={project.company} />
        )}
        {project.src && !isExperience && (
          <Carousel data={project.media} />
        )}

        {/* Content */}
        <h2>{project.header || project.title}</h2>

        {isExperience ? (
          <>
            <p><strong>{project.company}</strong></p>
            <p>{project.location}</p>
            <p>{project.dates}</p>
            <h3>Responsibilities</h3>
            <ul className={styles.exp}>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p>{project.paragraph}</p>
            <h3>Date</h3>
            <p>{project.date}</p>
            <h3>Description</h3>
            <p>{project.description}</p>
            <h3>Technologies Used</h3>
            <p>{project.tech}</p>
            <h3>Links</h3>
            <ul>
              {project.links.map((link, i) => (
                <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
