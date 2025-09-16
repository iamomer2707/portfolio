import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData.jsx';

const AboutSection = styled.section`
  background-color: #f8f9fa;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const AboutCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    min-height: auto;
  }
`;

const AboutIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const AboutContent = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    color: #555;
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  background-color: #ecf0f1;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #2c3e50;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: white;
    transform: translateY(-2px);
  }
`;

const About = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      icon: 'fas fa-tools',
      title: 'Technologies & Tools',
      skills: skills.technologies
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Core Competencies',
      skills: skills.competencies
    },
    {
      icon: 'fas fa-language',
      title: 'Languages',
      skills: skills.languages
    }
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <AboutGrid>
          {skillCategories.map((category, index) => (
            <AboutCard key={index}>
              <AboutIcon>
                <i className={category.icon}></i>
              </AboutIcon>
              <AboutContent>
                <h3>{category.title}</h3>
                <SkillTags>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </SkillTags>
              </AboutContent>
            </AboutCard>
          ))}
        </AboutGrid>
      </div>
    </AboutSection>
  );
};

export default About;
