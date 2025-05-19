import React from 'react'

function ProjectCard({ src, desc, header, tech, paragraph, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="hover" src={src} alt={desc} />
      <h3>{header}</h3>
      <p>{paragraph}</p>
      <p>{tech}</p>
    </div>
  );
}

export default ProjectCard;

