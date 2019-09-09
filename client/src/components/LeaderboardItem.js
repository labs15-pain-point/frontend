import React from 'react';
import styled from 'styled-components';

const LeaderboardItem = props => {
    return (
        <StyledLBoard>
            <StyledNum>
            <StyledIndex>
                { props.idx }.
            </StyledIndex>
            <StyledRate>
                <p>
                Rating: { (props.highScore.bayesrating * 100).toFixed(2) }%
                </p>
            </StyledRate>
            </StyledNum>
            <StyledDescr> 
                { props.highScore.description }
            </StyledDescr>
            <StyleSep>_______________________________________________________________________________________________</StyleSep>

        </StyledLBoard>
    )
}

const StyleSep = styled.p`
    text-align:center;
`

const StyledNum = styled.div`
    display:flex;
`

const StyledIndex = styled.div`
    width:5%;
    padding:2px;
    margin-top: 1%;
    text-align:center;
    margin-left:5%
    font-weight:bold;
    font-size:2.6rem
`

const StyledDescr = styled.div`
    width:90%
    margin-left:5%
    font-size:2.6rem;
`
const StyledRate = styled.div`
    margin-left:19%;
    width:40%;
    margin-top:10px
    margin-bottom:2px;
    font-size:2.2rem
`

const StyledLBoard = styled.div`
    position:relative;
    align-items: center;
    justify-content: space-evenly;
`

export default LeaderboardItem