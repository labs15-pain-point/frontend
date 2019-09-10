import React from 'react'
import AboutMe from '../components/AboutMe'


const teamMembers = [
    {
        name: "Michael Bundick",
        img: '',
        linkedin: 'https://www.linkedin.com/in/michael-bundick/',
        github: 'https://github.com/bundickm',
        about: 'Here is where I would type out an about me'

    },
    {
        name: "Daniel Harris",
        img: '../imgs/daniel.png',
        linkedin: 'https://www.linkedin.com/in/daniel-harris-45a417176/',
        github: 'https://github.com/veritaem',
        about: 'Hello!  I am studying Data Science currently and have projects involving predictive maintenance, political trends, and violence levels in the US.  I love smores, nerding out and gaming with others, and working on interesting questions!'

    },
    {
        name: "Nicolas Montoya",
        img: '',
        linkedin: 'https://www.linkedin.com/in/nico-montoya/',
        github: 'https://github.com/NicoMontoya',
        about: 'Here is where I would type out an about me'

    },
    {
        name: "Tomas Fox",
        img: '',
        linkedin: 'https://www.linkedin.com/in/tomasfox1/',
        github: 'https://github.com/tomfox1',
        about: 'Here is where I would type out an about me'

    },
    {
        name: "Matthew Feldman",
        img: '',
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