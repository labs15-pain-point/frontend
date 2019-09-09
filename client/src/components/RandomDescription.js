import React from 'react'
import styled from 'styled-components'

const RandomDescription = props => {
    return (
        <Description>
        <p>
            {props.company.description}
        </p>
        </Description>
    )
}

const Description = styled.p`
    padding: 20px;
    border: 10px solid #09547c;
    background-color: hsl(0, 0%, 33%, .25); 
    margin-top: 10%
    margin-left: 4%
    margin-right: 4%
    box-shadow: inset 0 0 2px 2px #888;
    font-size: 3rem;
`

export default RandomDescription