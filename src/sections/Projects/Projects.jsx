import { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import Modal from "../../sections/Modal/Modal";

import MicroMovers from "../../assets/micromovers.png";
import MicroMoversMenu from "../../assets/MicroMovers/Menu.png";
import MicroMoversInGame1 from "../../assets/MicroMovers/InGame.png";
import MicroMoversInGame2 from "../../assets/MicroMovers/InGame2.png";
import MicroMoversInGame3 from "../../assets/MicroMovers/InGame3.png";
import MicroMoversControls from "../../assets/MicroMovers/Controls.png";

import BreakingBob from "../../assets/breakingbob.png";
import BreakingBobInGame from "../../assets/BreakingBob/InGame.png";
import BreakingBobGameOver from "../../assets/BreakingBob/GameOver.png";
import BreakingBobMainMenu from "../../assets/BreakingBob/MainMenu.png";
import BreakingBobWin from "../../assets/BreakingBob/Win.png";

import MarineBiologyVR from "../../assets//Marine/Menu.png";
import MarineBoat from "../../assets//Marine/Boat.png";
import MarineBRUV from "../../assets//Marine/BRUV.png";
import MarineeDNA from "../../assets//Marine/eDNA.png";
import MarineTagging from "../../assets//Marine/Tagging.png";

import CannonballRun from "../../assets/cannonballrun.png";
import CannonballRunBoss from "../../assets/CannonballRun/Boss.png";
import CannonballRunControls from "../../assets/CannonballRun/Controls.png";
import CannonballRunIngame from "../../assets/CannonballRun/Ingame.png";
import CannonballRunRain from "../../assets/CannonballRun/Rain.png";
import CannonballRunShop from "../../assets/CannonballRun/Shop.png";
import CannonballRunStats from "../../assets/CannonballRun/Stats.png";


import Shift from "../../assets/Shift/Menu.png";
import ShiftInGame1 from "../../assets/Shift/Ingame.png";
import ShiftInGame2 from "../../assets/Shift/Ingame2.png";
import ShiftLeaderboard from "../../assets/Shift/Leaderboard.png";


import PersonalWebsite from "../../assets/website.png";

import LanguageLocalizationTool from "../../assets/Localization/Localization.png";
import LanguageLocalizationMenu1 from "../../assets/Localization/Menu1.png";
import LanguageLocalizationMenu2 from "../../assets/Localization/Menu2.png";

import VolleyBirds from "../../assets/Volleybirds/MainMenu.png";
import VolleyBirdsControls from "../../assets/Volleybirds/Controls.png";
import VolleyBirdsMenu from "../../assets/Volleybirds/Menu.png";
import VolleyBirdsGo from "../../assets/Volleybirds/Go.png";
import VolleyBirdsInGame from "../../assets/Volleybirds/InGame.png";
import VolleyBirdsGameOver from "../../assets/Volleybirds/GameOver.png";
import VolleyBirdsOutOfBounds from "../../assets/Volleybirds/OutOfBounds.png";




function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      src: VolleyBirds,
      desc: "Volleybirds Header",
      header: "VolleyBirds",
      paragraph: "A nice game of volleyball goes out of control.",
      date: "May 2025",
      tech: "Unity 2D, C#, GitHub, Procreate",
      description: `A nice game of volleyball goes out of control and turns into a competitive game of keep it up! Grab a friend (or play alone) and see how high you can get the ball in under a minute without dropping it!\n
        • Placed 18th out of 100+ submissions in a 72-hour game jam with the theme of "Birds" and the limitation of "Under a Minute"
        • Developed a 2D local co-op game in Unity with a team of four, where two players rally a ball and reach the highest possible height
        • Implemented both player controllers using one script and an enumeration
        • Created custom game logic that uses a mix of rally length between players and the highest height to determine a score
        • Made dynamic collision behaviour between players and the ball, based on camera position
        • Created 2D assets for the user interface and in-game obstacles`,
        media: [
          { type: "video", src: "https://www.youtube.com/embed/TZaQkwYhlzE?si=1ZlFjJh7maGZnD1S", alt: "VolleyBirds Demo" },
          { type: "image", src: VolleyBirdsMenu, alt: "VolleyBirds Main Menu Screenshot" },
          { type: "image", src: VolleyBirdsControls, alt: "VolleyBirds Controls Screenshot" },
          { type: "image", src: VolleyBirdsGo, alt: "VolleyBirds In Game Screenshot" },
          { type: "image", src: VolleyBirdsInGame, alt: "Breaking Bob In Game Screenshot 2" },
          { type: "image", src: VolleyBirdsOutOfBounds, alt: "Breaking Bob In Game Screenshot 3" },
          { type: "image", src: VolleyBirdsGameOver, alt: "VolleyBirds Game Over Screenshot" }
        ],
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/Volleybirds" },
        { label: "Itch.io", url: "https://munchiepunchie.itch.io/volleybirds" }
      ]
    },
    {
      src: BreakingBob,
      desc: "Breaking Bob Header",
      header: "Breaking Bob",
      paragraph: "He built this city, and he can tear it down.",
      date: "March 2025",
      tech: "Unity 2D, C#, GitHub",
      description: `Knock down buildings and tear the city apart as Bob the construction worker reaches his breaking point. Destroy cops, cars, buildings, and anything in your way trying to clear the city before the timer runs out.\n
        • Created in 6 days for LoJam x GDS 2025 in a a team of three with the theme "Break the System"
        • Developed a dynamic NavMesh system allowing enemies to adapt to destructible environments in real time
        • Built an interactive particle system that amplified game feedback and immersion\n
        Judge’s Choice – Best in Game Mechanics & Fun
        People’s Choice Award`,
        media: [
          { type: "video", src: "https://www.youtube.com/embed/gGK-AZF0Eag?si=LkJ9U5AZ7Kc4ZACI", alt: "Breaking Bob Demo" },
          { type: "image", src: BreakingBobInGame, alt: "Breaking Bob In Game Screenshot" },
          { type: "image", src: BreakingBobMainMenu, alt: "Breaking Bob Main Menu Screenshot" },
          { type: "image", src: BreakingBobGameOver, alt: "Breaking Bob Game Over Screenshot" },
          { type: "image", src: BreakingBobWin, alt: "Breaking Bob Win Screenshot" }
        ],
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/WreckingGame" },
        { label: "Itch.io", url: "https://jkrupa.itch.io/breaking-bob" }
      ]
    },
    {
      src: MicroMovers,
      desc: "Micro Movers Header",
      header: "Micro Movers",
      paragraph: "Think and shrink!",
      date: "Jan 2025",
      tech: "Unity 2D, C#, Aseprite, GitHub",
      description: `Race to collect furniture from the house to your truck!\n
      • Created in 48 hours for GDS Micro-Jam 2025 in a a team of three with the theme "Micro"
      • Implemented player controller, player-environment interactions, and level design
      • Created all art and user interface assets using Aseprite
      • Used GitHub Projects to track progress and coordinate development\n
      Judge’s Choice – Best in Art`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/ZbuGAsC2zwc?si=xhvsmvvRRj90bENn", alt: "Micro Movers Demo" },
        { type: "image", src: MicroMoversMenu, alt: "Micro Movers Menu Screenshot" },
        { type: "image", src: MicroMoversInGame1, alt: "Micro Movers In Game Screenshot" },
        { type: "image", src: MicroMoversInGame2, alt: "Micro Movers In Game Screenshot" },
        { type: "image", src: MicroMoversInGame3, alt: "Micro Movers In Game Screenshot" },
        { type: "image", src: MicroMoversControls, alt: "Micro Movers Controls Screenshot" }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/MicroMovers" },
        { label: "Itch.io", url: "https://dylanpatrascu.itch.io/micro-movers" }
      ]
    },
    {
      src: MarineBiologyVR,
      desc: "Offshore Adventures",
      header: "Offshore Adventures",
      paragraph: "All aboard!",
      date: "Sept 2024 – April 2025",
      tech: "Unity 3D, C#, ShaderGraph, GitHub",
      description: `A VR simulation for exploring marine ecosystems. Designed for aquariums and public installations, it features intuitive gesture-based controls and accessibility features.\n
      • Developed immersive minigames: satellite tagging, eDNA sampling puzzle, and BRUV deployment simulation
      • Wrote a foliage shader to simulate seaweed swaying
      • Implemented accessibility features, including captions for deaf users 
      • Used Agile workflows with GitHub Projects, storyboards, and UML diagrams
      • Collaborated with marine biology experts for educational accuracy`,
    media: [
      { type: "video", src: "https://www.youtube.com/embed/FckA1Y2PDAs?si=frQO2HBKCImtW8GX", alt: "Offshore Adventures Demo" },
      { type: "image", src: MarineBRUV, alt: "Offshore Adventures Menu Screenshot" },
      { type: "image", src: MarineBoat, alt: "Offshore Adventures In Game Screenshot" },
      { type: "image", src: MarineTagging, alt: "Offshore Adventures In Game Screenshot" },
      { type: "image", src: MarineeDNA, alt: "Offshore Adventures In Game Screenshot" }
    ],
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/VRMarineBiologyCapstone" }
      ]
    },
    {
      src: CannonballRun,
      desc: "Cannonball Run Header",
      header: "Cannonball Run",
      paragraph: "Buckle up!",
      date: "Jan 2025 – April 2025",
      tech: "Unity 3D, C#, GitHub, Agile",
      description: `Based off of the real-life Cannonball Run race, we created a roguelike 3D racing game with branching tracks, where your goal is to make it to the other side of a cyberpunk America.\n
      • Implemented all acquirable upgrades, traffic, and car controller
      • Created a tree-based track system for progression and player choice
      • Built an adaptive difficulty system that scales AI and obstacles to game progression
      • Integrated garage stops with randomized upgrades to enhance replayability
      • Maintained project with GitHub and Agile principles`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/ooe8_yafjek?si=_QBi3XL07-ZlYVy3", alt: "Cannonball Run Demo" },
        { type: "image", src: CannonballRunIngame, alt: "Cannonball Run In Game Screenshot 1" },
        { type: "image", src: CannonballRunBoss, alt: "Cannonball Run Boss Fight Screenshot" },
        { type: "image", src: CannonballRunShop, alt: "Cannonball Run Shop Screenshot" },
        { type: "image", src: CannonballRunRain, alt: "Cannonball Run In Game Screenshot 2" },
        { type: "image", src: CannonballRunControls, alt: "Cannonball Run Controls Screenshot" },
        { type: "image", src: CannonballRunStats, alt: "Cannonball Run Stats Screenshot" }

      ],
      links: [
        { label: "GitHub", url: "https://github.com/DylanPatrascu/CannonballRun" },
        { label: "Itch.io", url: "https://munchiepunchie.itch.io/cannonball-run" }

      ]
    },
    {
      src: Shift,
      desc: "Shift Header",
      header: "Shift",
      paragraph: "Start your engines!",
      date: "Dec 2024",
      tech: "Unity 3D, C#, GitHub, Unity Editor",
      description: `A street racing game with reactive audio systems.\n
      • Developed a realistic manual car controller with speedometer and tachometer user interface
      • Created a modular radio system using Scriptable Objects that changes tracks based on gear
      • Designed a prefab-based AI waypoint tool for modular traffic generation
      • Implemented a slow-motion mechanic with time-scaling and motion trails
      • Managed the full development pipeline with GitHub Projects`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/KCo9-pqe1tc?si=lqK4Ybxq-MEQnVF5", alt: "Shift Demo" },
        { type: "image", src: ShiftInGame1, alt: "Shift In Game Screenshot 1" },
        { type: "image", src: ShiftLeaderboard, alt: "Shift Leaderboard Screenshot" },
        { type: "image", src: ShiftInGame2, alt: "Shift In Game Screenshot 2" },
        { type: "image", src: Shift, alt: "Shift Menu Screenshot" }


      ],
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
      tech: "React, Vite, Cloudflare, GitHub",
      description: `A personal portfolio site built with React.\n
      • Built with React and Vite for a snappy, modern feel
      • Used APCA (Accessible Perceptual Contrast Algorithm) to randomize website theme while maintaining accessibility
      • Created a fully responsive layout for all screen sizes
      • Managed deployment and version control via GitHub and Cloudflare for domain hosting`,
      media: [
        { type: "image", src: PersonalWebsite, alt: "Website Screenshot 1" }
      ],
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
      description: `A Unity editor tool for multi-language support.\n
      • Designed Scriptable Objects with two serialized lists for language keys/values
      • Built a custom Unity Editor window for translators
      • Ensured updates propagate across all languages automatically`,
      media: [
        { type: "video", src: "https://www.youtube.com/embed/S-lSnJZbdgY?si=BFcZHAQ-6eQqRq2c", alt: "Language Localization Demo" },
        { type: "image", src: LanguageLocalizationTool, alt: "Language Localization Screenshot 1" },
        { type: "image", src: LanguageLocalizationMenu1, alt: "Language Localization Screenshot 2" },
        { type: "image", src: LanguageLocalizationMenu2, alt: "Language Localization Screenshot 3" }

      ],
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
