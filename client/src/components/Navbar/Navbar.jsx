import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import "./NavbarStyles.css";

const Navbar = () => {

    const { checkAuth } = useContext(AuthContext)

    const [clicked, setClicked] = useState(false);

    const [isAuth, setAuth] = useState(checkAuth())

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }

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
                    <Link to={'/my-trips'} className='nav-links'><i class="fa-solid fa-suitcase-rolling"></i>My Trips</Link>
                </li>
                {
                    checkAuth() ? <li>
                        <Link onClick={() => logout()} className='nav-links-mobile'> Sign out</Link>
                    </li> : <li>
                        <Link to={'/login'} className='nav-links-mobile'> Sign in</Link>
                    </li>
                }



                {
                    checkAuth() ? <button className='logout-btn' onClick={() => logout()}>Sign out</button> : <Link to={'/login'}><button id='sign_up_btn'>Sign in</button></Link>
                }
            </ul>
        </nav>
    )
}

export default Navbar