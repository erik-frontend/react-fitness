import React from 'react'

const ProgramBlock = ({title, description, link, isActive, icon, onClick}) => {
  return (
    <>
      <div className={`program-block ${isActive ? "active" : ""}`} onClick={onClick}>
        <div className="icon-plaseholder">
          <img src={icon} alt={title} />
        </div>
        <span className="program-title">{title}</span>
        <p className="program-text">{description}</p>
        <a href={link} className="program-link">Learn More</a>
      </div>
    </>
  )
}

export default ProgramBlock