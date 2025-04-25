import React from 'react'

function ProjectCard({ src, desc, header, paragraph, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="hover" src={src} alt={desc} />
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

export default ProjectCard;

