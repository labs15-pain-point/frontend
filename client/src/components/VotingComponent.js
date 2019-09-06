import React from 'react'
import downArrow from '../imgs/downarrow.png'
import upArrow from '../imgs/uparrow.png'
import styled from 'styled-components'

const VotingComponent = props => {
    console.log(props)
    return (
        <div>
            <StyledVote onClick={props.handleUpvote} src={upArrow} alt="up-vote"/>
            <button onClick={props.handlePass}>Pass</button>
            <StyledVote onClick={props.handleDownvote} src={downArrow} alt="down-vote"/>
        </div>
    )
}
const StyledVote = styled.img`
    width: 50px;
    &:hover {
        width: 75px;
        transition: .2s;
    }

`

export default VotingComponent