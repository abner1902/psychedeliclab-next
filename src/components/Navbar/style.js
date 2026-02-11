import styled from "styled-components"
import { NavbarToggler } from "reactstrap"

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

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 40px;
    width: auto;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 991px) {
    .navbar-collapse {
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      height: calc(100vh - 70px);
      background: #000;
      padding: 40px 25px;
      overflow-y: auto;
    }

    .navbar__unordered {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .navbar__unordered li {
      margin-bottom: 25px;
    }

    .navbar__unordered a {
      color: white;
      font-size: 22px;
      text-decoration: none;
      font-weight: 500;
    }
  }

  /* ===== DESKTOP ===== */
  @media (min-width: 992px) {
    .navbar__unordered {
      display: flex;
      list-style: none;
      gap: 25px;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    .navbar__unordered a {
      color: white;
      font-size: 15px;
      text-decoration: none;
      transition: 0.3s;
    }

    .navbar__unordered a:hover {
      opacity: 0.7;
    }
  }
`

export const NavbarTogglerStyled = styled(NavbarToggler)`
  border: 1px solid white !important;
  padding: 5px !important;

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
  }

  &:not(.collapsed) .navbar-toggler-icon {
    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' d='M6 6L24 24M6 24L24 6'/%3E%3C/svg%3E\") !important;
  }
`
