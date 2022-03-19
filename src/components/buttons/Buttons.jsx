import React from 'react';
import './buttons.css';
import { Link } from 'react-router-dom';

const Buttons = ({text, link}) => {

  return (
    <div className='container_button'>
      <Link className='buttons' to={link}>
          {text}
      </Link>
    </div>

  );
}

export default Buttons;