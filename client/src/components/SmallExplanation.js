import React from 'react'
import styled from 'styled-components'
import companyImage from '../imgs/companyImage2.jpg'

const SmallExplanation = props => {
    return (
        <Explanation>
            <p>
               <img src={companyImage} title="Sit down Karen!" />
               Welcome! Thinking of project ideas has always been difficult so allow us to do the thinking for you.
               Sift through our computer generated company descriptions and vote on descriptions that can be the 
               seed idea for your next project. Downvote the nonsense and upvote the moonshots!
            </p>
            <p>
               Still not sure what you are looking for? Here is an example that was the seed idea for 
               developing a platform for language learning and development:
               <br/><br/>
                <code>
                    "Pro.com is an educational platform for Japanese language learners. 
                    It offers learning materials such as textbooks, storybooks, and videos to 
                    learn and develop language skills. The company was founded in 2015."
                </code>
                
            </p>
        </Explanation>
    )
}

const Explanation = styled.div`
p {
    padding: 20px;
    margin: 3%
    font-size: 110%;
    img {
        float: right;
        margin-left: 5%
        width: 50%
    }
    code{
        display: block;
        white-space: pre-wrap;
    }
}

`

export default SmallExplanation
