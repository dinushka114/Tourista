import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllAccommodations from './AllAccommodations/AllAccommodations'
import "./AdminAccommodationStyles.css"
import AdminAccommodationForm from '../../../components/AdminAccommodationForm/AdminAccommodationForm'
import UpdateAccommodation from './UpdateAccommodation/UpdateAccommodation'

// /admin/admin-accommodation/add-accommodation

const AdminAccommocation = () => {
    return (
        <div className='admin-accommodation-home'>
            <Routes>
                <Route path='/' element={<AllAccommodations />} />
                <Route path='/add-accommodation' element={<AdminAccommodationForm />} />
                <Route path='/update-accommodation/:id' element={<UpdateAccommodation />} />

            </Routes>
        </div>
    )
}

export default AdminAccommocation