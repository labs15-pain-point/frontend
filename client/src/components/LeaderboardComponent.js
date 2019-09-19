// imports
import React from 'react';
import { Link } from 'react-router-dom'
import LeaderboardItem from './LeaderboardItem'
import styled from 'styled-components'


const Leaderboard = props => {
    // returns a map of the descriptions + their place in list, sorted by rating
    // uses LeaderboardItem 
    return (
        <TotalContainer>
            <LeaderboardContainer>
                {props.titlePage ? <h1>{props.titlePage}</h1> : <h1>Top 20 Generated Descriptions</h1>}
                {props.leaderboard.map((highScore, idx) => {
                return <LeaderboardItem highScore ={highScore} idx = { idx + 1 }/>
                })}
                
            </LeaderboardContainer>
            {props.titlePage ? <div></div> : <Link to="/all">See All Descriptions</Link>}
        </TotalContainer>
    )
}

const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        font-size: 3rem;
        margin-bottom: 50px;
        color: #880c23;
        &:hover {
            font-size: 3.4rem;
            transition: .3s;
        }
    }
`


const LeaderboardContainer = styled.div`
    h1 {
        color: #880c23;
        font-weight: bold
        font-size: 3rem;
        text-align:center;
        font-size:5rem;
        text-shadow: 1px 1px #545454;

    }
    p {
        font-size:2rem;
        padding: 7px;
        margin: -3px;

        background-color: #FFFFFF;
    }
    width: 65%;
    // margin-left: 18%;
    // margin-right: 25%;
    font-size: 2.6rem;
    padding-top: 35px;
    margin-bottom: 50px;
`

export default Leaderboard