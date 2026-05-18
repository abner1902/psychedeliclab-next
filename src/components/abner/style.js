import styled from 'styled-components'

export const Abner = styled.div`
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .homeinfo {
    padding: 40px 25px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  .col-lg-6 {
    flex: 1;
    min-width: 280px;
  }

  .fronttext {
    h1 {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      margin-bottom: 20px;
      line-height: 1.1;
    }
    p {
      font-size: 15px;
      line-height: 1.65;
      color: #cccccc;
      margin: 0 0 16px;
    }
  }

  .player {
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: 12px;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  @media (max-width: 768px) {
    .homeinfo {
      padding: 24px 16px;
    }
    .row {
      flex-direction: column;
    }
    .col-lg-6 {
      width: 100%;
    }
    .fronttext h1 {
      font-size: 26px;
      text-align: center;
    }
    .fronttext p {
      text-align: center;
    }
  }
`