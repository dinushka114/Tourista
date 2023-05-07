import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
  return (
    <div className='footer' style={{textAlign:'center'}}>
        <div className='top'>
            <div>
                <h1>Tourista</h1>
                <p>summery of our website</p>
            </div>
            <div>
                <a href="/">
                <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-square-behance"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-square-twitter"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer