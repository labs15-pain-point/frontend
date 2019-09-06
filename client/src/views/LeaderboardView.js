//import statements
import React from 'react'
import useGet from '../functions/useGet'
import LeaderboardComponent from '../components/LeaderboardComponent'

//prop to return with top 20 company descriptions
const Leaderboard = props => {
    const LeaderboardURL = "https://ninenineproblems.herokuapp.com/api/leaderboard"
    const leaderboard = useGet(LeaderboardURL)
    return (
        <div>
            <LeaderboardComponent leaderboard = { leaderboard }/>
        </div>
    )
}

export default Leaderboard