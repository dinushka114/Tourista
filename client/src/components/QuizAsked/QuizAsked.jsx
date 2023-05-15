import React, { useEffect, useState } from 'react'
import AvatarImg from "../../images/avatar.jpg"
import AskQuizBox from '../AskQuizBox/AskQuizBox'
import axios from "axios";
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../API';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const QuizAsked = () => {


  const [quizes, setQuizes] = useState([])
  const [isLoading, setLoading] = useState(false)

  const getQuizes = async () => {
    setLoading(true)
    await axios.get(BASE_URL + "/forum/all-quizes")
      .then(res => {
        setQuizes(res.data)
        setLoading(false)
      })

      .catch(err => {
        alert(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getQuizes()

  }, [])

  const showSkelton = () => {
    return (
      <>{
        Array(5)
          .fill()
          .map((item, index) => {
            return (
              <div>
                <Skeleton style={{ lineHeight: '5' }} />
                <br />
              </div>
            )
          })
      }
      </>
    )
  }

  return (
    <div>
      <div className='forum_title' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Forum</h1>
        <Link to={'/ask/ask-quiz'}><button>Ask anything</button></Link>
      </div>


      {

        isLoading ? showSkelton() :

          quizes.map(quiz => {
            return (
              <AskQuizBox id={quiz._id} date={quiz.createdAt} quiz={quiz.quiz} img={AvatarImg} user={quiz.user} />
            )
          })
      }

    </div>
  )
}

export default QuizAsked