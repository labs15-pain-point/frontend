import React from 'react';
import LeaderboardItem from './LeaderboardItem'
import styled from 'styled-components'


const Leaderboard = props => {

    return (
        <LeaderboardContainer>
            <h1>Top 20 Generated Descriptions</h1>
            {props.leaderboard.map((highScore, idx) => {
                return <LeaderboardItem highScore ={highScore} idx = {idx + 1}/>
            })}
        </LeaderboardContainer>
    )
}


const LeaderboardContainer = styled.div`
    h1 {
        text-align: center;
        color: #880c23;
        font-weight: bold
        font-size: 400%
        text-shadow: 1px 1px #545454;
    }
    p {
        border: 3px solid black;
        padding: 7px;
        margin: -3px;
        box-shadow: inset 0 0 2px 2px #888
        font-size: 125%
        border: 10px solid #09547c;
        background-color: hsl(0, 0%, 33%, .25);
    }
    width: 65%;
    margin-left: 18%;
    margin-right: 25%;
`

export default Leaderboard