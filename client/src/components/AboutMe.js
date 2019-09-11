import React from 'react'
import github from '../imgs/github.png'
import linked from '../imgs/linked.png'
import styled from 'styled-components'

const ImageLog = styled.img`
    width: 20px;
    margin: 5px;
`
const About = styled.p`
    width: 300px;
    border: 1px solid green;
`
const Container = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.6rem;
`

const AboutMe = props => {
    return (
        <Container>
            <h3>{props.member.name}</h3>
            <About>{props.member.about}</About>
            <img src={props.member.img} alt={props.member.name} width='300px'/>
            <div>
                <a href={props.member.linkedin} target='_blank' rel='noopener noreferrer'><ImageLog src={linked} alt=''/></a>
                <a href={props.member.github} target='_blank' rel='noopener noreferrer'><ImageLog src={github} alt=''/></a>
            </div>
        </Container>
    )
}

export default AboutMe