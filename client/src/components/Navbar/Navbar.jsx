import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavbarStyles.css";

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Tourista</h1>
            <div className='menu-icons'>
                <i onClick={() => setClicked(!clicked)} className={clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to={'/'} className='nav-links'><i className="fa-solid fa-house"></i> Home</Link>
                </li>
                <li>
                    <Link to={'/blog'} className='nav-links'><i class="fa-solid fa-book"></i> Blog</Link>
                </li>
                <li >
                    <Link to={'/ask'} className='nav-links'><i class="fa-solid fa-circle-info"></i> Ask</Link>
                </li>
             
                <li>
                    <Link to={'/about'} className='nav-links'><i class="fa-sharp fa-solid fa-address-card"></i> About</Link>
                </li>
                <li>
                    <Link to={'/signup'} className='nav-links-mobile'> Sign up</Link>
                </li>
                <Link to={'/signup'}><button id='sign_up_btn'>Sign up</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar