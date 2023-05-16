import React, { useEffect, useState } from 'react'
import "./AdminBlogStyles.css"
import { Link, Route, Routes } from 'react-router-dom'
import AdminPostForm from '../../../components/AdminPostForm/AdminPostForm'

import AllPosts from './AllBlogPosts/AllPosts';
import UpdatePost from './UpdateBlogPost/UpdatePost';

const AdminBlog = () => {



    return (
        <div className='admin-blog-home'>
            <Routes>
                <Route path='/' element={<AllPosts />} />
                <Route path='/add-post' element={<AdminPostForm />} />
                <Route path='/update-post/:id' element={<UpdatePost />} />

            </Routes>

        </div>
    )
}

export default AdminBlog