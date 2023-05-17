import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

const AccommodatoinDetails = () => {

    const [acc, setAcc] = useState({
        id: JSON.parse(localStorage.getItem("currentAcc")).id,
        name: JSON.parse(localStorage.getItem("currentAcc")).name,
        location: JSON.parse(localStorage.getItem("currentAcc")).location,
        image: JSON.parse(localStorage.getItem("currentAcc")).image,
        city: JSON.parse(localStorage.getItem("currentAcc")).city,
        description: JSON.parse(localStorage.getItem("currentAcc")).description,
        contact: JSON.parse(localStorage.getItem("currentAcc")).contact,
        email: JSON.parse(localStorage.getItem("currentAcc")).email,

    })

    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg={acc.image}
                title={acc.name}

            />

            <div className='container'>
                <p style={{marginTop:'20px' , marginBottom:'20px' , fontSize:'1.3rem'}}>{acc.description}</p>

                <div className='card' style={{width:'35%', padding:'1rem' , fontSize:'1.3rem'}}>
                    <b>{acc.name}</b>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default AccommodatoinDetails