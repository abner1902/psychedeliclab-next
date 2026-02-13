import styled from 'styled-components'

export const TelegramWrapper = styled.div`
  padding: 60px 0 80px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .blockblack {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    padding: 40px 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 1200px;
    margin: 0 auto;
  }

  .telegram-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 40px;
    max-width: 800px;
    margin: 0 auto;
  }

  .telegram-icon-wrapper {
    margin-bottom: 25px;
    
    svg {
      filter: drop-shadow(0 0 15px rgba(255, 193, 7, 0.4));
      transition: all 0.3s ease;
    }
  }

  .telegram-card:hover .telegram-icon-wrapper svg {
    filter: drop-shadow(0 0 20px rgba(255, 193, 7, 0.8));
    transform: scale(1.05);
  }

  .telegram-description {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: #ccc;
    margin-bottom: 35px;
    max-width: 600px;
    font-weight: 400;
  }

  .telegram-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #ffc107;
    color: #000;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 18px;
    padding: 16px 40px;
    border-radius: 50px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      background: #ffca2c;
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(255, 193, 7, 0.4);
      
      svg {
        transform: translateX(6px);
      }
    }
  }

  @media (max-width: 768px) {
    .telegram-card {
      padding: 40px 25px;
    }
    .telegram-description {
      font-size: 16px;
      margin-bottom: 30px;
    }
    .telegram-button {
      padding: 14px 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    .telegram-description br {
      display: none;
    }
  }
`
