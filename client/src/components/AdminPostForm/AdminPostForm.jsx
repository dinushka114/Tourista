import React, { useState } from 'react'
import "./AdminPostFormStyles.css"
import TextBox from '../TextBox/TextBox'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { BASE_URL } from '../../API';
import adminAuthHeader from "../../services/admin-auth-header"
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AdminPostForm = () => {


    const [title, setTitle] = useState(null)
    const [subtitle, setSubTitle] = useState(null)
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);
    const [status, setStatus] = useState(null);
    const [isAdding, setAdding] = useState(false)

    const navigate = useNavigate();

    const addBlogPost = async (e) => {
        e.preventDefault();

       
        if (title == null || title.trim == "" || subtitle == null || subtitle.trim == "" || content == null || content.trim == "" || image == null || image.trim == "") {
            alert("Fill all the required details")
            return
        }
        setAdding(true)
        await axios.post(BASE_URL + "/blog/add-post", { title, subtitle, content, image, status }, { headers: adminAuthHeader() })
            .then(res => {
                console.log(res)
                setAdding(false)
                navigate("/admin/admin-blog")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const showSkelton = () => {
        return (
            <>
                <Skeleton width={'200px'} height={'30px'} /> <br />
                <Skeleton width={'150px'} height={'20px'} /> <br />
                <Skeleton height={'70px'} /> <br />
                <Skeleton width={'150px'} height={'20px'} /> <br />
                <Skeleton height={'70px'} /> <br />
                <Skeleton width={'150px'} height={'20px'} /> <br />
                <Skeleton height={'70px'} /> <br />
                <Skeleton width={'150px'} height={'20px'} /> <br />
                <Skeleton height={'70px'} /> <br />
                <Skeleton width={'150px'} height={'20px'} /> <br />
                <Skeleton height={'70px'} /> <br />
                <Skeleton width={'150px'} height={'20px'} /> <br />
                <Skeleton width={'130px'} height={'50px'} /> <br />
            </>
        )
    }

    return (
        <div className='admin-post-form'>

            {
                isAdding ? showSkelton() : <form onSubmit={addBlogPost}>
                    <h2>Add blog post</h2>
                    <TextBox lbl={"Title"} placeholder={"Post Title"} type={"text"} onChangeHandler={(e) => setTitle(e.target.value)} />
                    <TextBox lbl={"Subtitle"} placeholder={"Post Subtitle"} type={"text"} onChangeHandler={(e) => setSubTitle(e.target.value)} />
                    <TextBox lbl={"Image"} placeholder={"Insert image url here"} type={"text"} onChangeHandler={(e) => setImage(e.target.value)} />


                    <label htmlFor="">Content</label>
                    <CKEditor

                        editor={ClassicEditor}
                        data=""
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(data)
                            // console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />

                    <label htmlFor="">Status</label>
                    <select id="" style={{ backgroundColor: "#fff" }} onChange={(e) => setStatus(e.target.value)} >
                        <option value="draft">draft</option>
                        <option value="publish">publish</option>
                    </select>

                    <button style={{ marginTop: '30px' }} type='submit'>Submit</button>

                </form>
            }


        </div>
    )
}

export default AdminPostForm