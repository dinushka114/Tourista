import React, { useState } from 'react'
import TextBox from '../../../components/TextBox/TextBox'
import "./AdminLoginStyles.css"
import Navbar from '../../../components/Navbar/Navbar'
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BASE_URL } from '../../../API';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setLogin] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const adminLoginSubmit = async (e) => {
        setLogin(true)
        setError(null)
        e.preventDefault()

        await axios.post(BASE_URL + "/auth/login-admin", { email, password })
            .then(res => {
                setLogin(false)
                localStorage.setItem("admin" , JSON.stringify(res.data))
                navigate("/admin")
            })
            .catch(err => {
                setLogin(false)
                // console.log(err)
                setError(err)
            })

    }

    const showSkeleton = () => {
        return (
            <div>
                <Skeleton style={{ lineHeight: '2', width: '135px' }} /> <br />
                <Skeleton style={{ lineHeight: '5' }} /> <br />
                <Skeleton style={{ lineHeight: '5' }} /> <br />
                <Skeleton style={{ lineHeight: '4', width: '100px' }} /> <br />
            </div>
        )
    }

    return (
        <div>
            {/* <Navbar /> */}


            <form className='container admin-login-form' onSubmit={adminLoginSubmit}>
                {
                    isLogin ? showSkeleton() : <><h2>Admin Login</h2>
                        {
                            error ? <p className='error'>{error.response.data.message}</p> : null
                        }

                        <TextBox type={'text'} placeholder={'Email'} onChangeHandler={(e) => setEmail(e.target.value)} />
                        <TextBox type={'password'} placeholder={'Password'} onChangeHandler={(e) => setPassword(e.target.value)} />
                        <button type='submit' style={{ marginTop: '10px', padding: '14px 20px' }}>Login</button>
                      
                         </>
                }
            </form>
        </div>
    )
}

export default AdminLogin