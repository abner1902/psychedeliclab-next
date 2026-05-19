import styled from 'styled-components'

export const Playlist = styled.div`
  .img-responsive {
    display: block;
    height: auto;
    max-width: 100%;
  }

  .blockblack {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 25px;
  }

  h2 {
    color: #ffb800;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }

  h3 {
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  iframe {
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  /* Mobile responsivo */
  @media (max-width: 768px) {
    .blockblack {
      padding: 15px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`