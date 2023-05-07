import React, { useState } from 'react'
import Modal from 'react-modal'
import "./AskQuizBoxStyles.css"
import QuizDiscussBox from '../QuizDiscussBox/QuizDiscussBox'
import AnswerQuizBox from '../AnswerQuizBox/AnswerQuizBox';
import TextBox from '../TextBox/TextBox';
import AvatarImg from "../../images/avatar.jpg"

Modal.setAppElement('#root');
const AskQuizBox = ({ img, openDiscuss, setOpenDiscuss }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    // const [openDiscuss , setOpenDiscuss] = useState(false)



    return (
        <>
            <div class="container" style={quizBoxStyles} onClick={openModal}>
                <img style={avatarStyles} src={img} alt="Avatar" />
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
            {/* 
            {
                openDiscuss ? <QuizDiscussBox open={openDiscuss} setOpen={setOpenDiscuss} /> : null
            } */}

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                preventScroll={true}
            >
                <form className='container' >
                    <div>

                    </div>

                    <div className='model-content' >
                        <button type='button' style={{ float: 'right' }}> x</button>

                        <div className='quiz-top' style={{ display: 'flex' }}>
                            <img src={AvatarImg} alt="" style={{ width: '50px' }} />
                            <h3 style={{ marginTop: '10px', marginLeft: '10px', width: '800px' }}>Sample quiz</h3>
                        </div>

                        <div className='answers' style={{ marginTop: '20px' }}>
                            <AnswerQuizBox img={AvatarImg} />
                            <AnswerQuizBox img={AvatarImg} />
                            <AnswerQuizBox img={AvatarImg} />
                            <AnswerQuizBox img={AvatarImg} />
                            <AnswerQuizBox img={AvatarImg} />
                            {/* <AnswerQuizBox img={AvatarImg} /> */}

                        </div>

                        <TextBox type={"text"} lbl={"Answer"} placeholder={"Enter your answer    here.."} />

                        <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                            <button style={{ padding: '20px', background: '#000', color: '#fff' }}>Answer</button>
                        </div>
                    </div>


                </form>

            </Modal>

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
    cursor: 'pointer'
}

const avatarStyles = {
    float: 'left',
    maxWidth: '60px',
    width: '100%',
    marginRight: '20px',
    borderRadius: '50%'
}

export default AskQuizBox