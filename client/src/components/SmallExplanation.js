import React from 'react'
import styled from 'styled-components'
import companyImage from '../imgs/companyImage2.jpg'

const SmallExplanation = props => {
    return (
        <Explanation>
            <strong><OuterPara>Welcome! Thinking of project ideas has always been difficult so allow us to do the thinking for you.</OuterPara></strong>
            <TotalContainer>
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
                    
                </TopContainer>
                <StyledImage src={companyImage} title="Sit down Karen!" alt=""/>
            </TotalContainer>

            
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
  
    img {
        width: 40%;
       
       
        position: relative;
        @media(max-width: 1300px) {
            width: 35%;
        }
    }
    h1 {
        width: 35%;
    }
`
const Para = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    // margin-left: 6%;
    text-align: justify;
    code {
        font-size: 1.6rem;
        background-color: lightgrey;
        margin-bottom: 5%;
        padding: 1%;
        width: 80%;
        margin-left: 10%;
    }
`
const InnerPara = styled.p`
    font-size: 2.4rem;

`

const OuterPara = styled.p`
    font-size: 3.5rem;
`
const StyledImage = styled.img`
    width: 40%;
    height: 100%;
    @media(max-width: 1000px) {
        width: 75%;
    } 
`
const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media(max-width: 1000px) {
        flex-direction: column;
    }
`


export default SmallExplanation
