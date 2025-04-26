import styles from "./ModalStyles.module.css";

function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <img src={project.src} alt={project.desc} />
        <h2>{project.header}</h2>
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
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
