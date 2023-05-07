import React from 'react'
import Image from "../../images/image1.jpg"
import "./HeroStyles.css"
import { Link } from 'react-router-dom'

const Hero = (props) => {
    return (
        <div className={props.cName}>
            <img src={props.heroImg} alt="HeroImg" />

            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <Link to={'/plan-trip'} className={props.btnClass}>{props.btnText}</Link>
            </div>
        </div>
    )
}

export default Hero 