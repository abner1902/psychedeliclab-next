import styled from 'styled-components'

export const Faq = styled.section`
  color: white !important;
  padding: 0;

  .faq-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    color: #ffb800;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: white;
    font-size: 1.25rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0;
  }

  .blockblack {
    background: rgba(0, 0, 0, 0.8);
    padding: 30px;
    height: auto !important; 
    min-height: unset !important;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    .blockblack {
      padding: 20px;
    }
  }
`