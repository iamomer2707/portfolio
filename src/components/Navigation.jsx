import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    left: ${props => props.isOpen ? '0' : '-100%'};
    top: 70px;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.95);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
  }
`;

const NavItem = styled.li`
  margin: ${props => props.isMobile ? '1rem 0' : '0'};
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.active ? '#3498db' : '#333'};
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #3498db;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #3498db;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.3s;
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar scrolled={scrolled}>
      <NavContainer>
        <NavLogo href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          Syed Omer Hussain
        </NavLogo>
        
        <NavMenu isOpen={isMenuOpen}>
          {navItems.map(item => (
            <NavItem key={item.id} isMobile={window.innerWidth <= 768}>
              <NavLink
                href={`#${item.id}`}
                active={activeSection === item.id}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
        
        <NavToggle 
          className={isMenuOpen ? 'active' : ''}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </NavToggle>
      </NavContainer>
    </Navbar>
  );
};

export default Navigation;
