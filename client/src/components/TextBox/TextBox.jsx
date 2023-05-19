import React from 'react'
import "./TextBoxStyles.css"

const TextBox = ({ type , lbl , name , value,  placeholder , onChangeHandler }) => {
    return (
        <div className='row'>
            <label htmlFor={lbl}>{lbl}</label>
            <input type={type} placeholder={placeholder} onChange={onChangeHandler} name={name} defaultValue={value}/>
        </div>
    )
}

export default TextBox