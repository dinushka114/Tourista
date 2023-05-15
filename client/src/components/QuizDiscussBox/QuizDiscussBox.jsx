import React, { useContext, useEffect, useState } from 'react'
import TextBox from '../TextBox/TextBox'
import AvatarImg from "../../images/avatar.jpg"
import AskQuizBox from '../AskQuizBox/AskQuizBox'
import AnswerQuizBox from '../AnswerQuizBox/AnswerQuizBox'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import "./QuizDiscussBoxStyles.css"
import axios from "axios";
import { BASE_URL } from '../../API'
import Skeleton from 'react-loading-skeleton'
import authHeader from '../../services/auth-header'
import AuthContext from '../../context/AuthContext'

const QuizDiscussBox = () => {

    const { checkAuth } = useContext(AuthContext)


    const navigate = useNavigate()
    const { id } = useParams();

    const [quiz, setQuiz] = useState({});
    const [answer, setAnswer] = useState('');
    const [updatedQuiz, setUpdateQuiz] = useState('')
    const [quizUp, setQuizUp] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const [isLoading, setLoading] = useState(false);
    const [isAnswering, setAnswering] = useState(false);

    const getQuizById = async () => {
        setLoading(true)
        await axios.get(BASE_URL + `/forum/get-quiz/${id}`)
            .then(res => {
                setLoading(false)
                setQuiz(res.data)

            })

            .catch(err => {
                alert("Err")
            })
    }

    const answerQuiz = async (e) => {
        e.preventDefault()
        if (answer == "" || answer.trim == "") {
            return;
        }
        setAnswering(true)
        await axios.post(BASE_URL + `/forum/answer/${id}`, { "answer": answer }, { headers: authHeader() })
            .then(res => {
                setAnswering(false)
                getQuizById()
            })

            .catch(err => {
                if (err.response.status === 403) {
                    // alert("You need to login to the system")
                    navigate("/login")
                }
                console.log(err)
            })
    }

    useEffect(() => {
        getQuizById()
    }, [])



    const showSkelton = () => {
        return (
            <>
                <Skeleton style={{ lineHeight: '4', width: '250px' }} /> <br />
                <Skeleton style={{ lineHeight: '2', width: '100px' }} /> <br />
                <Skeleton style={{ lineHeight: '5' }} /> <br />
                <Skeleton style={{ lineHeight: '4', width: '100px' }} /> <br />

            </>
        )
    }

    const showAnswerSkelton = () => {
        return (
            <>
                <Skeleton style={{ lineHeight: '4' }} /> <br />
                <Skeleton style={{ lineHeight: '4' }} /> <br />
            </>
        )
    }


    const deleteQuizById = async (id) => {
        await axios.delete(BASE_URL + `/forum/quiz-delete/${id}`, { headers: authHeader() })
            .then(res => {
                navigate("/ask")
            })

            .catch(err => {
                // console.log(err)
                alert("Error")
            })
    }

    const editQuiz = (id) => {
        // alert(id)
        setQuizUp(!quizUp)
    }

    const checkCurrentUserAndQuizUser = () => {
        var result = false;
        try {
            const currentUserEmail = JSON.parse(localStorage.getItem("user")).email
            if (currentUserEmail == quiz.user) {
                result = true
            }
        } catch (err) {
            result = false
        }

        return result
    }

    const showUpdatingSkelton = () => {
        return (
            <>
                <Skeleton style={{ lineHeight: '4' }} /> <br />
            </>
        )
    }

    const updateQuizSubmit = async (id) => {
        setIsUpdating(true)
        setQuizUp(false)
        await axios.put(BASE_URL + `/forum/quiz-update/${id}`, { "quiz": updatedQuiz }, { headers: authHeader() })
            .then(res => {
                console.log(res)
                setIsUpdating(false)
                navigate("/ask")
            })

            .catch(err => {
                console.log(err)
            })
    }


    return (
        <>

            {
                isLoading ? showSkelton() : <form onSubmit={answerQuiz}>

                    <div className='model-content'>
                        <Link to={'/ask'}><button type='button' style={{ float: 'right' }}>show quizes</button></Link>

                        <div className='quiz-top' style={{ display: 'flex', marginBottom: '30px' }}>
                            <img src={AvatarImg} alt="" style={{ width: '50px' }} />
                            <h3 style={{ marginTop: '10px', marginLeft: '10px', width: '800px' }}>{quiz.quiz} {checkCurrentUserAndQuizUser() ? <i onClick={() => editQuiz(id)} style={{ marginLeft: '10px', cursor: 'pointer' }} class="fa-solid fa-pen-to-square"></i> : null} </h3>
                        </div>


                        {isUpdating ?
                            showUpdatingSkelton() : null
                        }

                        {
                            quizUp ? <div>
                                <TextBox type={"text"} lbl={"Quiz"} placeholder={"Update quiz here"} onChangeHandler={(e) => setUpdateQuiz(e.target.value)} />
                                <button type='submit' onClick={() => updateQuizSubmit(id)} style={{ padding: '20px', background: '#01959a', color: '#fff', marginTop: '10px' }}>Update</button>

                            </div> : null
                        }

                        <div className='answers' style={{ marginTop: '20px' }}>
                            {

                                isAnswering ? showAnswerSkelton() :
                                    quiz.answers && quiz.answers.map(answer => {
                                        return (
                                            <AnswerQuizBox by={answer.user} date={answer.currentDate} answer={answer.answer} img={AvatarImg} />
                                        )
                                    })
                            }
                        </div>

                        <TextBox type={"text"} lbl={"Answer"} placeholder={"Enter your answer here.."} onChangeHandler={(e) => setAnswer(e.target.value)} />

                        <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                            <button type='submit' style={{ padding: '20px', background: '#000', color: '#fff' }}>Answer</button>


                            {
                                checkCurrentUserAndQuizUser() ? <>
                                    <button type='button' onClick={() => { deleteQuizById(id) }} style={{ padding: '20px', background: 'red', color: '#fff', marginLeft: '10px' }}>Delete quiz</button>
                                    {/* <button type='button' onClick={() => { deleteQuizById(id) }} style={{ padding: '20px', background: '#01959a', color: '#fff', marginLeft: '10px' }}>Update quiz</button> */}

                                </> : null
                            }
                        </div>
                    </div>


                </form>


            }
        </>
    )
}

export default QuizDiscussBox