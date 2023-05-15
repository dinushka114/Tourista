import React, { useContext, useEffect } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useNavigate, Route, Routes } from 'react-router-dom'
import AdminNavBar from '../../../components/AdminNavBar/AdminNavBar'
import AdminBlog from '../AdminBlogManage/AdminBlog'


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
        <Route path='/admin-blog' element={<AdminBlog />} />
      </Routes>
    </>
  )
}

export default Admin