import React, { useState } from 'react'
import Modal from 'react-modal'
import "./AskQuizBoxStyles.css"
import { Link } from 'react-router-dom';

const AskQuizBox = ({ id, img, quiz, date, user }) => {


    return (
        <>

            <Link to={`/ask/discuss/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
                <div style={quizBoxStyles}>
                    <img style={avatarStyles} src={img} alt="Avatar" />
                    <div>
                        <p>{quiz}</p>
                        {/* <i class="fa-solid fa-delete-left" onClick={()=>deleteQuizById(id)} style={{fontSize:'1.4rem',padding:'0.4rem' , cursor:'pointer'}}></i> */}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span class="time-right">on <b>{date.substring(0, 10)}</b> </span>
                        <span>by <b>{user.split("@")[0]}</b> </span>
                    </div>
                </div>
            </Link>

        </>
    )
}

const quizBoxStyles = {
    // width: '100%',
    padding: '25px',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '4px',
    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, .10)',
    cursor: 'pointer',
    width: '100%'
}

const avatarStyles = {
    float: 'left',
    maxWidth: '60px',
    width: '100%',
    marginRight: '20px',
    borderRadius: '50%'
}

export default AskQuizBox