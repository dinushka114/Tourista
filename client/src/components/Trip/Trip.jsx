import React from 'react'
import TripData from '../TripData/TripData'
import Img1 from "../../images/mountain.jpg"
import Img2 from "../../images/mountain2.jpg"
import Img3 from "../../images/mountain3.jpg"
import "./TripStyles.css"
import { useLocation } from 'react-router-dom'

const Trip = () => {

  const location = useLocation();


  return (
    <div className='trip'>
        <h1>{
            location.pathname == "/blog" ? 'Explore culture' : 'Latest articles'
          }</h1>
        <p>You can read unique</p>
        <div className='tripcard'>
            <TripData img={Img1} heading="Heading" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quisquam magnam id ex incidunt sapiente asperiores, reiciendis fugiat similique! Tempora molestias voluptates itaque dolore ad ab o" />
            <TripData img={Img2} heading="Heading 2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quisquam magnam id ex incidunt sapiente asperiores, reiciendis fugiat similique! Tempora molestias voluptates itaque dolore ad ab o" />
            <TripData img={Img3} heading="Heading 2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quisquam magnam id ex incidunt sapiente asperiores, reiciendis fugiat similique! Tempora molestias voluptates itaque dolore ad ab o" />
        </div>
    </div>
  )
}

export default Trip