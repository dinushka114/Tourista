import React from 'react'
import TextBox from '../TextBox/TextBox'
import AvatarImg from "../../images/avatar.jpg"
import AskQuizBox from '../AskQuizBox/AskQuizBox'
import AnswerQuizBox from '../AnswerQuizBox/AnswerQuizBox'

const QuizDiscussBox = ({ open, setOpen }) => {
    return (
        <form className='container' style={{
            width: '100vw', height: '100vh', top: '0', left: '0',
            right: '0',
            bottom: '0',
            position: 'fixed'
        }}>
            <div style={{
                width: '100vw', height: '100vh', top: '0', left: '0',
                right: '0',
                bottom: '0',
                position: 'fixed',
                background: 'rgba(49,49,49,0.8)'
            }}>

            </div>

            <div className='model-content' style={modelContentStyles}>
                <button type='button' onClick={() => setOpen(!open)} style={{ float: 'right' }}> x</button>

                <div className='quiz-top' style={{ display: 'flex' }}>
                    <img src={AvatarImg} alt="" style={{ width: '50px' }} />
                    <h3 style={{ marginTop: '10px', marginLeft: '10px', width: '800px' }}>Sample quiz</h3>
                </div>

                <div className='answers' style={{ marginTop: '20px'}}>
                    <AnswerQuizBox img={AvatarImg} />
                    <AnswerQuizBox img={AvatarImg} />
                    {/* <AnswerQuizBox img={AvatarImg} />
                    <AnswerQuizBox img={AvatarImg} />
                    <AnswerQuizBox img={AvatarImg} />
                    <AnswerQuizBox img={AvatarImg} />
                 */}
                </div>

                <TextBox type={"text"} lbl={"Answer"} placeholder={"Enter your answer    here.."} />

                <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                    <button style={{ padding: '20px', background: '#000', color: '#fff' }}>Answer</button>
                </div>
            </div>


        </form>
    )
}

const modelContentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
    lineHeight: '1.4',
    background: '#f1f1f1',
    padding: '14px 28px',
    borderRadius: '3px',
    // maxWidth: '600px',
    // minWidth: '300px'
}

export default QuizDiscussBox