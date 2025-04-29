import { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import MicroMovers from "../../assets/micromovers.png";
import BreakingBob from "../../assets/breakingbob.png";
import MarineBiologyVR from "../../assets/marinevr.png";
import CannonballRun from "../../assets/cannonballrun.png";
import Shift from "../../assets/shift.png";
import PersonalWebsite from "../../assets/website.png";
import LanguageLocalizationTool from "../../assets/localization.png";
import ProjectCard from "../../common/ProjectCard";
import Modal from "../../sections/Modal/Modal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      src: BreakingBob,
      desc: "Breaking Bob Header",
      header: "Breaking Bob",
      paragraph: "He built this city, and he can tear it down.",
      date: "March 2025",
      tech: "Unity 2D, C#, GitHub",
      description: `Knock down buildings and tear the city apart as Bob the construction worker reaches his breaking point. Destroy cops, cars, buildings, and anything in your way trying to clear the city before the timer runs out.
        • Created in 6 days for LoJam x GDS 2025 in a a team of three with the theme "Break the System"
        • Developed a dynamic NavMesh system allowing enemies to adapt to destructible environments in real time
        • Built an interactive particle system that amplified game feedback and immersion
        Judge’s Choice – Best in Game Mechanics & Fun
        People’s Choice Award`,
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/WreckingGame" },
        { label: "Itch.io", url: "https://jkrupa.itch.io/breaking-bob" }
      ]
    },
    {
      src: MicroMovers,
      desc: "Micro Movers Header",
      header: "Micro Movers",
      paragraph: "Race to collect furniture from the house to your truck!",
      date: "Jan 2025",
      tech: "Unity 2D, C#, Aseprite, GitHub",
      description: `Features a charming pixel art style and intuitive puzzle mechanics.
      • Created in 48 hours for GDS Micro-Jam 2025 in a a team of three with the theme "Micro"
      • Implemented player controller, player-environment interactions, and level design
      • Created all art and user interface assets using Aseprite
      • Used GitHub Projects to track progress and coordinate development
      Judge’s Choice for Best in Art`,
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/MicroMovers" },
        { label: "Itch.io", url: "https://dylanpatrascu.itch.io/micro-movers" }
      ]
    },
    {
      src: MarineBiologyVR,
      desc: "VR Marine Biology Capstone",
      header: "VR Marine Biology Capstone",
      paragraph: "All aboard!",
      date: "Sept 2024 – April 2025",
      tech: "Unity 3D, C#, ShaderGraph, GitHub, Jira, Agile",
      description: `A VR simulation for exploring marine ecosystems. Designed for aquariums and public installations, it features intuitive gesture-based controls and accessibility features.
    • Developed immersive minigames: satellite tagging, eDNA sampling puzzle, and BRUV deployment simulation
    • Wrote a foliage shader to simulate seaweed swaying
    • Implemented accessibility features, including captions for deaf users 
    • Used Agile workflows with GitHub Projects, storyboards, and UML diagrams
    • Collaborated with marine biology experts for educational accuracy`,
      links: [
        { label: "GitHub", url: "https://github.com/asm2002/Offshore-Marine-Protected-Areas" }
      ]
    },
    {
      src: CannonballRun,
      desc: "Cannonball Run Header",
      header: "Cannonball Run",
      paragraph: "Buckle up!",
      date: "Jan 2025 – April 2025",
      tech: "Unity 3D, C#, GitHub, Agile",
      description: `Based off of the real-life Cannonball Run race, we created a roguelike 3D racing game with branching tracks, where your goal is to make it to the other side of a cyberpunk America.
      • Implemented all acquirable upgrades, traffic, and car controller
      • Created a tree-based track system for progression and player choice
      • Built an adaptive difficulty system that scales AI and obstacles to game progression
      • Integrated garage stops with randomized upgrades to enhance replayability
      • Maintained project with GitHub and Agile principles`,
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/CannonballRun" }
      ]
    },
    {
      src: Shift,
      desc: "Shift Header",
      header: "Shift",
      paragraph: "Start your engines!",
      date: "Dec 2024",
      tech: "Unity 3D, C#, GitHub, Unity Editor Tools",
      description: `A street racing game with reactive audio systems.
      • Developed a realistic manual car controller with speedometer and tachometer user interface
      • Created a modular radio system using Scriptable Objects that changes tracks based on gear
      • Designed a prefab-based AI waypoint tool for modular traffic generation
      • Implemented a slow-motion mechanic with time-scaling and motion trails
      • Managed the full development pipeline with GitHub Projects`,
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/Shift" }
      ]
    },
    {
      src: PersonalWebsite,
      desc: "Personal Website Header",
      header: "Personal Website",
      paragraph: "Yes, this website.",
      date: "Feb 2025 – Present",
      tech: "HTML/CSS/JS, React, Vite, Cloudflare, GitHub",
      description: `A personal portfolio site built with React.
      • Built with React and Vite for a snappy, modern feel
      • Used APCA (Accessible Perceptual Contrast Algorithm) to randomize website theme while maintaining accessibility
      • Created a fully responsive layout for all screen sizes
      • Managed deployment and version control via GitHub and Cloudflare for domain hosting`,
      links: [
        { label: "Live Site", url: "https://dylanpatrascu.com/" },
        { label: "GitHub", url: "https://github.com/DylanPatrascu/DylanPatrascu.github.io" }
      ]
    },
    {
      src: LanguageLocalizationTool,
      desc: "Language Localization Tool",
      header: "Language Localization Tool",
      paragraph: "Bonjour!",
      date: "Nov 2024",
      tech: "Unity Editor, C#, GitHub",
      description: `A Unity editor tool for multi-language support.
      • Designed Scriptable Objects with two serialized lists for language keys/values
      • Built a custom Unity Editor window for translators
      • Ensured updates propagate across all languages automatically`,
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/LanguageLocalization" }
      ]
    }
  ];
  

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, i) => (
          <a><ProjectCard
            key={i}
            {...project}
            onClick={() => setSelectedProject(project)}
          /></a>
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
