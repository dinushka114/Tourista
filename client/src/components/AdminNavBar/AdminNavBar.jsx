import React from 'react'
import "./AdminNavBarStyles.css"
import { Link, useNavigate } from 'react-router-dom'

const AdminNavBar = () => {

    const navigate = useNavigate();

    const adminLogout=()=>{
        localStorage.removeItem("admin")
        navigate("/admin/login")

    }

    return (
        <div className='admin-nav'>
            <Link to={'/'}><button>Home</button></Link>
            <Link to={'/admin/admin-blog'}><button>Blog</button></Link>
            <Link to={'/admin/admin-accommodation'}><button>Accommodations</button></Link>
            <button onClick={()=>adminLogout()} id='logout-btn'>Logout</button>
        </div>
    )
}

export default AdminNavBar