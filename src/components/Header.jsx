import React, { useState } from 'react';
import './/..//styles//Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo">ARYA.DEV</div>
      
      {/* Desktop Navigation */}
      <nav className="header-nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PROJECTS</a></li>
        </ul>
      </nav>
      
      {/* Desktop Hire Me Button */}
      <div className="header-auth">
        <button className="hire-me-button">HIRE ME</button>
      </div>

      {/* Hamburger Menu */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" onClick={closeMenu}>HOME</a></li>
          <li><a href="#" onClick={closeMenu}>ABOUT</a></li>
          <li><a href="#" onClick={closeMenu}>PROJECTS</a></li>
        </ul>
        <button className="hire-me-button" onClick={closeMenu}>HIRE ME</button>
      </div>
    </header>
  );
}

export default Header;