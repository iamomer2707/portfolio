import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData.jsx';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s both;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.8;
  animation: fadeInUp 1s ease 0.4s both;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.6s both;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeInUp 1s ease 0.8s both;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #333;
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  const { personalInfo } = portfolioData;

  const handleNavClick = (sectionId) => {
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
    <HeroSection id="home">
      <HeroContainer>
        <HeroTitle>{personalInfo.name}</HeroTitle>
        <HeroSubtitle>{personalInfo.title}</HeroSubtitle>
        <HeroDescription>{personalInfo.description}</HeroDescription>
        
        <HeroButtons>
          <button 
            className="btn btn-primary"
            onClick={() => handleNavClick('contact')}
          >
            Get In Touch
          </button>
          <a 
            href={personalInfo.resumeUrl} 
            className="btn btn-secondary"
            download
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
        </HeroButtons>
        
        <SocialLinks>
          <SocialLink href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href={personalInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </SocialLink>
          <SocialLink href={personalInfo.socialLinks.email}>
            <i className="fas fa-envelope"></i>
          </SocialLink>
        </SocialLinks>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
