import styled from 'styled-components'

export const Tuto = styled.div`
  .img-responsive {
    display: block;
    height: auto;
    position: relative;
    max-width: 100%;
    padding-top: 0;
    margin-bottom: 16px;
  }

  /* Ajuste para tablets e desktops */
  @media (min-width: 768px) {
    .img-responsive {
      padding-top: 33px;
    }
  }

  /* Garantia de espaçamento nos vídeos */
  .album {
    margin-bottom: 24px;
  }

  /* Bloco preto com fundo semi-transparente */
  .blockblack {
    background: rgba(0, 0, 0, 0.8);
    padding: 25px;
    border: none; /* ← Corrigido: removido o 'none' inválido */
    border-radius: 8px; /* Bônus: cantos levemente arredondados (opcional, mas bonito) */
  }

  /* Título principal */
  h3 {
    color: white;
    text-align: center; /* Centraliza o título (combina com seu design) */
    margin-bottom: 30px; /* Dá espaçamento entre título e vídeos */
    font-weight: bold;
  }

  /* Bônus: Deixa os vídeos responsivos em mobile */
  @media (max-width: 767px) {
    .album {
      margin-bottom: 16px;
    }
    
    .blockblack {
      padding: 15px;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }
`