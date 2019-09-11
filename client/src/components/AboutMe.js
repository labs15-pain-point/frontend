import React from 'react'
import github from '../imgs/github.png'
import linked from '../imgs/linked.png'
import styled from 'styled-components'

const ImageLog = styled.img`
    width: 20px;
    margin: 5px;
`

const AboutMe = props => {
    return (
        <div>
            <h3>{props.member.name}</h3>
            <p>{props.member.about}</p>
            <img src={props.member.img} alt={props.member.name} width='300px' height='300px'/>
            <a href={props.member.linkedin} target='_blank' rel='noopener noreferrer'><ImageLog src={linked} alt=''/></a>
            <a href={props.member.github} target='_blank' rel='noopener noreferrer'><ImageLog src={github} alt=''/></a>
        </div>
    )
}

export default AboutMe