import React, { useState } from 'react'
import TextBox from '../TextBox/TextBox'
import "./AskQuizFormStyles.css"

const AskQuizForm = ({ open, setOpen }) => {

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
            background:'rgba(49,49,49,0.8)'
        }}>

            </div>

            <div className='model-content' style={modelContentStyles}>
                <button type='button' onClick={() => setOpen(!open)} style={{ float: 'right'  }}> x</button>

                <h1>Ask your quiz here!</h1>

                <TextBox type={"text"} lbl={"Your quiz"} placeholder={"Enter your quiz here.."} />

                <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                    <button style={{ padding: '20px' , background:'#000' , color:'#fff' }}>Post</button>
                </div>
            </div>


        </form>
    )
}


const modelContentStyles = {
    position: 'absolute',
    top: '50%',
    left:'50%',
    transform: 'translate(-50% , -50%)',
    lineHeight:'1.4',
    background: '#f1f1f1',
    padding: '14px 28px',
    borderRadius: '3px',
    // maxWidth: '600px',
    // minWidth: '300px'
}

export default AskQuizForm