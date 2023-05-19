import React from 'react'
import "./DestinationStyles.css"
import MontainImg from "../../images/mountain.jpg"
import MontainImg1 from "../../images/mountain2.jpg"
import MontainImg3 from "../../images/mountain3.jpg"
import MontainImg4 from "../../images/mountain4.jpg"
import DestinationData from './DestinationData/DestinationData'

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Popular destinations recommended by travellers</p>
            <DestinationData clsName={'first-des'} title={'Kandy'} description={'Sri Lankas second largest city after Colombo, located in the central hills 116 km east of Colombo, 1551 ft above sea level, Kandy is a historic city of highest religious and cultural importance. The last capital of Sinhalese kings until it fell into the hands of the British in 1815, Kandy which is also known as Senkadagalapura was established by the Wickramabahu III (1357-1374 CE). Kandy remains the most sacred Buddhist site in Sri Lanka, perhaps the religious capital of Buddhism since it is the home of the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)- the most venerated Buddhist shrine in the world - and this historic sacred site was declared a world heritage site by UNESCO in 1988.'} img1={MontainImg} img2={MontainImg3} />
            <DestinationData clsName={'first-des-reverse'} title={'Unwatuna beach'} description={'Unawatuna is one of the biggest tourist destinations in Sri Lanka and is the most “famous” beach in the country. It is a lovely banana-shaped beach of golden sand and turquoise water, surrounded by green palm trees!It was the first beach we visited in Sri Lanka. We chose not to stay at one of the fancy and expensive hotels along the beach of Unawatuna, but a few kilometers away at a guesthouse. We walked to the Unawatuna Beach on two separate day trips.'} img1={MontainImg1} img2={MontainImg4} />
        </div>
    )
}

export default Destination