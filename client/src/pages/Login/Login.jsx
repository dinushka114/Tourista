import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import LoginImg from "../../images/login.jpg"
import TextBox from '../../components/TextBox/TextBox'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid"
        heroImg={LoginImg}
        title="Sign in"
      // subtitle="Plan a tirip"
      // btnClass="show"
      // btnText="Travel plan"
      />

      <form action="" className='container'>

        <h1>Welcome!</h1>

        <TextBox type={"email"} lbl={"Email"} placeholder={"Your email..."} />
        <TextBox type={"password"} lbl={"Password"} placeholder={"Enter password here..."} />

        <div style={{ marginTop: '15px',marginBottom:'10px' }}>
          <button style={{ padding: '20px' }}>Sign in</button>
        </div>
        <Link to={'/signup'} style={{ textDecoration: 'none' , color:'#000' }}>Don't have an account?</Link>

      </form>

      <Footer />

    </div>
  )
}

export default Login