import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logoWhite from '../imgs/99LogoWithTextWhite.png'


const Header = props => {
    return (
        <StyledNav>
            <div classname="logo">
                <img src={logoWhite} alt="99 Logo White" width="250"/>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
                <NavLink to="/howitworks">How It Works</NavLink>
                <NavLink to="/about">About Us</NavLink>
            </div>
        </StyledNav>
      
    )
}

const StyledNav = styled.div`
    background-color: #880C23;
    position: fixed;
    top: 0; 
    width: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    padding: 1% 3% 1% 3%;
    opacity: .9;
    a {
        color: #ffffff;
        text-align: center;
        padding: 14px ;
        text-decoration: none;
        font-size: 2.4rem;
        font-weight: bold;
        &:hover {
            background: #545454;
            color: black;
        }
    }
    img {
        width: 35%;
    }

`

export default Header