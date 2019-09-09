import React from 'react'
import styled from 'styled-components'
import companyImage from '../imgs/companyImage2.jpg'

const SmallExplanation = props => {
    return (
        <Explanation>
            <strong><OuterPara>Welcome! Thinking of project ideas has always been difficult so allow us to do the thinking for you.</OuterPara></strong>
            <TopContainer>
                
                <Para>
                    
                    <InnerPara>Sift through our computer generated company descriptions and vote on descriptions that can be the 
                            seed idea for your next project. Downvote the nonsense and upvote the moonshots!
                    </InnerPara>
                    <InnerPara>
                        Still not sure what you are looking for? Here is an example that was the seed idea for 
                        developing a platform for language learning and development:
                    </InnerPara>
                    <code>
                        "Pro.com is an educational platform for Japanese language learners. 
                        It offers learning materials such as textbooks, storybooks, and videos to 
                        learn and develop language skills. The company was founded in 2015."
                    </code>
                </Para>
                
                <img src={companyImage} title="Sit down Karen!" alt=""/>
            </TopContainer>
            
        </Explanation>
    )
}

const Explanation = styled.div`
    p {
        padding: 20px;
        margin: 3%
    }
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    img {
        width: 40%;
    }
    h1 {
        width: 35%;
    }
`
const Para = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin-left: 6%;
    code {
        font-size: 1.6rem;
        background-color: lightgrey;
        margin-bottom: 5%;
        padding: 1%;
    }
`
const InnerPara = styled.p`
    font-size: 2.4rem;
    border: 1px solid red;

`

const OuterPara = styled.p`
    font-size: 3.5rem;
`

export default SmallExplanation
