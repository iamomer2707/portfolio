import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData.jsx';

const ProjectsSection = styled.section`
  background-color: white;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 2rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: #ecf0f1;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #2c3e50;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #3498db;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <i className={project.icon}></i>
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectTech>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
