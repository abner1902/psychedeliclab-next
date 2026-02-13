import styled from 'styled-components'

export const About = styled.section`
  .homeinfo {
    padding: 140px 0 60px 0;
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
    
    .row {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  .fronttext {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    padding: 30px;
    border: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 20px;
    max-width: 550px;
    width: 100%;
    z-index: 2;

    @media (min-width: 992px) {
      max-width: 100%;
    }

    h1 {
      font-size: clamp(31px, 5vw, 51px);
      color: white;
      margin-bottom: 15px;
      line-height: 1.2;
    }
    p {
      color: #ccc;
      font-size: 15px;
      line-height: 1.6;
    }
  }

  .player {
    width: 100%;
    max-width: 600px;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.6);

    @media (min-width: 992px) {
      max-width: 100%;
    }
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }

  .col-lg-6, .col-md-12, .col-xs-12 {
    padding: 0 15px;
  }

  @media (min-width: 992px) {
    .row {
      align-items: stretch;
    }
    .fronttext {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    .homeinfo { padding-top: 90px; }
    .row { flex-direction: column; text-align: center; }
    .fronttext, .player { max-width: 100% !important; width: 100% !important; margin: 0 auto 30px !important; }
  }

  @media (max-width: 768px) {
    .homeinfo { padding-top: 90px; }
    .row { flex-direction: column; text-align: center; }
    .fronttext { padding: 20px; max-width: 100% !important; }
    .player { max-width: 100% !important; }
    .col-lg-6, .col-md-12 { padding: 0 15px 20px; }
  }

  .overlay {
    z-index: 100;
    position: relative;
  }
`
