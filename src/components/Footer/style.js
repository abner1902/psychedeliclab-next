import styled from 'styled-components'

export const Footer = styled.footer`
  background: black;
  color: white;
  margin-top: 100px;

  /* ❗ NUNCA usar height fixa no mobile */
  min-height: 600px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #FFD700;
    }
  }

  /* =========================
     DESKTOP
  ========================== */
  @media (min-width: 600px) {
    min-height: 400px;
    display: flex;
    position: relative;
  }

  /* =========================
     MOBILE FIX
  ========================== */
  @media (max-width: 767px) {
    margin-top: 48px !important;
    min-height: auto;

    .footer .row {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .footer__list,
    .follow {
      padding-left: 16px;
      padding-right: 16px;
    }

    .follow__item {
      padding-left: 10px; /* evita texto colado */
      padding-right: 10px;
    }

    background: black; /* garante fundo preto */

    .follow__item a,
    .link-icon {
      justify-content: flex-start;
      width: 100%;
      text-align: left;
    }
  }

  /* =========================
     LISTA PRINCIPAL
  ========================== */
  .footer__list {
    list-style-type: none;

    /* 🔧 MOBILE */
    padding-top: 40px;
    padding-left: 0;
    margin-bottom: 30px;

    li {
      margin-bottom: 8px;
    }

    /* DESKTOP mantém seu espaçamento */
    @media (min-width: 600px) {
      padding-top: 100px;
    }
  }

  .footer__strong {
    font-weight: 900;
    margin-bottom: 12px;
  }

  /* =========================
     FOLLOW / SOCIAL
  ========================== */
  .follow {
    margin-top: 30px;

    @media (min-width: 600px) {
      margin: 97px 90px;
    }
  }

  .follow__list {
    list-style-type: none;
    padding-left: 0;
  }

  .follow__item {
    margin-bottom: 10px;
  }

  /* 🔥 ISSO ARRUMA ÍCONE + TEXTO NO MOBILE + ALINHA À ESQUERDA */
  .follow__item a,
  .link-icon {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-start; /* alinhamento à esquerda */
    width: 100%; /* ocupa toda a largura */
    text-align: left; /* texto alinhado à esquerda */
  }

  /* =========================
     AJUSTES GERAIS
  ========================== */
  .follow__inline {
    list-style-type: none;
    padding-left: 0;
  }

  .follow__spacing {
    position: relative;
    margin-left: 45px;
    margin-top: -25px;
  }

  .logo__footer {
    @media (min-width: 600px) {
      top: 70px;
      left: 290px;
      position: relative;
    }
  }

  /* =========================
     CRÉDITOS NO RODAPÉ
  ========================== */
  .footer__credits {
    text-align: center;
    font-size: 14px;
    padding: 40px 20px 20px;
    color: white;

    @media (min-width: 600px) {
      padding: 60px 0 20px;
    }

    strong {
      font-weight: 700;
    }

    a {
      color: #fff;
      text-decoration: underline;
    }
  }
`
