import styled from 'styled-components'

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.75);
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(32px, 5vw, 48px);
  color: white;
  text-align: center;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #ffc107;
    margin: 20px auto 0;
  }

  @media (max-width: 767px) {
    font-size: clamp(22px, 6vw, 28px);
    margin-bottom: var(--title-mb, 24px);
    letter-spacing: 1px;
  }
`

export const SectionSubtitle = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: #aaa;
  text-align: center;
  margin-bottom: var(--subtitle-mb, 60px);

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.55;
    margin-bottom: var(--subtitle-mb, 32px);
    padding: 0 16px;
  }
`

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px 30px;
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease;
  text-align: center;

  &:hover {
    border-color: rgba(255, 193, 7, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 193, 7, 0.1);
  }

  @media (max-width: 767px) {
    padding: 24px 16px;
    border-radius: 16px;
  }
`
