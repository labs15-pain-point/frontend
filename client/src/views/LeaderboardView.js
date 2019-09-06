//import statements
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useGet from '../functions/useGet'
import LeaderboardComponent from '../components/LeaderboardComponent'

//prop to return with top 20 company descriptions
const Leaderboard = props => {
    const LeaderboardURL = "https://ninenineproblems.herokuapp.com/api/leaderboard"
    const leaderboard = useGet(LeaderboardURL)
    console.log(leaderboard)
    return (
        <div>
            <NavLink exact activeClassName='activeNavButton' to='/'>
              Home
            </NavLink> 
            <LeaderboardComponent leaderboard = { leaderboard }/>
        </div>
    )
}

export default Leaderboard