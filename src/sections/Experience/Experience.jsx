import { useState } from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";
import Modal from "../../sections/Modal/Modal";

import unityLogo from "../../assets/unitylogo.png";
import ministryLogo from "../../assets/ministrylogo.png";
import threeclipseLogo from "../../assets/threeclipse.jpg";
import uwoLogo from "../../assets/UWO.svg"

function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      logo: threeclipseLogo, 
      company: "Threeclipse Games",
      title: "Junior Programmer",
      location: "Remote",
      dates: "September 2025 - December 2025",
      tech: "Unity, C#, Trello",
      description: [
        `• Collaborating in a 10-week training program to build a non-commercial game from concept to release, ending with publication on Steam.
         • Collaborating 10+ hours per week with designers, artists, and testers under mentor guidance.`
      ]
    },{
      logo: unityLogo,
      company: "Self-Employed",
      title: "Tutor (Unity & Python)",
      location: "London, Canada",
      dates: "December 2024 - April 2025",
      tech: "Unity 3D, C#, Python, Google Suite, Zoom",
      description: [
        `• Delivered lessons on Unity fundamentals (scene setup, scripting, inventory systems) and Python programming (data structures, OOP, recursion).
        • Improved student project quality by 25% (measured through assignment grading rubrics), by providing customized lessons on Unity fundamentals and Python programming.
`
      ]
    },
    {
      logo: ministryLogo,
      company: "Ministry of the Solicitor General",
      title: "Software Developer",
      location: "Hamilton, Canada",
      dates: "May 2023 - August 2024",
      tech: "Python, VBScript, Microsoft Office Suite",
      description: [
        `• May 2023 - August 2023 & May 2024 - August 2024
        • Automated network drive mapping using Python to reduce user error
        • Automated machine disposal metadata lookup with Python scripting
        • Debugged a legacy VBScript program for Windows 11 compatibility
        • Provided in-court technical support in high-pressure situations
        • Explained technical concepts to non-technical users effectively`
      ]
    },
    {
      logo: uwoLogo, 
      company: "University of Western Ontario",
      title: "Undergraduate",
      location: "London, Canada",
      dates: "September 2021 - April 2025",
      tech: "Unity, C#, C++, Python, Java, C, SQL, PHP, OpenGL, GitHub, Jira",
      description: [
        `• Honours BSc of Computer Science and Minor in Game Development
        • 3.9 GPA - Dean's Honour List
        • Member of the Game Development Society (GDS) & Fashion & Lifestyle Society (F&LS)`
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
