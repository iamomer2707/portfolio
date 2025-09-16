import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData.jsx';

const EducationSection = styled.section`
  background-color: white;
`;

const EducationTimeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #3498db;

    @media screen and (max-width: 768px) {
      left: 30px;
    }
  }
`;

const EducationItem = styled.div`
  display: flex;
  margin-bottom: 3rem;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 60px;
  }
`;

const EducationDate = styled.div`
  flex: 0 0 150px;
  font-weight: 600;
  color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0;
    background-color: #3498db;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
  }
`;

const EducationContent = styled.div`
  flex: 1;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: white;

    @media screen and (max-width: 768px) {
      left: -20px !important;
      right: auto !important;
      border-right-color: white !important;
      border-left-color: transparent !important;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
    padding: 1.5rem;
  }
`;

const EducationSchool = styled.p`
  font-weight: 600;
  color: #3498db;
  margin-bottom: 1rem;
`;

const EducationDescription = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const EducationAchievements = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Achievement = styled.span`
  background-color: #ecf0f1;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #2c3e50;
`;

const Education = () => {
  const { education } = portfolioData;

  return (
    <EducationSection id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <EducationTimeline>
          {education.map((edu) => (
            <EducationItem key={edu.id}>
              <EducationDate>{edu.date}</EducationDate>
              <EducationContent>
                <h3>{edu.degree}</h3>
                <EducationSchool>{edu.school}</EducationSchool>
                <EducationDescription>{edu.description}</EducationDescription>
                <EducationAchievements>
                  {edu.achievements.map((achievement, index) => (
                    <Achievement key={index}>{achievement}</Achievement>
                  ))}
                </EducationAchievements>
              </EducationContent>
            </EducationItem>
          ))}
        </EducationTimeline>
      </div>
    </EducationSection>
  );
};

export default Education;
