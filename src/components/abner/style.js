import styled from 'styled-components'

export const Abner = styled.div`
  && {
    width: 100%;
    padding: 40px 0; 
    color: white;
    height: auto !important;

    .container {
      max-width: 1200px !important;
      margin: 0 auto !important;
      padding: 0 15px;
      display: flex;
      justify-content: center;
    }

    .blockblack {
      background: rgba(0, 0, 0, 0.85) !important;
      border-radius: 15px; 
      padding: 35px;
      width: 95% !important;
      max-width: 1140px; 
      margin: 0 auto;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 15px 35px rgba(0,0,0,0.4);

      .row {
        margin: 0 !important;
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .fronttext {
      padding-right: 20px; 
      
      h1 {
        font-size: 40px; 
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
        line-height: 1.1;
      }
      p {
        font-size: 15px;
        line-height: 1.6;
        color: #cccccc;
      }
    }

    .player-wrapper {
      width: 100%;
      max-width: 476px; 
      border-radius: 10px;
      overflow: hidden;
    }

    /* --- AJUSTE PARA MOBILE (VOLTANDO AO CLÁSSICO) --- */
    @media (max-width: 991px) {
      padding: 20px 0 !important;

      .blockblack {
        width: 100% !important;
        padding: 25px 20px;

        .row {
          flex-direction: column !important;
          text-align: center !important; 
        }
      }

      .fronttext {
        padding-right: 0;
        margin-bottom: 25px;
        
        h1 {
          /* Voltando para uma linha só e tamanho harmônico */
          font-size: 26px; 
          text-align: center; 
          width: 100%;
          max-width: 100%; 
          margin-left: 0;
          margin-right: 0;
          white-space: nowrap; /* Garante que não quebre */
        }

        p {
          text-align: center; 
        }
      }

      .player-wrapper {
        margin: 0 auto; 
      }
    }
  }
`