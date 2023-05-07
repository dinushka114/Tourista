import React from 'react'

const AnswerQuizBox = (props) => {
    return (
        <div class="quiz_answer_container" style={quizBoxStyles}>
            <img style={avatarStyles} src={props.img} alt="Avatar" />
            <p>Hello. How are you today?</p>
            <span class="time-right">11:00</span>
        </div>
    )
}

const quizBoxStyles={
    // width: '100%',
    padding: '25px',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '4px',
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, .10)'   ,
    cursor:'pointer'
}

const avatarStyles={
    float: 'left',
    maxWidth: '60px',
    width: '100%',
    marginRight: '20px',
    borderRadius: '50%'
}

export default AnswerQuizBox