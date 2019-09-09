import React from 'react';

const LeaderboardItem = props => {
    return (
        <div>
            <p>{ props.highScore.description } </p>
        </div>
    )
}

export default LeaderboardItem