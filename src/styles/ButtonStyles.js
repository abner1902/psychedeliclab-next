import styled from 'styled-components';

export const ButtonLuxury = styled.a`
  background-color: #ffb800 !important;
  color: #000 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  border-radius: 100px;
  font-weight: 800;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-decoration: none !important;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(255, 184, 0, 0.2);
  font-family: inherit;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 184, 0, 0.4);
    background-color: #f2ae00 !important;
    color: #000 !important;
    text-decoration: none !important;
  }

  svg {
    font-size: 18px;
    transform: rotate(-10deg); /* Inclinação do aviãozinho da foto */
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 13px;
    width: 100%;
    max-width: 280px;}
`;
