import React from 'react'
import AboutMe from '../components/AboutMe'
import Tomas from '../imgs/tomasfox.jpg'
import Michael from '../imgs/michaelbundick.png'
import Matt from '../imgs/Matt.jpeg'
import Nico from '../imgs/Nico.jpg'


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
        img: '',
        linkedin: 'https://www.linkedin.com/in/daniel-harris-45a417176/',
        github: 'https://github.com/veritaem',
        about: 'Here is where I would type out an about me'

    },
    {
        name: "Nicolas Montoya",
        img: Nico,
        linkedin: 'https://www.linkedin.com/in/nico-montoya/',
        github: 'https://github.com/NicoMontoya',
        about: 'Here is where I would type out an about me'

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

const AboutUs = props => {
    return(
        <div>
            {teamMembers.map(member => {
                return <AboutMe member={member} />
            })}
        </div>
       
    )
    
}

export default AboutUs