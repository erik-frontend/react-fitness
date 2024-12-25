import React from 'react'

const ProgramBlock = ({title, description, link, isActive, icon}) => {
  return (
    <>
      <div className={`program-block ${isActive ? "active" : ""}`}>
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