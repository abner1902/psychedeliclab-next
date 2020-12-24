import styled from "styled-components"
import { NavbarToggler } from "reactstrap"

export const Nav = styled.nav`
    font-size:   30px;
    color:        white;
    background-color:  black;
    position: sticky;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    border-top: 0;
    
     @media only screen and (min-width: 600px) {
        
 }a{
     color: white;
 }
.navbar{
    
}.navbar__unordered {
    color: white;
    position: relative;
    top: 10px;
    font-size: 30px;
    @media only screen and (min-width: 600px) {
    display: flex;
    font-size: 13px;
    right: 0px;
    padding: 0px 5px;    
    top: 0px;
}
}
.navbar__item {
    list-style-type: none;
    color: white;
    /* white-space: nowrap; */
    @media (min-width: 600px) {
    margin-left: 15px;
    
    span {
        display: none;
        @media (min-width: 600px) {
            border: solid 2px;
            border-color: #B1A27A;
            padding: 3px 4px;    
            border-radius: 10px;
            display: inline;
            
        }
        @media (min-width: 808px) {
            border: solid 2px;
            border-color: white;
            padding: 3px 4px;    
            border-radius: 10px;
            /* display: none; */
            
        }
    }
    
    .navbar__item--number{
        border: none;
        display: none;
        
        @media (min-width: 608px) {
        }
    }
    }.navbar__enter{
    background: #B1A27A;
    color:   #B1A27A;
    list-style-type: none;
    }.navbar__button{
    padding: 0px 56px;
    border-radius: 27px;
    margin: 20px -27px;
    background: green;
    color:  #B1A27A;
    @media (min-width: 600px) {
        display: none;
    } 
    }.navbar__dash{
    }.logomob{
    color:  #B1A27A;
    }
    }
`
export const NavbarTogglers = styled(NavbarToggler)`
    border-color: white;
    border-width: 3px;
    padding: 0px 3px;
    color: white;
    background-color: white;
  
`