import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logoWhite from '../imgs/99LogoWithTextWhite.png'


const DesktopHeader = props => {
    return(
        <StyledNav>
        <div classname="logo">
            <img src={logoWhite} alt="99 Logo White"/>
        </div>
        <div className="test">
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
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    z-index: 2;


    
    padding: 1% 3% 1% 3%;
    opacity: .9;
   
    @media (max-width: 500px) {
        padding-bottom: 50px;
    }
    @media (max-width: 800px) {
        align-items: center;
    }
    .test {
        display: flex;
        width: 60%;
        @media (max-width: 800px) {
            margin-left: -30%;
            align-items: center;
        }
        @media(max-width: 500px) {
            display: none;
        }
    }
    a {
        color: #ffffff;
        text-align: center;
        padding: 14px;
        text-decoration: none;
        font-size: 2.4rem;
        font-weight: bold;
        @media (max-width: 800px) {
            font-size: 1.6rem;
            padding: 5px;
            
        }
        &:hover {
            background: #545454;
            color: black;
        }
    }
    img {
        width: 35%;
        @media (max-width: 800px) {
            width: 50%;
        }
    }

`

export default DesktopHeader