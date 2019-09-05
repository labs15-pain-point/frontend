import React from 'react'

const HowItWorksGPT2 = props => {
    return (
        <div>
            <h1>The Model</h1>
            <p>
                GPT-2 is OpenAI’s text generation model that is trained using 40GB of text from the internet. They provided a smaller model than the original GPT-2 so that researchers can work and build on top of it, which is what our team used to transfer and further train with our company description dataset. The easy version is we show it a lot of examples of what we are looking for and it tries to imitate those examples as output.
            </p>
        </div>
    )
}

export default HowItWorksGPT2