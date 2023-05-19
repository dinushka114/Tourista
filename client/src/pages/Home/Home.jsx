import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Image from "../../../src/images/image1.jpg"
import Destination from '../../components/Destination/Destination'
import Trip from '../../components/Trip/Trip'
import Footer from '../../components/Footer/Footer'
import AccommodationList from '../../components/AccomodationList/AccommodationList'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero cName="hero"
                heroImg={Image}
                title="The journey is yours"
                subtitle="subitle sasldasjdalkjdalksjdasldjlaskdj"
                btnClass="show"
                btnText="Plan a trip"
            />
            <Destination />
            <div style={{ textAlign: 'center' }}>
                <Trip />
            </div>

            <div style={{textAlign:'center'}}>
                <AccommodationList />
            </div>

            <Footer />
        </>
    )
}

export default Home