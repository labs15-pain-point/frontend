import React from 'react'
import downArrow from '../imgs/DownvoteRed.png'
import upArrow from '../imgs/UpvoteGreen.png'
import styled from 'styled-components'

const VotingComponent = props => {
    return (
        <div>
            <UpAndDown>
                <VoteContainer inputColor="#057057">
                    <p>Yes</p>
                    <StyledVote onClick={props.handleUpvote} src={upArrow} alt="up vote"/>
                </VoteContainer>
                <VoteContainer>
                    <p>No</p>
                    <StyledVote onClick={props.handleDownvote} src={downArrow} alt="down vote"/>
                </VoteContainer>
            </UpAndDown>
            <NeutralButton onClick={props.handlePass}>Pass</NeutralButton>
        </div>
        
    )
}

const NeutralButton = styled.div`
    width: 80px;
    padding: 10px 0px;
    border: 1px solid black;
    border-radius: 4px;
    text-align: center;
    font-size: 1.6rem;
    margin-left: 45%;
    margin-top: 25px;
    cursor: pointer;
    &:hover {
        font-size: 1.8rem;
        tranisiton: 1s;
    }

`


const StyledVote = styled.img`
    width: 75px;
    margin-top: -5%
    cursor: pointer;
    &:hover {
        width: 80px;
        transition: .05s;
    }
`

const VoteContainer = styled.div`
    margin: 0 3%;
    p {
        font-size: 2rem;
        color: ${props => props.inputColor || '#880C23'};
        margin-bottom: 3px;
        font-weight: bold;
    }
`
const UpAndDown = styled.div`
    display: flex;
    justify-content: center;
    
`

export default VotingComponent