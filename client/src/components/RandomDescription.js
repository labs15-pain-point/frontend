import React from 'react'
import styled from 'styled-components'

const RandomDescription = props => {
    return (
        <Container>
            <StyledQuestion>Could you build a project or company from the following description?</StyledQuestion>
            <Description>
                {props.company.description}
            </Description>
        </Container>
    
    )
}

const Container = styled.div`
    margin-top: 5%;
`

const Description = styled.p`
    padding: 20px;
    border: 10px solid #09547c;
    background-color: hsl(0, 0%, 33%, .25); 
    // margin-top: 10%
    // margin-left: 4%
    // margin-right: 4%
    box-shadow: inset 0 0 2px 2px #888;
    font-size: 2.4rem;
`

const StyledQuestion = styled.p`
    font-size: 2.6rem;
    font-weight: bold;

`

export default RandomDescription