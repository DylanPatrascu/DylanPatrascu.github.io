import { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import MicroMovers from "../../assets/micromovers.png";
import BreakingBob from "../../assets/breakingbob.png";
import ProjectCard from "../../common/ProjectCard";
import Modal from "../../sections/Modal/Modal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      src: BreakingBob,
      desc: "Breaking Bob Header",
      header: "Breaking Bob",
      paragraph: "GDS x Lojam 2025 Submission",
    },
    {
      src: MicroMovers,
      desc: "Micro Movers Header",
      header: "Micro Movers",
      paragraph: "GDS Micro Jam 2025 Submission",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
