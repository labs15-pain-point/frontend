import React from 'react';
import LeaderboardItem from './LeaderboardItem'
import styled from 'styled-components'


const Leaderboard = props => {

    return (
        <div>
            <LeaderboardContainer>
                <h1>
                    Top 20 Generated Descriptions
                </h1>
                {props.leaderboard.map((highScore, idx) => {
                return <LeaderboardItem highScore ={highScore} idx = { idx + 1 }/>
                })}
            </LeaderboardContainer>
        </div>
    )
}


const LeaderboardContainer = styled.div`
    h1 {
        color: #880c23;
        font-weight: bold
        font-size: 3rem;
        text-align:center;
        font-size:3.5rem;

    }
    p {
        font-size:2rem;
        padding: 7px;
        margin: -3px;

        background-color: #FFFFFF;
    }
    width: 65%;
    margin-left: 18%;
    margin-right: 25%;
    font-size: 2.6rem;
    padding-top: 35px;
`

export default Leaderboard