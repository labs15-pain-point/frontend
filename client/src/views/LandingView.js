import React, { useState } from 'react'
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
          <SmallExplantion />
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
    width: 75%;
    margin-left: 12.5%;
    padding-bottom: 100px;
    @media (max-width: 1000px) {
      padding-top: 60px;
    }
    @media (max-width: 800px) {
      padding-top: 0;
    }
`

export default LandingView