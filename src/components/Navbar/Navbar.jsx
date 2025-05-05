import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logo, links, toggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={logo} alt="Logo" />
        </div>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <li key={index} className={link.label === 'Contact' ? 'highlighted' : ''}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        
        <div className='navbar-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          <img src={toggle} className='toggle' alt="Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;