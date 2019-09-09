import React from 'react'
import downArrow from '../imgs/DownvoteRed.png'
import upArrow from '../imgs/UpvoteGreen.png'
import styled from 'styled-components'

const VotingComponent = props => {
    console.log(props)
    return (
        <div>
            <StyledVote onClick={props.handleUpvote} src={upArrow} alt="up vote"/>
            <StyledVote onClick={props.handleDownvote} src={downArrow} alt="down vote"/>
            <div><button onClick={props.handlePass}>Pass</button></div>
        </div>
        
    )
}
const StyledVote = styled.img`
    width: 75px;
    margin: 1%
    &:hover {
        width: 77px;
        transition: .05s;
    }

`

export default VotingComponent