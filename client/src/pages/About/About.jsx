import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <div>
        <Navbar />
            <Hero cName="hero-mid"
                heroImg={AboutImg}
                title="About"
                // subtitle="Plan a tirip"
                // btnClass="show"
                // btnText="Travel plan"
            />
    </div>
  )
}

export default About