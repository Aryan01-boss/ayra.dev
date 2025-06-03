import React, { useState, useEffect } from 'react';
import { Code, Briefcase, Award, ChevronRight, Sparkles } from 'lucide-react';
import './/..//styles//about.css'; 

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React.js', level: 90, color: 'skill-react' },
    { name: 'JavaScript', level: 85, color: 'skill-js' },
    { name: 'Node.js', level: 80, color: 'skill-node' },
    { name: 'Python', level: 75, color: 'skill-python' },
    { name: 'HTML/CSS/Tailwind', level: 88, color: 'skill-css' },
    { name: 'MongoDB', level: 70, color: 'skill-mongo' }
  ];

  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Feisty.in – E-commerce Store',
      period: '2024 – Present',
      description: 'Developed and maintained a fully responsive e-commerce website using WordPress and WooCommerce. Integrated secure payment gateways, implemented product catalog design, and optimized performance for better user experience and conversion.'
    },
    {
      title: 'Portfolio Website – Client Project',
      company: 'Personal Portfolio for a Creative Professional',
      period: '2024 - Present',
      description: 'Designed and developed a modern, fully responsive portfolio site using HTML, CSS, and JavaScript. Focused on clean UI/UX, project showcase, and professional branding. Ensured SEO optimization and cross-device compatibility.'
    },
    {
      title: 'College Management Web App – Academic Project',
      company: 'Faculty Dashboard System for College',
      period: '2024 - Present',
      description: 'Created a custom college project for a faculty member using HTML, CSS, JavaScript, and basic backend logic. The app included student management features, performance tracking, and login authentication system tailored for classroom use.'
    }
  ];

  const tabContent = {
    bio: (
      <div className="tab-content">
        <div className="bio-card">
          <div className="card-glow"></div>
          <div className="card-content">
            <div className="card-header">
              <Sparkles className="icon icon-purple" />
              <h3>About Me</h3>
            </div>
            <p className="bio-text">
              Passionate full-stack developer with 2+ years of experience creating digital experiences 
              that combine beautiful design with powerful functionality. I specialize in React.js, 
              Node.js, and modern web technologies.
            </p>
            <p className="bio-text">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in writing clean, 
              maintainable code that makes a difference.
            </p>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card stat-blue">
            <div className="stat-number">20+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card stat-green">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card stat-purple">
            <div className="stat-number">10+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="tab-content">
        <div className="section-header">
          <Code className="icon icon-blue" />
          <h3>Technical Skills</h3>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${skill.color} ${isVisible ? 'animate' : ''}`}
                  style={{ 
                    '--width': `${skill.level}%`,
                    '--delay': `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    experience: (
      <div className="tab-content">
        <div className="section-header">
          <Briefcase className="icon icon-green" />
          <h3>Work Experience</h3>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-glow"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-info">
                    <h4 className="experience-title">{exp.title}</h4>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="about-container">
      <div className="about-wrapper">
        {/* Header */}
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <h1 className="main-title">About Me</h1>
          <p className="main-subtitle">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`tab-navigation ${isVisible ? 'visible delay-300' : ''}`}>
          <div className="tab-container">
            {['bio', 'skills', 'experience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={`content-wrapper ${isVisible ? 'visible delay-500' : ''}`}>
          <div className="content-card">
            {tabContent[activeTab]}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default About;