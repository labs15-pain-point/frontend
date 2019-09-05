import React from 'react'
import styled from 'styled-components'

import HowItWorksIntro from '../components/HowItWorksIntro'
import HowItWorksData from '../components/HowItWorksData'
import HowItWorksGPT2 from '../components/HowItWorksGPT2'
import HowItWorksPost from '../components/HowItWorksPost'
import HowItWorksFuture from '../components/HowItWorksFuture'

const HowItWorksView = props => {

    return (
        <HowItWorksContainer>   
            <HowItWorksIntro />
            <HowItWorksData />
            <HowItWorksGPT2 />
            <HowItWorksPost />
            <HowItWorksFuture />
        </HowItWorksContainer>
    )
}

const HowItWorksContainer = styled.div`
    text-align: Center;
    color: black;
`

export default HowItWorksView