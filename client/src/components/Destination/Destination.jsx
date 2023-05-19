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
            <p>Tours give you oppurtunity</p>
            <DestinationData clsName={'first-des'} title={'Taal volcano'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quisquam magnam id ex incidunt sapiente asperiores, reiciendis fugiat similique! Tempora molestias voluptates itaque dolore ad ab officiis debitis similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, incidunt itaque. Rerum eaque suscipit aut mollitia magnam velit, rem tempora autem numquam ratione iure tenetur fuga ab fugiat nisi? Natus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aperiam ex, quia non quod veritatis atque libero necessitatibus repellendus nam porro praesentium provident rem dolor. Totam provident qui harum corporis! '} img1={MontainImg} img2={MontainImg3} />
            <DestinationData clsName={'first-des-reverse'} title={'Sigiriya'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quisquam magnam id ex incidunt sapiente asperiores, reiciendis fugiat similique! Tempora molestias voluptates itaque dolore ad ab officiis debitis similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, incidunt itaque. Rerum eaque suscipit aut mollitia magnam velit, rem tempora autem numquam ratione iure tenetur fuga ab fugiat nisi? Natus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aperiam ex, quia non quod veritatis atque libero necessitatibus repellendus nam porro praesentium provident rem dolor. Totam provident qui harum corporis! '} img1={MontainImg1} img2={MontainImg4} />
        </div>
    )
}

export default Destination