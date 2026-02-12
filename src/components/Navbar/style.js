import styled from 'styled-components'
import { NavbarToggler } from 'reactstrap'

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
  transition: all 0.3s ease;

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
    transition: all 0.3s ease;
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

    .navbar__unordered .nav-link,
    .navbar__unordered .nav-link:link,
    .navbar__unordered .nav-link:visited,
    .navbar__unordered .nav-link:active,
    .navbar__unordered .nav-link:focus {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      font-weight: 700 !important;
      color: #ffffff !important;
      text-decoration: none !important;
      background: transparent !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      padding: 10px 0 !important;
      font-size: 14px !important;
      text-transform: uppercase !important;
      letter-spacing: 0.5px !important;
      position: relative;
      line-height: 1.2 !important;
      display: inline-block !important;
    }

    /* HOME – MESMO PADDING, MESMA LINHA, MESMA ALTURA */
    .navbar__unordered .nav-item a[href="/"],
    .navbar__unordered .nav-item a[href="/"]:link,
    .navbar__unordered .nav-item a[href="/"]:visited,
    .navbar__unordered .nav-item a[href="/"]:active,
    .navbar__unordered .nav-item a[href="/"]:focus {
      color: white !important;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      font-weight: 700 !important;
      text-decoration: none !important;
      padding: 10px 0 !important;
      font-size: 14px !important;
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
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      height: calc(100vh - 60px);
      background: rgba(0, 0, 0, 0.98);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .navbar-collapse.show {
      transform: translateX(0);
    }

    .navbar__unordered {
      list-style: none;
      display: flex !important;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .navbar__unordered .nav-item {
      margin-bottom: 30px;
    }

    .navbar__unordered .nav-link {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      font-weight: 700 !important;
      color: white !important;
      font-size: 24px !important;
      text-decoration: none !important;
      text-transform: uppercase !important;
      letter-spacing: 2px !important;
      padding: 12px 30px !important;
      display: inline-block;
      transition: all 0.3s ease;
      border-radius: 30px;
      background: transparent;
      line-height: 1.2 !important;
    }

    /* HOME MOBILE – MESMO TAMANHO, MESMO PESO, MESMO PADDING */
    .navbar__unordered .nav-item a[href="/"],
    .navbar__unordered .nav-item a[href="/"]:link,
    .navbar__unordered .nav-item a[href="/"]:visited,
    .navbar__unordered .nav-item a[href="/"]:active,
    .navbar__unordered .nav-item a[href="/"]:focus {
      color: white !important;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      font-weight: 700 !important;
      font-size: 24px !important;
      padding: 12px 30px !important;
      line-height: 1.2 !important;
      text-decoration: none !important;
      display: inline-block !important;
    }

    .navbar__unordered .nav-link:hover {
      background: rgba(255, 193, 7, 0.15);
      color: #ffc107 !important;
    }
  }
`

export const NavbarTogglerStyled = styled(NavbarToggler)`
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

  &:hover {
    border-color: #ffc107 !important;
    background: rgba(255, 193, 7, 0.1) !important;
  }
  &:focus {
    box-shadow: none !important;
    outline: none !important;
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

  .navbar-toggler-icon::before {
    top: -8px !important;
  }
  .navbar-toggler-icon::after {
    top: 8px !important;
  }

  &.collapsed .navbar-toggler-icon {
    background: white !important;
  }
  &.collapsed .navbar-toggler-icon::before {
    transform: rotate(0deg) !important;
    top: -8px !important;
  }
  &.collapsed .navbar-toggler-icon::after {
    transform: rotate(0deg) !important;
    top: 8px !important;
  }

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

export const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  @media (min-width: 992px) {
    display: none !important;
  }
`
