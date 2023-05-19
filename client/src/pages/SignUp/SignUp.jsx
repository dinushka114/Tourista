import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import SignUpImg from "../../images/signupnew.jpg"
import TextBox from '../../components/TextBox/TextBox'
import Footer from '../../components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Loader from "../../images/loader.svg"
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./SignUpStyles.css"
import validation from './validation'
import { BASE_URL } from '../../API'


const SignUp = () => {

  const navigate = useNavigate();

  const [avatar, setAvatar] = useState('http://i.pravatar.cc/500?img=8');
  const [profileImg, setProfileImg] = useState(null);

  const [isSiginning, setSiginning] = useState(false)

  const [errors, setErrors] = useState({})

  const [successRes, setSuccssResponse] = useState(null)
  const [errorRes, setErrorResponse] = useState(null)

  const [values, setValues] = useState({
    name: '',
    email: '',
    mobileNo: '',
    password: '',
    cpassword: ''
  })

  const handleInput = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value }
    setValues(newObj)
  }

  const handleChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]))
    setProfileImg(e.target.files[0])
  }

  const handleSignUp = async (e) => {
    e.preventDefault()

    // setErrors({})

    setErrors(validation(values))



    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('mobileNo', values.mobileNo);
    formData.append('password', values.password);
    formData.append('avatar', profileImg);

    if (Object.keys(errors).length == 0) {
      setSiginning(true)
      await axios.post(BASE_URL + "/auth/register-user", formData)
        .then(res => {
          setSiginning(false)
          setSuccssResponse(res.data)
        })
        .catch(err => {
          setSiginning(false)
          setErrorResponse(err)
          console.log(err)
        })
    }


  }

  const showSkeleton = () => {
    return (
      <form className='container sign-up'>
        <h1><Skeleton style={{ lineHeight: '2' }} /></h1>

        <div class="avatar-upload" id="profile-img">
          <div class="avatar-edit">

          </div>

          <Skeleton style={{ lineHeight: '10', borderRadius: '50%', height: '180px', width: '180px' }} />

        </div>
        <Skeleton style={{ lineHeight: '5' }} /> <br />
        <Skeleton style={{ lineHeight: '5' }} /> <br />
        <Skeleton style={{ lineHeight: '5' }} /> <br />
        <Skeleton style={{ lineHeight: '5' }} /> <br />
        <Skeleton style={{ lineHeight: '5' }} /> <br />



      </form>
    )
  }



  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid"
        heroImg={SignUpImg}
        title="Sign up now"
      />

      {
        isSiginning ? showSkeleton() : <form className='container sign-up' onSubmit={handleSignUp}>

          <h1>Join with us!</h1>

          <div class="avatar-upload" id="profile-img">
            <div class="avatar-edit">
              <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={handleChange} />
              <label for="imageUpload">+</label>
            </div>
            <div class="avatar-preview">
              <div id="imagePreview" style={{ backgroundImage: `url(${avatar})` }}>
              </div>
            </div>
          </div>

          <TextBox type={"text"} lbl={"Name"} placeholder={"Your name..."} onChangeHandler={handleInput} name='name' />
          {
            errors.name ? <p className='error'>{errors.name}</p> : null
          }
          <TextBox type={"email"} lbl={"Email"} placeholder={"Your email..."} onChangeHandler={handleInput} name='email' />
          {
            errors.email ? <p className='error'>{errors.email}</p> : null
          }
          <TextBox type={"text"} lbl={"Mobile no"} placeholder={"Your mobile no..."} onChangeHandler={handleInput} name='mobileNo' />
          {
            errors.mobileNo ? <p className='error'>{errors.mobileNo}</p> : null
          }
          <TextBox type={"password"} lbl={"Password"} placeholder={"Enter password here..."} onChangeHandler={handleInput} name='password' />

          <TextBox type={"password"} lbl={"Password Confirmation"} placeholder={"Enter password again..."} onChangeHandler={handleInput} name='cpassword' />
          {
            errors.password ? <p className='error'>{errors.password}</p> : null
          }

          {
            successRes ? <p className='success'>{successRes.message}</p> : null
          }

          {
            errorRes ? <p className='error'>{errorRes.response.data.message}</p> : null
          }

          <div style={{ marginTop: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <button type='submit' style={{ padding: '20px' }}>{isSiginning ? 'Signing in' : 'Sign up'}</button>
          </div>
          <Link to={'/login'} style={{ textDecoration: 'none', color: '#000' }}>Already have an account?</Link>

        </form>
      }

      <Footer />

    </div>
  )
}

export default SignUp