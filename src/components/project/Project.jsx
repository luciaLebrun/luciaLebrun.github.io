import React from 'react';
import './project.css';

const Project = ({titre, git, desc, tags}) => {

  return (
    <a href={git} className="link-project" target="_blank">
      <div className='project'>
        {tags.map(tag =>(
            <span>{tag}</span>
        ))}
        <h2>{titre}</h2>
        <p className='project-desc'>{desc}</p>
      </div>
    </a>


  );
}

export default Project;