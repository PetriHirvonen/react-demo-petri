import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
//import styled from 'styled-components';
import { ButtonContainer } from './Button'; 
import styled from 'styled-components';

class Navbar extends Component {
    render () {
        return (
            <div>
                {/* <h6> hello from Navbar.js</h6> */}
                {/* <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5"> */}
                <NavWrapper className="navbar navbar-expand-sm         navbar-dark px-sm-5">
                    <Link to='/contact'>
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                    
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/store" className="nav-link">products and services</Link>         
                        </li>
                    </ul>

                    <Link to='./storecart' className="ml-auto">
                        {/* Toteutus styled componentseilla: */}
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" /> my cart
                            </span>
                        </ButtonContainer>                        
                        {/* Vanha toteutus ilman styled components´ia:
                        <button>
                            <i className="fas fa-cart-plus" /> my cart
                        </button> */}
                    </Link>
                </NavWrapper>
                {/* </nav> */}
            </div>
        )
    }
}

//Huom. Koska määrittely on suoraan tässä filessä, ylhäällä pitää importoida "styled".
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`

// Tässä käytettiin suoraan ns. "styled components", ks. https://www.styled-components.com/docs/api#primary  
// Huom. myös filessä ylhäällä piti importoida "styled" 
// (Jos määrittely on erillisessä "Button.js" filessä, pitää ylhäällä importoida  { ButtonContainer }    )
// const ButtonContainer = styled.button`
//   text-transform: capitalize; 
//   font-size: 1.4rem;
//   background: transparent;
//   border: 0.05rem solid var(--lightBlue);
//   color: var(--lightBlue);
//   border-radius: 0.5rem;
//   padding: 0.2rem 0.5rem;
//   cursor: pointer;
//   margin: 0.2 rem 0.5.rem 0.2 rem 0 rem;
//   transition: all 0.5s ease-in-out;
//  &:hover{
//       background: var(--lightBlue);
//       color: var(--mainBlue);
//  }
//  &:focus{
//      outline: none;
//  }
// `


export default Navbar;
