import React from 'react';

const LeaderboardItem = props => {
    return (
        <div>
            <p>{props.idx}. - { props.highScore.description }</p>
        </div>
    )
}

export default LeaderboardItem