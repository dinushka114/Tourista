import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./TripDetailsStyles.css"

const TripDetails = () => {

    const showSkelton = () => {

    }

    return (
        <div>
            <Navbar />
            <div className='container trip-details'>
                <div className='trip-container'>
                    <h1>Trip data</h1>
                </div>
            </div>
        </div>
    )
}

export default TripDetails