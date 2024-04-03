// TopMenu.js
import React from 'react';
import './TopMenu.css';
import tesco from './tesco.jpg';


import { Link } from 'react-router-dom'; // Import
const TopMenu = () => {
  return (
    <div className="top-menu">
       <div>
        <img src={tesco}  alt="Tesco Store stocks"/>
      </div >
      <div className='home'>
      <ul className='menu-list'>
        <li><Link to="/home" className="menu-link">Home</Link></li>
        <li><Link to="/registration" className="menu-link">Registration</Link></li>
        <li>Logout</li>
      </ul>
    </div>
    </div>
  );
};

export default TopMenu;
