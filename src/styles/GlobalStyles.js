import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #3498db;
  }

  .btn {
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-primary {
    background-color: #3498db;
    color: white;
  }

  .btn-primary:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background-color: white;
    color: #333;
    transform: translateY(-2px);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }

    section {
      padding: 60px 0;
    }

    .container {
      padding: 0 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .section-title {
      font-size: 1.8rem;
    }

    .btn {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  }
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  z-index: 10000;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  background-color: ${props => 
    props.type === 'success' ? '#27ae60' : 
    props.type === 'error' ? '#e74c3c' : '#3498db'
  };
  transform: translateX(100%);
  opacity: 0;

  &.show {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;
