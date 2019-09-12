//import statements
import React from 'react'
import useGet from '../functions/useGet'
import LeaderboardComponent from '../components/LeaderboardComponent'

import styled from 'styled-components'

//prop to return with top 20 company descriptions
const AllCompanyView = props => {
    const LeaderboardURL = "https://ninenineproblems.herokuapp.com/api/leaderboard/all"
    const leaderboard = useGet(LeaderboardURL)
    const titlePage = 'All 100 Companies'

    return (
        <div>
            {leaderboard.length < 100 ? <Loading>LOADING...</Loading> : <LeaderboardComponent titlePage ={titlePage} leaderboard = { leaderboard } />} 
        </div>
    )
}

const Loading = styled.p`
    font-size: 4.5rem;
    text-align: center;
    margin-top: 20%;
    font-weight: bold;
    color: #880c23;
`

export default AllCompanyView