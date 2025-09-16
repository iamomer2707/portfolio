import React, { useState } from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data/portfolioData.jsx';

const ContactSection = styled.section`
  background-color: white;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  i {
    width: 50px;
    height: 50px;
    background-color: #3498db;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.1rem;
  }

  h4 {
    margin-bottom: 0.3rem;
    color: #2c3e50;
  }

  p {
    color: #555;
    margin: 0;
  }
`;

const ContactSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #ecf0f1;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    font-family: 'Poppins', sans-serif;

    &:focus {
      outline: none;
      border-color: #3498db;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const Contact = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link
      const emailBody = `
New contact form submission from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
Timestamp: ${new Date().toISOString()}
      `.trim();

      const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact: ${formData.subject}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Store in localStorage for record keeping
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      alert('Thank you for your message! Your email client should open now.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('There was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <ContactContent>
          <ContactInfo>
            <h3>Let's Connect</h3>
            <p>
              I am always interested in hearing about new opportunities, research collaborations, and exciting projects. 
              Whether you have questions about my work or want to discuss potential opportunities, feel free to reach out!
            </p>
            <ContactDetails>
              <ContactItem>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>{personalInfo.phone}</p>
                </div>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </ContactItem>
            </ContactDetails>
            <ContactSocial>
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
            </ContactSocial>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactSection>
  );
};

export default Contact;
