import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Smartphone, Globe, Database, Filter, Star, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      stars: 124,
      views: 2840,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern productivity app with drag-and-drop functionality, real-time collaboration, and project management features.',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://taskflow-app.netlify.app',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      stars: 89,
      views: 1560,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      category: 'frontend',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubUrl: 'https://github.com/username/weather-dashboard',
      liveUrl: 'https://weather-insights.netlify.app',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      stars: 67,
      views: 980,
      status: 'completed'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication, real-time messaging, and content management.',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
      githubUrl: 'https://github.com/username/social-api',
      liveUrl: null,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      stars: 156,
      views: 3240,
      status: 'completed'
    },
    {
      id: 5,
      title: 'Mobile Finance App',
      description: 'React Native app for personal finance management with expense tracking, budgeting tools, and financial insights.',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'Firebase', 'Chart.js'],
      githubUrl: 'https://github.com/username/finance-app',
      liveUrl: 'https://expo.dev/@username/finance-tracker',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      stars: 203,
      views: 4120,
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing, context awareness, and multiple conversation modes.',
      category: 'fullstack',
      technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'WebSocket'],
      githubUrl: 'https://github.com/username/ai-chat',
      liveUrl: 'https://ai-assistant-demo.herokuapp.com',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      stars: 78,
      views: 1890,
      status: 'in-progress'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Smartphone },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '2rem',
      color: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    wrapper: {
      maxWidth: '80rem',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      transform: isVisible ? 'translateY(0)' : 'translateY(2.5rem)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 1s ease-out'
    },
    mainTitle: {
        fontSize: '3.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        lineHeight: '1.2',
        color: 'transparent',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: 'rgb(255, 255, 255)'
      },
    subtitle: {
      color: '#94a3b8',
      fontSize: '1.25rem',
      maxWidth: '40rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    filterSection: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '4rem',
      transform: isVisible ? 'translateY(0)' : 'translateY(2.5rem)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 1s ease-out 300ms'
    },
    filterContainer: {
      backdropFilter: 'blur(16px)',
      borderRadius: '1rem',
      padding: '0.6rem 0.5rem',
      border: '1px solid rgb(255, 255, 255)',
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
    },
    filterButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontSize: '0.875rem',
      fontWeight: '900',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'transparent',
      color: '#94a3b8',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      whiteSpace: 'nowrap'
      
    },
    activeFilter: {
      border: '1px solid rgb(255, 255, 255)',
      color: '#ffffff',
      transform: 'translateY(-2px)'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '2rem',
      transform: isVisible ? 'translateY(0)' : 'translateY(2.5rem)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 1s ease-out 600ms'
    },
    projectCard: {
      backdropFilter: 'blur(16px)',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      border: '1px solid rgb(255, 255, 255)',
      transition: 'all 0.4s ease',
      position: 'relative',
      cursor: 'pointer',
      width: '40vh',
      
    },
   
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'transform 2s ease'
    },
    projectImageHover: {
      transform: 'scale(1.1)'
    },
    projectContent: {
      padding: '1.5rem'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      margin: '0 0 0.5rem 0',
      color: '#ffffff'
    },
    projectStatus: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    statusCompleted: {
      background: 'rgba(34, 197, 94, 0.2)',
      color: '#4ade80',
      border: '1px solid rgba(34, 197, 94, 0.3)'
    },
    statusInProgress: {
      background: 'rgba(251, 191, 36, 0.2)',
      color: '#fbbf24',
      border: '1px solid rgba(251, 191, 36, 0.3)'
    },
    projectDescription: {
      color: '#cbd5e1',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontSize: '0.9rem'
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },
    techTag: {
      background: 'rgba(100, 116, 139, 0.2)',
      color: '#e2e8f0',
      padding: '0.25rem 0.75rem',
      borderRadius: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: '500',
      border: '1px solid rgba(100, 116, 139, 0.3)'
    },
    projectStats: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      color: '#94a3b8'
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    projectLinks: {
      display: 'flex',
      gap: '0.75rem'
    },
    linkButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      flex: 1,
      justifyContent: 'center'
    },
    githubButton: {
      background: 'rgba(100, 116, 139, 0.2)',
      color: '#e2e8f0',
      border: '1px solid rgba(100, 116, 139, 0.3)'
    },
    liveButton: {
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
      color: '#ffffff',
      border: 'none'
    },
    disabledButton: {
      background: 'rgba(100, 116, 139, 0.1)',
      color: '#64748b',
      border: '1px solid rgba(100, 116, 139, 0.2)',
      cursor: 'not-allowed'
    },
    icon: {
      width: '1rem',
      height: '1rem'
    },
    filterIcon: {
      width: '1.25rem',
      height: '1.25rem'
    }
  };

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <div
        style={{
          ...styles.projectCard,
          ...(isHovered ? styles.projectCardHover : {}),
          animationDelay: `${index * 100}ms`
        }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div style={{ overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              ...styles.projectImage,
              ...(isHovered ? styles.projectImageHover : {})
            }}
          />
        </div>
        
        <div style={styles.projectContent}>
          <div style={styles.projectHeader}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <span
              style={{
                ...styles.projectStatus,
                ...(project.status === 'completed' ? styles.statusCompleted : styles.statusInProgress)
              }}
            >
              {project.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
          
          <p style={styles.projectDescription}>{project.description}</p>
          
          <div style={styles.projectStats}>
            <div style={styles.statItem}>
              <Star style={styles.icon} />
              <span>{project.stars}</span>
            </div>
            <div style={styles.statItem}>
              <Eye style={styles.icon} />
              <span>{project.views}</span>
            </div>
          </div>
          
          <div style={styles.techStack}>
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} style={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
          
          <div style={styles.projectLinks}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.linkButton,
                ...styles.githubButton
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(100, 116, 139, 0.3)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(100, 116, 139, 0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Github style={styles.icon} />
              Code
            </a>
            
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.linkButton,
                  ...styles.liveButton
                }}
                onMouseEnter={(e) => {
                 
                  e.target.style.transform = 'translateY(-1px)';
                 
                }}
                onMouseLeave={(e) => {
                 
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <ExternalLink style={styles.icon} />
                Live Demo
              </a>
            ) : (
              <div style={{ ...styles.linkButton, ...styles.disabledButton }}>
                <ExternalLink style={styles.icon} />
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.mainTitle}>My Projects</h1>
          <p style={styles.subtitle}>
            Showcasing my passion for creating innovative solutions and beautiful user experiences
          </p>
        </div>

        {/* Filter Section */}
        <div style={styles.filterSection}>
          <div style={styles.filterContainer}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  style={{
                    ...styles.filterButton,
                    ...(activeFilter === category.id ? styles.activeFilter : {})
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== category.id) {
                      e.target.style.color = '#ffffff';
                      e.target.style.background = 'rgba(100, 116, 139, 0.2)';
                      e.target.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== category.id) {
                      e.target.style.color = '#94a3b8';
                      e.target.style.background = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <IconComponent style={styles.filterIcon} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
            <Filter style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No projects found</h3>
            <p>Try selecting a different category filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;