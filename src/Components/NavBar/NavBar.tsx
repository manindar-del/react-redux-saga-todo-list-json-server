/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='containter'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/List">List</Link></li>
        <li><Link to="/Form">Form</Link></li>
     	</ul>
    
    </div>
  );
};

export default NavBar;
