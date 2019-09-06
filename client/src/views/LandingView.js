import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import useGet from '../functions/useGet'

import SmallExplantion from '../components/SmallExplanation'
import RandomDescription from '../components/RandomDescription'
import VotingComponent from '../components/VotingComponent'

const LandingView = props => {

    const [count, setCount] = useState(0)

    const randomURL = "https://ninenineproblems.herokuapp.com/api/random/"

    const company = useGet(randomURL, count)

    const upvoteURL = `https://ninenineproblems.herokuapp.com/api/companies/${company.id}/upvote`
  
    const downvoteURL = `https://ninenineproblems.herokuapp.com/api/companies/${company.id}/downvote`

    const handleUpvote = (e) => {
        e.preventDefault()
        axios.put(upvoteURL)
        setCount(count + 1)
      }
    
      const handlePass = e => {
        e.preventDefault()
        setCount(count + 1)
      }

      const handleDownvote = (e) => {
        e.preventDefault()
        axios.put(downvoteURL)
        setCount(count + 1)
      }


    return (
      <LandingContainer>  

        <ul className="navbar">
            <NavLink exact activeClassName='activeNavButton' to='/'>
              Home
            </NavLink>
            <br></br>
            <NavLink activeClassName='activeNavButton' to='/howitworks'>
              How It Works
            </NavLink>
            <br></br>
            <NavLink activeClassName='activeNavButton' to='/leaderboard'>
              Leaderboard
            </NavLink>
            <br></br>
            <NavLink activeClassName='activeNavButton' to='/about'>
              About Us
            </NavLink>
        </ul>

          <SmallExplantion />
          <br></br>
          <br></br>
          <RandomDescription company={company}/>
          <VotingComponent 
              id={company.id} 
              handleUpvote={handleUpvote} 
              handlePass={handlePass} 
              handleDownvote={handleDownvote}
          />
        </LandingContainer>
    )
}

const LandingContainer = styled.div`
    text-align: center;
    color: black;
`

export default LandingView