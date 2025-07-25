import { useState } from "react";
import styles from "../Experience/ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";
import Modal from "../../sections/Modal/Modal";

import xpLogo from "../../assets/xplogo.png";
import lojamLogo from "../../assets/lojamlogo.png";
import gdsLogo from "../../assets/gdslogo.png";
import minijamLogo from "../../assets/minijamlogo.png"
import whimsideLogo from "../../assets/whimsidelogo.png"
import unannouncedLogo from "../../assets/videogame.png"
import leagueLogo from "../../assets/leaguelogo.png"

function Community() {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      logo: whimsideLogo,
      company: "Whimside",
      title: "Playtester",
      location: "Remote",
      dates: "June 2025",
      tech: "Steam, Godot, Google Suite",
      description: [
        `• Playtested in-development builds to identify bugs and glitches
        • Documented and reported technical issues using Google Forms
        • Provided detailed feedback on gameplay, UI/UX, and overall player experience
        • Highlighted strengths and areas for improvement in game mechanics, visuals, and pacing`
      ]
    },
    {
      logo: unannouncedLogo,
      company: "Unanounced",
      title: "Playtester",
      location: "Remote",
      dates: "June 2025",
      tech: "Steam, Unreal Engine, Google Suite",
      description: [
        `• Playtested in-development builds to identify bugs and glitches
        • Documented and reported technical issues using Google Forms
        • Provided detailed feedback on gameplay, UI/UX, and overall player experience
        • Highlighted strengths and areas for improvement in game mechanics, visuals, and pacing`
      ]
    },
    {
      logo: xpLogo,
      company: "XP Game Summit",
      title: "Volunteer",
      location: "Toronto, Canada",
      dates: "June 2025",
      tech: "Microsoft Office Suite, Computer Hardware",
      description: [
        `• Assisted with various event operations as needed
        • Greeted guests and managed entry at the door
        • Disassembled and packed computer hardware post-event
        • Troubleshot and resolved a Microsoft login issue on-site`
      ]
    },
    {
      logo: minijamLogo, 
      company: "Mini Jam 184",
      title: "Participant",
      location: "Remote",
      dates: "May 2025",
      tech: "Unity 2D, C#, GitHub, Procreate",
      description: [
        `• Theme: Birds | Limitation: Under a Minute
        • Placed 18th out of 100+ submissions
        • Submitted VolleyBirds, a Unity 2D game created in 72 hours
        • Took on dual roles of programmer and artist
        • Contributed core gameplay logic, animations, and art assets`
      ]
    },
    {
      logo: lojamLogo,
      company: "London Game Jam 2025",
      title: "Participant and Winner",
      location: "London, Canada",
      dates: "March 2025",
      tech: "Unity 2D, C#, GitHub",
      description: [
        `• Theme: Break the System
        • Awarded Judge's Choice - Best in Game Mechanics & Fun
        • Voted People's Choice Award by community
        • Submitted Breaking Bob, a "hack and slash" created in 7 days
        • Designed and implemented enemy AI and particle effects`
      ]
    },
    {
      logo: gdsLogo, 
      company: "GDS Micro-Jam 2025",
      title: "Participant and Winner",
      location: "London, Canada",
      dates: "January 2025",
      tech: "Unity 2D, C#, Aseprite, GitHub",
      description: [
        `• Theme: Micro
        • Received Judge's Choice - Best in Art
        • Submitted Micro Movers, a fast-paced 2D puzzle game
        • Took on dual roles as programmer and pixel artist
        • Handled development of player-world interactions, UI, and level design`
      ]
    },
    {
      logo: leagueLogo,
      company: "League of Legends: Swarm Event",
      title: "Attendee and Playtester",
      location: "Toronto, Canada",
      dates: "July 2024",
      tech: "C++, Google Suite",
      description: [
        `• Attended Riot Games’ Toronto Swarm event as a community participant and early playtester
        • Engaged with Riot developers in discussions about game design and upcoming features
        • Playtested an unreleased game mode and provided hands-on feedback during live sessions`
      ]
    } 
  ];
    
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Involvement</h1>
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

export default Community;
