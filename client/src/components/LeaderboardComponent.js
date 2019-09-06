import React from 'react';
import LeaderboardItem from './LeaderboardItem'
import styled from 'styled-components'
import ReactScrollableList from 'react-scrollable-list'


const Leaderboard = props => {

    return (
        <LeaderboardContainer>
            <h1>These are the Top 20 Company Ideas!</h1>
            {props.leaderboard.map((highScore, idx) => {
                return <LeaderboardItem highScore ={highScore} idx = {idx + 1} />
            })}
        </LeaderboardContainer>
    )
}


const LeaderboardContainer = styled.div`
    h1 {
        text-align: center;
    }
    text-align: center;
    color: green;
    width: 75%;
    margin-left: 12.5%;
    text-align: left;
`

export default Leaderboard