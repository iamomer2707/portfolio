import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData.jsx';

const CertificationsSection = styled.section`
  background-color: #f8f9fa;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CertIcon = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

const CertContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
`;

const CertIssuer = styled.p`
  font-weight: 600;
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const CertDescription = styled.p`
  color: #555;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <CertificationsSection id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <CertificationsGrid>
          {certifications.map((cert) => (
            <CertificationCard key={cert.id}>
              <CertIcon>
                <i className={cert.icon}></i>
              </CertIcon>
              <CertContent>
                <h3>{cert.title}</h3>
                <CertIssuer>{cert.issuer}</CertIssuer>
                <CertDescription>{cert.description}</CertDescription>
              </CertContent>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </div>
    </CertificationsSection>
  );
};

export default Certifications;
