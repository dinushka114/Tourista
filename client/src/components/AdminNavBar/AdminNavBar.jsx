import React from 'react'
import "./AdminNavBarStyles.css"
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
    return (
        <div className='admin-nav'>
            <button>Home</button>
            <Link to={'/admin/admin-blog'}><button>Blog</button></Link>
            <Link to={'/admin/accommodations'}><button>Accommodations</button></Link>
            <button id='logout-btn'>Logout</button>
        </div>
    )
}

export default AdminNavBar