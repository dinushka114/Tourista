import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllAccommodations from './AllAccommodations/AllAccommodations'
import "./AdminAccommodationStyles.css"
import AdminAccommodationForm from '../../../components/AdminAccommodationForm/AdminAccommodationForm'

// /admin/admin-accommodation/add-accommodation

const AdminAccommocation = () => {
    return (
        <div className='admin-accommodation-home'>
            <Routes>
                <Route path='/' element={<AllAccommodations />} />
                <Route path='/add-accommodation' element={<AdminAccommodationForm />} />
            </Routes>
        </div>
    )
}

export default AdminAccommocation