import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import "./PlanTripStyles.css"

const PlanTrip = () => {
  return (
    <div>
        <Navbar />
         <div className='trip_planner'>
            <h1>Plan a new trip</h1>
         </div>
    </div>
  )
}

export default PlanTrip