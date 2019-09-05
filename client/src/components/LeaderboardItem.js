import React from 'react';

const LeaderboardItem = props => {
    console.log(props)
    return (
        <div>
            <p>{props.idx}. - { props.highScore.description }</p>
        </div>
    )
}

export default LeaderboardItem