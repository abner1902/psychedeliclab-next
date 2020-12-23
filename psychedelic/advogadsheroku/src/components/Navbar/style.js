import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { NavbarToggler } from 'reactstrap'

export const Navbar = styled.nav`

    background-color: black;
    .logo{
      color: #8b4513;
    }.searchbar{
      margin: 0px 10px;
    }
`

export const NavbarTogglers = styled(NavbarToggler)`
  border-color: white;
  border-width: 3px;
  padding: 0px 3px;
  color: #8b4513;
  background-color: white;
  

`
export const Divisor = styled.div` 

`
export const SearchIcons = styled(SearchIcon)`

  color: black;
  border-width: 10px;
  background-color: white;
  position: relative;
  margin: 0px -30px;

`
export const Hr = styled.hr`

  @media only screen and (min-width: 600px) {
    display: none;
    margin: 0px -4px;
    color: #8b4513;
   
}
`
export const Nav = styled.ul`

  color: #8b4513;
  float: right;
  @media only screen and (min-width: 600px) {
  margin-left: 0auto;
  margin-right: 0auto;
}
`

export const Naviga = styled.li`

  margin:      0px 25px;
  display:     inline;

@media only screen and (max-width: 600px) {
   font-size:   30px;
   color:       #8b4513;
   display:     table;
   
   
   
}
`
export const Navigaa = styled.a`

   color:     #8b4513;

`
