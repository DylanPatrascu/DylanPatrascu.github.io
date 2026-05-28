import { useState } from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";
import Modal from "../../sections/Modal/Modal";

import unityLogo from "../../assets/unitylogo.png";
import ministryLogo from "../../assets/ministrylogo.png";
import threeclipseLogo from "../../assets/threeclipse.jpg";
import uwoLogo from "../../assets/UWO.svg"
import STXLogo from "../../assets/STX.png"

function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      logo: STXLogo, 
      company: "OVA",
      title: "Junior Quality Analyst",
      location: "Hybrid",
      dates: "December 2025 - Present",
      tech: "Unity, C#, Jira, Confluence",
      description: [
        `• Identified, documented, and verified bugs, fixes, and new features using tools such as Jira and Gitlab.
        • Worked closely with developers and cross-functional teams in Agile Scrum sprints to support the development and testing of our SaaS and XR platforms, including daily standups and release testing.
        • Developed a C# automation script to compare Unity Events CSV and JSON outputs against internal documentation, helping identify inconsistencies and improve data validation workflows.`
      ]
    },{
      logo: threeclipseLogo, 
      company: "Threeclipse Studios",
      title: "Engineer",
      location: "Remote",
      dates: "January 2026 - Present",
      tech: "Unity, C#, Trello",
      description: [
        `• Developed an Unity C# editor tool for JSON data importation and updating of shark-related Scriptable Objects, allowing for faster iteration on game balance.
        • Engineered a save system supporting automatic, event-based, and exit-state persistence for game data, aquarium states, and offline reward tracking.
        • Created a shark breeding and attribute framework in Unity C# that combined inherited traits to produce unique stat combinations and progression strategies.
        • Integrated FMOD for all audio, such as music and sound effects, using a sub-module repository architecture.`
      ]
    },{
      logo: threeclipseLogo, 
      company: "Threeclipse Studios",
      title: "Programmer",
      location: "Remote",
      dates: "September 2025 - December 2025",
      tech: "Unity, C#, Trello",
      description: [
        `• Designed and implemented all systems as the sole developer for the project, including Steamworks integration in Unity, Steam achievements, and branching game endings driven by player decisions`
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
        `• Reduced manual setup time by 30% (measured through IT team onboarding metrics) by automating network drive mapping and metadata lookup with Python.
          • Debugged legacy VBScript programs for Windows 11 compatibility.
          • Provided in-person and remote Tier 1 support (L1).`
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
        `• Bachelor of Science (Honours)
         • Honours Specialization in Computer Science, Minor in Game Development
          • 3.8 GPA – Dean’s Honour List 2021–2025
          • Relevant Coursework: Game/Systems Programming & Design, Data Structures & Algorithms, Databases
          • Extra-Curricular Activities: Game Development Society, Fashion & Lifestyle Society`
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
