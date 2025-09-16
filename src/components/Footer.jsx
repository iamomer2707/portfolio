import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  p {
    margin-bottom: 0.5rem;

    &:last-child {
      opacity: 0.7;
      font-size: 0.9rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterContent>
          <p>&copy; 2025 Syed Omer Hussain. All rights reserved.</p>
          <p>Built with React and Styled Components</p>
        </FooterContent>
      </div>
    </FooterSection>
  );
};

export default Footer;
