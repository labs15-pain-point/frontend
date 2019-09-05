import React from 'react'

const VotingComponent = props => {
    console.log(props)
    return (
        <div>
            <button onClick={props.handleUpvote}>Upvote</button>
            <button onClick={props.handlePass}>Pass</button>
            <button onClick={props.handleDownvote}>Downvote</button>
        </div>
    )
}

export default VotingComponent