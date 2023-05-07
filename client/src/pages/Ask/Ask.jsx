import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AskQuizBox from '../../components/AskQuizBox/AskQuizBox'
import AvatarImg from "../../images/avatar.jpg";
import "./AskStyles.css"
import AskQuizForm from '../../components/AskQuizForm/AskQuizForm';
import QuizDiscussBox from '../../components/QuizDiscussBox/QuizDiscussBox';

const Ask = () => {

    const [open , setOpen] = useState(false)
    const [openDiscuss , setOpenDiscuss] = useState(false)

    return (
        <div>
            <Navbar />

            <div className='forum'>
                <div className='forum_title'>
                    <h1>Forum</h1>
                    <button onClick={()=>setOpen(!open)}>Ask anything</button>
                </div>
                <AskQuizBox openDiscuss={openDiscuss} setOpenDiscuss={setOpenDiscuss} img={AvatarImg} />
            </div>

            {
                open ? <AskQuizForm open={open} setOpen={setOpen} /> : null
            }


        </div>
    )
}

export default Ask