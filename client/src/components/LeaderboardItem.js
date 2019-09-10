import React from 'react';
import styled from 'styled-components';

const LeaderboardItem = props => {
    return (
        <StyledLBoard>
            <StyledDescr> 
                <p><StyledBold>{props.idx}.</StyledBold> { props.highScore.description }</p>
                <p><StyledBold>Rating: { (props.highScore.bayesrating * 100).toFixed(2) }%</StyledBold></p>
            </StyledDescr>
        </StyledLBoard>
    )
}

const StyledBold = styled.strong`
    font-size: 1.8rem;
    
`

const StyledDescr = styled.div`
    width:100%
    font-size:2.6rem;
    padding-bottom: 25px;
    text-align: justify;
`

const StyledLBoard = styled.div`
    position:relative;
    align-items: center;
    justify-content: space-evenly;
    z-index:-1; 
    border-bottom: 1px solid black;
    margin-top: 25px;
`

export default LeaderboardItem