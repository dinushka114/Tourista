import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import SignUpImg from "../../images/signupnew.jpg"
import TextBox from '../../components/TextBox/TextBox'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid"
        heroImg={SignUpImg}
        title="Sign up now"
      // subtitle="Plan a tirip"
      // btnClass="show"
      // btnText="Travel plan"
      />

      <form action="" className='container'>

        <h1>Join with us!</h1>

        <TextBox type={"text"} lbl={"Name"} placeholder={"Your name..."} />
        <TextBox type={"email"} lbl={"Email"} placeholder={"Your email..."} />
        <TextBox type={"text"} lbl={"Mobile no"} placeholder={"Your mobile no..."} />
        <TextBox type={"password"} lbl={"Password"} placeholder={"Enter password here..."} />
        <TextBox type={"password"} lbl={"Password Confirmation"} placeholder={"Enter password again..."} />

        <div style={{ marginTop: '15px',marginBottom:'10px' }}>
          <button style={{ padding: '20px' }}>Sign up</button>
        </div>
        <Link to={'/login'} style={{ textDecoration: 'none' , color:'#000' }}>Already have an account?</Link>

      </form>

      <Footer />

    </div>
  )
}

export default SignUp