import React, { useContext, useEffect } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useNavigate, Route, Routes } from 'react-router-dom'
import AdminNavBar from '../../../components/AdminNavBar/AdminNavBar'
import AdminBlog from '../AdminBlogManage/AdminBlog'
import AdminAccommocation from '../AdminAccomodationManage/AdminAccommocation'


const Admin = () => {

  const { checkAdminAuth } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {

    if (!checkAdminAuth()) {
      navigate("/admin/login")
    }

  }, [])

  return (
    <>
      <AdminNavBar />
      <Routes>
        <Route path='/admin-blog/*' element={<AdminBlog />} />
        <Route path='/admin-accommodation/*' element={<AdminAccommocation />} />
      </Routes>
    </>
  )
}

export default Admin