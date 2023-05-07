import React from 'react'
import './ButtonStyles.css'

const Button = ({type , text}) => {
  return (
    <button type={type}>{text}</button>
  )
}

export default Button