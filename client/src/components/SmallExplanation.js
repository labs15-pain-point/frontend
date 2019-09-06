import React from 'react'
import styled from 'styled-components'

const SmallExplanation = props => {
    return (
        <Explanation>
            <h1>99 PROBLEMS</h1>
            <p>Welcome to 99 Problems! Thinking of moon-shot start-up ideas has always been difficult.  
               Allow us to do the thinking for you.  Sift through our AI computer generated company descriptions 
               and you decide whether it is something you’d like to work on. Down vote terrible nonsensical ideas 
               and upvote the moonshots!</p>

            <p>Thanks for visiting and good luck in finding your next unicorn idea!</p>
        </Explanation>
    )
}

const Explanation = styled.div`
    margin-bottom: 20px;
`

export default SmallExplanation
