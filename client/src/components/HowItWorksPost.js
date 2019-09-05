import React from 'react'

const HowItWorksPost = props => {
    return (
        <div>
            <h1>The Post Processing</h1>
            <p>
                When we use GPT-2 to generate novel company descriptions, the signal to noise ratio still isn’t where we want it to be. We end up having to sift through a lot of garbage to find a gem. To save us some effort and avoid manually trash diving we apply two post processing filters.
            </p>
            <p>
                To understand how they work, let’s take a look at this terrible description:
                <br>
                </br>
                <pre>
                    CITY of Design is a UK company with offices in London, London, London, and Paris. The company was established in 1864 and is headquartered in London, England.
                </pre>
            </p>
            <p>
                The first filter deals mainly with word frequency. We found that there is a goldilocks zone of word repetition where the descriptions start to make more sense. However in this zone, we still see descriptions like above, so we penalize a list of stop words that encode information that doesn’t matter to us. For instance, we don’t care where a fake company is based or when it was founded.
            </p>
            <p>
                Once we do a pass for word frequency, we apply a second filter looking to identify entities. What is an entity? A real world object or concept such as time, location, or a person. We penalize descriptions with entity types we don’t care about - all we want is a problem and solution not a corporate history. Any descriptions that have a score indicating they may bore us with the useless get dumped, and then it’s all brought here.
            </p>
        </div>
    )
}

export default HowItWorksPost