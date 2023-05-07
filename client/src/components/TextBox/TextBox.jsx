import React from 'react'
import "./TextBoxStyles.css"

const TextBox = ({ type , lbl , placeholder }) => {
    return (
        <div className='row'>
            <label htmlFor={lbl}>{lbl}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}

export default TextBox