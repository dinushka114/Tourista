import React, { useState } from 'react'
import TextBox from '../TextBox/TextBox'
import "./AskQuizFormStyles.css"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../API';
import authHeader from '../../services/auth-header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const AskQuizForm = () => {

    const [quiz, setQuiz] = useState('');
    const [asking, setAsking] = useState(false);
    const navigate = useNavigate();

    const [err, setError] = useState('');

    const submitQuizAsk = async (e) => {
        e.preventDefault()

        if (quiz == "" || quiz.trim == "") {
            return;
        }

        setAsking(true)
        await axios.post(BASE_URL + "/forum/ask", { "quiz": quiz }, { headers: authHeader() })
            .then(res => {
                setAsking(false)
                navigate('/ask')
            })

            .catch(err => {
                if(err.response.status===403){
                    // alert("You need to login to the system")
                    navigate("/login")
                }
                setError(err.response.data.message)
            })
    }

    const showSkelton = () => {
        return (
            <div>
                <Skeleton style={{ lineHeight: '3', width: '200px' }} /> <br />
                <Skeleton style={{ lineHeight: '1.5', width: '120px' }} /> <br />
                <Skeleton style={{ lineHeight: '5' }} /> <br />
                <Skeleton style={{ lineHeight: '4', width: '90px' }} /> <br />

            </div>
        )
    }


    return (

        <>
            {
                asking ? showSkelton() : <form onSubmit={submitQuizAsk}>

                    <div className='model-content' >

                        <Link to={'/ask'}><button type='button' style={{ float: 'right' }}> x</button></Link>

                        <h1>Ask your quiz here!</h1>

                        {
                            err ? <p className='error'>Error</p> : null
                        }

                        <TextBox type={"text"} lbl={"Your quiz"} placeholder={"Enter your quiz here.."} onChangeHandler={(e) => setQuiz(e.target.value)} />

                        <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                            <button style={{ padding: '20px', background: '#000', color: '#fff' }}>Ask</button>
                        </div>
                    </div>


                </form>
            }

        </>
    )
}


export default AskQuizForm