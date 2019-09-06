import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Header = props => {
    return (
        <StyledNav>
            <div classname="logo">
                <h1>99 Problems</h1>
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
    align-items: baseline;
    margin-bottom: 50px;
    padding: 0 3% 0 3%;
    h1 {
        color: white;
        font-weight: bold;
    }
    a {
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        &:hover {
            background: #ddd;
            color: black;
        }
    }

`




export default Header