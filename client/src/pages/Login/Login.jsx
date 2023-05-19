import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import LoginImg from "../../images/login.jpg"
import TextBox from '../../components/TextBox/TextBox'
import Footer from '../../components/Footer/Footer'
import Loader from "../../images/loader.svg"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import "./LoginStyles.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BASE_URL } from '../../API'

const Login = () => {

  const navigate = useNavigate();

  const [isSiginning, setSiginning] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [successRes, setSuccessRes] = useState(null)
  const [errRes, setErrorRes] = useState(null)
  const [inputValidationError, setInputValidationError] = useState(null)

  const loginSubmit = async (e) => {
    e.preventDefault()
    setSiginning(true)
    setSuccessRes(null)
    setErrorRes(null)
    setInputValidationError(null)

    if (values.email === "" || values.password === "" || values.email.trim === "" || values.password.trim === "") {
      setInputValidationError("Please fill all fields")
      setSiginning(false)
      return
    }

    await axios.post(BASE_URL + "/auth/login-user/", values)
      .then(res => {
        setSiginning(false)
        setSuccessRes(res.data)
        localStorage.setItem("user", JSON.stringify(res.data))
        setTimeout(() => {
          navigate('/my-trips')
        }, 500)
      })

      .catch(err => {
        setSiginning(false)
        setErrorRes(err)
      })

  }

  const showSkelton = () => {
    return (
      <form className='container'>

        <h1> <Skeleton style={{ lineHeight: '2'  , width:'300px' }} /> </h1> <br />


        <Skeleton style={{ lineHeight: '5' }} /> <br />
        <Skeleton style={{ lineHeight: '5' }} /> <br />

        <Skeleton style={{ lineHeight: '5' }} width={100} />
        <br />

        <Skeleton style={{ lineHeight: '2' , width:'350px' }} />

      </form>
    )
  }

  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid"
        heroImg={LoginImg}
        title="Sign in"
      />

      {
        isSiginning ? showSkelton() : <form className='container' onSubmit={loginSubmit}>

          <h1>Welcome!</h1>

          <TextBox type={"email"} lbl={"Email"} placeholder={"Your email..."} name={'email'} onChangeHandler={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
          <TextBox type={"password"} lbl={"Password"} name={'password'} placeholder={"Enter password here..."} onChangeHandler={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
          {
            inputValidationError != null ? <p className='error'>{inputValidationError}</p> : null
          }

          {
            successRes ? <p className='success'>{successRes.message}</p> : null
          }

          {
            errRes ? <p className='error'>{errRes.response.data.message}</p> : null
          }

          <div style={{ marginTop: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <button type='submit' style={{ padding: '20px' }}>{

              isSiginning ? 'Logging in' : 'Sign in'
            }</button>
            {
              isSiginning ? <img src={Loader} style={{ width: '70px' }} alt="" /> : null
            }
          </div>
          <Link to={'/signup'} style={{ textDecoration: 'none', color: '#000' }}>Don't have an account?</Link>

        </form>
      }

      <Footer />

    </div>
  )
}

export default Login