import React from 'react';
import '../styles/HeroSection.css';
import profileAvatar from '../assets/profile_avtar.png';
import heroBackground from '../assets/hero_background.png';

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="avatar-block">
          <div className="avatar-image-container">
            <img src={profileAvatar} alt="Aryan Kanwadiya" className="avatar-image" />
          </div>
          <div className="avatar-info">
            <div>
            <h2>ARYAN KANWADIYA</h2>
            <p>Full Stack Developer</p>
            </div>
            <div className="barcode-container">
            <div className="barcode">|||||| |||||||| |||</div>
            <div className="downlode-cv-btn">Downlode CV</div>
            </div>
            <p className="tagline">I design. I develop. I deliver.</p>
          </div>
        </div>
      </div>

      {/* Center Panel */}
      <div className="center-panel">
        <div className="main-image-container">
          <div className="red-background-shape">
            <div className=" shape shape1"></div>
            <div className=" shape shape2"></div>
            <div className=" shape shape3"></div>
            <div className=" shape shape4"></div>
            <div className=" shape shape5"></div>
            <div className=" shape shape6"></div>
            <div className=" shape shape7"></div>
            <div className=" shape shape8"></div>
            <div className=" shape shape9"></div>
            <div className=" shape shape10"></div>
            <div className=" shape shape11">
            <div className='arow'
          > ↑ </div>
            </div>
          </div>
          <img src={heroBackground} alt="Main Character" className="main-character-image" />
        </div>
        <div className="digital-text">
           <p className=' para para1'>HEY THERE!</p>
           <p className=' para para2'>WELCOME TO</p>
           <p className=' para para3'>MY DIGITAL</p>
           <p className=' para para4'>SPACE</p>
        </div>
      </div>

      {/* Bottom Left Block */}
      <div className="bottom-left-block">
        <div className="shape12 shape"></div>
        <div className="shape13 shape"></div>
        <p className='bottom-left-block-p1'>
         I'm Aryan – a Full Stack Developer. I build modern, high-performing websites and web apps that convert ideas into digital reality.
        </p>

        <div className="bottom-left-block-p2">- - - - - - -   - -------- -  -    -   - ------ - - - -----  - -    -----</div>
        <div className="bottom-left-block-p2">- - - ------   - - -- - - ------- - -  -    -   - ------ -----  - -    -----</div>

        <p className="barcode-2">||| ||| | ||| ||| | ||| ||| | ||| ||| | ||| ||| ||| | ||| ||| | ||| ||| | ||| ||| | ||</p>
        <div className="bottom-left-block-lower">
        <p className='bottom-left-block-p3'>Let’s build something amazing together.</p>
        <button className="now-more-button">NOW MORE</button>
        </div>
      </div>

      {/* Bottom Right Block */}
      <div className="bottom-right-block">
        <div className="skills-tags">
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">JAVASCRIPT</span>
          <span className="skill-tag">REACT JS</span>
          <span className="skill-tag">TAILWIND CSS</span>
          <span className="skill-tag">FIGMA</span>
          
        </div>
        <div className="barcode-3">||| ||| | ||| ||| | |||</div>
        <div className="build-text">
          Let's build something amazing together.
          <button className="arrow-button">→</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
