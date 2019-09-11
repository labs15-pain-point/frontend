import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Hamburger from './Hamburger'

const MobileHeader = props => {

    return(
        <StyledNav openMenu={props.collapsed}>
            <Hamburger toggleNav={props.toggleNav}/>
            <div className="test">
                <NavLink onClick={props.toggleNav} to="/">Home</NavLink>
                <NavLink onClick={props.toggleNav} to="/leaderboard">Leaderboard</NavLink>
                <NavLink onClick={props.toggleNav} to="/howitworks">How It Works</NavLink>
                <NavLink onClick={props.toggleNav} to="/about">About Us</NavLink>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    background-color: #880C23;
    position: fixed;
    top: 0; 
    width: 100%; 
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    padding: 1% 3% 2% 3%;
    opacity: 1;
    transition: height 0.2s ease;
    z-index: 2;
    height: ${props => {
        if (props.openMenu === false) {
            return '100%;'
        } else {
            return '8%'
        }
    }}
    }
    .test {
        display: ${props => {
            if (props.openMenu === false) {
                return 'flex'
            } else {
                return 'none'
            }
        }}
        flex-direction: column;
        margin-left: -8%;
        margin-top: 30%;
    }
    a {
        color: #ffffff;
        text-align: center;
        padding: 14px;
        text-decoration: none;
        font-size: 4rem;
        font-weight: bold;
    }

`

export default MobileHeader