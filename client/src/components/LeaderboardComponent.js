import React from 'react';
import LeaderboardItem from './LeaderboardItem'
import styled from 'styled-components'


const Leaderboard = props => {
    console.log(props.leaderboard)
    return (
        <LeaderboardContainer>
            <h1>These are the Top 20 Company Ideas!</h1>
            {props.leaderboard.map((highScore, idx) => {
                return <LeaderboardItem highScore ={highScore} idx = {idx} />
            })}
        </LeaderboardContainer>
    )
}

const LeaderboardContainer = styled.div`
    text-align: center;
    color: green;
`

export default Leaderboard