import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AskQuizBox from '../../components/AskQuizBox/AskQuizBox'
import AvatarImg from "../../images/avatar.jpg";
import "./AskStyles.css"
import AskQuizForm from '../../components/AskQuizForm/AskQuizForm';
import QuizDiscussBox from '../../components/QuizDiscussBox/QuizDiscussBox';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from "../../components/Footer/Footer"
import QuizAsked from '../../components/QuizAsked/QuizAsked';

const Ask = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Navbar />

            <div className='forum' style={{ marginBottom: '40px' }}>

                <Routes>
                    <Route path='/' element={<QuizAsked />} />
                    <Route path='/ask-quiz' element={<AskQuizForm />} />
                    <Route path='/discuss/:id' element={<QuizDiscussBox />} />
                </Routes>

            </div>


            <Footer />

        </div>
    )
}

export default Ask