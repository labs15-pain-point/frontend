import React from 'react'

const HowItWorksData = props => {
    return (
        <div>
            <h1>The Data</h1>
            <p>
                Before we can train on any model we needed to gather data, and in data science the old adage holds true - “Garbage in, garbage out”. That means we needed clean descriptions of problems and solutions so we could generate new ideas. You know what fits that mold? Company descriptions. So we gathered our data, 150,000 company descriptions, from Crunchbase. After some minor cleaning we can train on top of the GPT-2 algorithm to generate novel company descriptions.
            </p>
        </div>
    )
}

export default HowItWorksData