import React from 'react'
import styled from 'styled-components'

import AboutMe from '../components/AboutMe'
import Tomas from '../imgs/tomasfox.jpg'
import Michael from '../imgs/michaelbundick.png'
import Matt from '../imgs/Matt.jpeg'
import Nico from '../imgs/Nico.jpg'
import Daniel from '../imgs/daniel.jpeg'


const teamMembers = [
    {
        name: "Michael Bundick",
        img: Michael,
        linkedin: 'https://www.linkedin.com/in/michael-bundick/',
        github: 'https://github.com/bundickm',
        about: 'Here is where I would type out an about me'

    },
    {
        name: "Daniel Harris",
        img: Daniel,
        linkedin: 'https://www.linkedin.com/in/daniel-harris-45a417176/',
        github: 'https://github.com/veritaem',
        // about: 'Here is where I would type out an about me'
        about: 'Hello!  I am studying Data Science currently and have projects involving predictive maintenance, political trends, and violence levels in the US.  I love smores, nerding out and gaming with others, and working on interesting questions!'

    },
    {
        name: "Nicolas Montoya",
        img: Nico,
        linkedin: 'https://www.linkedin.com/in/nico-montoya/',
        github: 'https://github.com/NicoMontoya',
        about: 'I am a Data Scientist in the Lambda program.  This is my second project dealing with NLP. I have a finance background and play around with sports data in my free time.'

    },
    {
        name: "Tomas Fox",
        img: Tomas,
        linkedin: 'https://www.linkedin.com/in/tomasfox1/',
        github: 'https://github.com/tomfox1',
        about: 'Here is where I would type out an about me'

    },
    {
        name: "Matthew Feldman",
        img: Matt,
        linkedin: 'https://www.linkedin.com/in/matthew-r-feldman/',
        github: 'https://github.com/matt0418',
        about: 'Here is where I would type out an about me'
    }
]

const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin-left: 10%;
`

const AboutUs = props => {
    return(
        <AboutContainer>
            {teamMembers.map(member => {
                return <AboutMe member={member} />
            })}
        </AboutContainer>
       
    )
    
}


export default AboutUs
