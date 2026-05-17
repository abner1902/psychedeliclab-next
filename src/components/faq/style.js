import styled from 'styled-components'

export const Faq = styled.section`
  color: white !important;
  padding: 0;

  .blockblack {
    background: rgba(0, 0, 0, 0.8);
    padding: 30px;
    /* MÁGICA AQUI: O box agora só ocupa o tamanho do texto */
    height: auto !important; 
    min-height: unset !important;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    
    /* Remove a altura fixa que estava bugando no Desktop também */
    @media (min-width: 600px) {
      height: auto !important;
    }
  }

  h6 {
    color: white;
    text-align: center;
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media (max-width: 767px) {
    h6 {
      font-size: clamp(18px, 4.8vw, 22px);
      margin-bottom: 24px;
    }

    .faq-content {
      margin-top: 0;
    }
  }
`