import { useState } from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";
import Modal from "../../sections/Modal/Modal";

import unityLogo from "../../assets/unitylogo.png";
import ministryLogo from "../../assets/ministrylogo.png";
import pythonLogo from "../../assets/pythonlogo.png";
import uwoLogo from "../../assets/UWO.svg"

function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      logo: unityLogo,
      company: "Self-Employed",
      title: "Unity Tutor",
      location: "London, Canada",
      dates: "March 2025 - April 2025",
      description: [
        "• Taught Unity fundamentals, including scene setup and scripting.",
        "• Guided students through creating interactive environments and UIs.",
        "• Implemented secure load/save systems using binary files."
      ]
    },
    {
      logo: ministryLogo,
      company: "Ministry of the Solicitor General",
      title: "Technical IT Assistant",
      location: "Hamilton, Canada",
      dates: "May 2023 - August 2024",
      description: [
        "• May 2023 - August 2023 & May 2024 - August 2024",
        "• Automated network drive mapping using Python to reduce user error.",
        "• Automated machine disposal metadata lookup with Python scripting.",
        "• Debugged a legacy VBScript program for Windows 11 compatibility.",
        "• Provided in-court technical support in high-pressure situations.",
        "• Explained technical concepts to non-technical users effectively."
      ]
    },
    {
      logo: pythonLogo, 
      company: "Self-Employed",
      title: "Python Tutor",
      location: "Remote",
      dates: "December 2024 - March 2025",
      description: [
        "• Taught Python programming to beginners with little experience.",
        "• Covered data structures, object-oriented programming, and intro data science.",
        "• Simplified complex concepts like recursion and algorithm efficiency."
      ]
    },
    {
      logo: uwoLogo, 
      company: "University of Western Ontario",
      title: "Undergraduate",
      location: "London, Canada",
      dates: "September 2021 - April 2025",
      description: [
        "• Honours BSc of Computer Science and Minor in Game Development",
        "• 3.9 GPA - Dean's Honour List",
        "• Member of the Game Development Society (GDS) & Fashion & Lifestyle Society (F&LS)"
      ]
    }
  ];
  

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceContainer}>
        {experiences.map((exp, i) => (
          <a key={i}>
            <ExperienceCard
              {...exp}
              onClick={() => setSelectedJob(exp)}
            />
          </a>
        ))}
      </div>

      <Modal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        project={selectedJob}
        isExperience
      />
    </section>
  );
}

export default Experience;
