import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import BlogImg from "../../images/blog.jpg"
import Img1 from "../../images/mountain.jpg"
import Img2 from "../../images/mountain2.jpg"
import "./BlogStyles.css"
import Footer from '../../components/Footer/Footer'
import Trip from '../../components/Trip/Trip'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg={BlogImg}
                title="Blog"

            />

            <Trip />
            <Footer />
        </div>
    )
}

export default Blog