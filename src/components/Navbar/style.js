import styled from 'styled-components'

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #000;
  z-index: 9999;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #222;
  transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease, transform 0.3s ease;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    padding: 0 40px;
    margin: 0 auto;
  }

  .navbar {
    width: 100%;
    padding: 0;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    padding: 0;
    margin-right: 0;
  }

  img {
    height: 35px;
    width: auto;
    transition: background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
  }

  /* ========= DESKTOP ========= */
  @media (min-width: 992px) {
    .navbar-collapse {
      display: flex !important;
      justify-content: flex-end !important;
    }

    .navbar__unordered {
      display: flex;
      list-style: none;
      gap: 25px;
      margin: 0;
      padding: 0;
      margin-left: auto !important;
    }

    .navbar__unordered .nav-link {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      font-weight: 700 !important;
      color: #ffffff !important;
      text-decoration: none !important;
      background: transparent !important;
      border: none !important;
      padding: 10px 0 !important;
      font-size: 14px !important;
      text-transform: uppercase !important;
      letter-spacing: 0.5px !important;
      position: relative;
      line-height: 1.2 !important;
      display: inline-block !important;
    }

    .navbar__unordered .nav-link:hover {
      color: #ffc107 !important;
    }

    .navbar-toggler {
      display: none !important;
    }
  }

  /* ========= MOBILE ========= */
  @media (max-width: 991px) {
    height: 60px;

    .container {
      padding: 0 20px;
    }

    .navbar-collapse {
      display: none !important;
    }
  }
`

export const MobileBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (min-width: 992px) {
    display: none;
  }
`

export const MobileDrawer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: min(280px, 82vw);
  height: 100vh;
  padding: 80px 0 32px;
  background: rgba(10, 10, 10, 0.94);
  border-right: 1px solid rgba(255, 193, 7, 0.2);
  box-shadow: 8px 0 32px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  animation: slideIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  .mobile-menu__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mobile-menu__link {
    display: block;
    width: 100%;
    padding: 18px 28px 18px 16px;
    text-align: right;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
    transition: color 0.2s ease, background 0.2s ease;

    &:hover {
      color: #ffc107;
      background: rgba(255, 193, 7, 0.08);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`

// MUDANÇA AQUI: Trocamos styled(NavbarToggler) por styled.button
export const NavbarTogglerStyled = styled.button`
  width: 48px !important;
  height: 48px !important;
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-radius: 8px !important;
  background: transparent !important;
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  transition: all 0.3s ease !important;
  z-index: 10001 !important;
  cursor: pointer !important;
  outline: none !important;

  &:hover {
    border-color: #ffc107 !important;
    background: rgba(255, 193, 7, 0.1) !important;
  }

  .navbar-toggler-icon {
    width: 24px !important;
    height: 2px !important;
    background: white !important;
    position: relative !important;
    display: block !important;
    transition: all 0.3s ease !important;
  }

  .navbar-toggler-icon::before,
  .navbar-toggler-icon::after {
    content: '' !important;
    position: absolute !important;
    width: 24px !important;
    height: 2px !important;
    background: white !important;
    left: 0 !important;
    transition: all 0.3s ease !important;
  }

  .navbar-toggler-icon::before { top: -8px !important; }
  .navbar-toggler-icon::after { top: 8px !important; }

  /* Animação do X quando aberto */
  &:not(.collapsed) .navbar-toggler-icon {
    background: transparent !important;
  }
  &:not(.collapsed) .navbar-toggler-icon::before {
    transform: rotate(45deg) !important;
    top: 0 !important;
    background: #ffc107 !important;
  }
  &:not(.collapsed) .navbar-toggler-icon::after {
    transform: rotate(-45deg) !important;
    top: 0 !important;
    background: #ffc107 !important;
  }

  @media (min-width: 992px) {
    display: none !important;
  }
`