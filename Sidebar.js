import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = (item) => {
    if (selectedItem === item) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setSelectedItem(item);
  };

  return (
    <div className="sidebar">
      <h5>Insert Store Setup</h5>
      <ul>
        <li onMouseEnter={() => toggleDropdown('Availability')} onMouseLeave={() => toggleDropdown('')}>
      
        <span style={{ paddingRight: '88px' }}>Availability</span>

          {selectedItem === 'Availability' && isOpen ? '⯈' : '⯈'}
          {selectedItem === 'Availability' && isOpen && (
            <ul className="dropdown">
              <li><Link to="/counts">Counts</Link></li>
            {/*<li><Link to="/stockexception">Stock Exception</Link></li> */}
            </ul>
          )}
        </li>
        <li onMouseEnter={() => toggleDropdown('stock sur plus')} onMouseLeave={() => toggleDropdown('')}>
        <span style={{ paddingRight: '68px' }}>Stock SurPlus</span>
          {selectedItem === 'stock sur plus' && isOpen ? '⯈' : '⯈'}
          {selectedItem === 'stock sur plus' && isOpen && (
            <ul className="dropdown">
              <li>Food Donation</li>
              <li><Link to="/TescoFDS">Tesco FDS</Link></li>
              <li><Link to="/TescoFDSV2">Tesco FDSV2</Link></li>
              <li><Link to="/TescoFDSV2Pilot">Tesco FDSV2Pilot</Link></li>
            </ul>
          )}
        </li>
      
        <li onMouseEnter={() => toggleDropdown('DRT')} onMouseLeave={() => toggleDropdown('')}>
        <span style={{ paddingRight: '135px' }}>DRT</span>
          {selectedItem === 'DRT' && isOpen ? '⯈' : '⯈'}
          {selectedItem === 'DRT' && isOpen && (
          <ul className="dropdown">
              <li><Link to="/Dd">DD</Link></li>
              <li><Link to="/Rfs">RFS</Link></li>
          </ul>
        )}
        </li>
      </ul>
    
      <h5>View store setup</h5>
      <ul className='view'>
      <li><Link to="/view">View</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
