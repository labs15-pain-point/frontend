import React from 'react'
import github from '../imgs/github.png'
import linked from '../imgs/linked.png'
import styled from 'styled-components'

const ImageLog = styled.img`
    width: 35px;
    margin: 5px;
`
const About = styled.p`
    width: 300px;
    height: 185px;
    text-align: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    margin: 3%;
    padding: 1%;
`
const Image = styled.img`
    border-radius: 200px;
    width: ${props => props.name === 'Michael Bundick' ? '314px;' : '300px;'}
`
const Name = styled.p`
    font-size: 3.5rem;
    color: #880C23;
    font-weight: bold;
`

const AboutMe = props => {
    return (
        <Container name={props.member.name}>
            <Name>{props.member.name}</Name>
            <Image name={props.member.name} src={props.member.img} alt={props.member.name}/>
            <About>{props.member.about}</About>
            
            <div>
                <a href={props.member.linkedin} target='_blank' rel='noopener noreferrer'><ImageLog src={linked} alt=''/></a>
                <a href={props.member.github} target='_blank' rel='noopener noreferrer'><ImageLog src={github} alt=''/></a>
            </div>
        </Container>
    )
}

export default AboutMe