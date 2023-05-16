import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../../../API';
import adminAuthHeader from '../../../../services/admin-auth-header';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextBox from "../../../../components/TextBox/TextBox"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UpdatePost = () => {


    const navigate = useNavigate();
    const [isUpdating, setUpdate] = useState(false);

    const [post, setPost] = useState({
        id: JSON.parse(localStorage.getItem("post")).id,
        title: JSON.parse(localStorage.getItem("post")).title,
        subtitle: JSON.parse(localStorage.getItem("post")).subtitle,
        content: JSON.parse(localStorage.getItem("post")).content,
        image: JSON.parse(localStorage.getItem("post")).image,
        status: JSON.parse(localStorage.getItem("post")).status,

    })

    useEffect(() => {

    }, [])

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

    const updateBlogPost = async (e) => {
        e.preventDefault()
        setUpdate(true)
        await axios.put(BASE_URL + `/blog/update-post/${post.id}`, post, { headers: adminAuthHeader() })
            .then(res => {
                console.log(res)
                setUpdate(false)
                navigate("/admin/admin-blog")
            })

            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            {
                isUpdating ? showSkelton() :
                    <form onSubmit={updateBlogPost}>
                        <h2 style={{ marginTop: '20px' }}>Update blog post</h2>
                        <TextBox lbl={"Title"} value={post.title} placeholder={"Post Title"} type={"text"} onChangeHandler={(e) => setPost({ ...post, title: e.target.value })} />
                        <TextBox lbl={"Subtitle"} value={post.subtitle} placeholder={"Post Subtitle"} type={"text"} onChangeHandler={(e) => setPost({ ...post, subtitle: e.target.value })} />
                        <TextBox lbl={"Image"} value={post.image} placeholder={"Insert image url here"} type={"text"} onChangeHandler={(e) => setPost({ ...post, image: e.target.value })} />


                        <label htmlFor="">Content</label>
                        <CKEditor

                            editor={ClassicEditor}
                            data={post.content}
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setPost({ ...post, content: data })
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
                        <select id="" style={{ backgroundColor: "#fff" }} onChangeHandler={(e) => setPost({ ...post, status: e.target.value })} >
                            <option value="draft">draft</option>
                            <option value="publish">publish</option>
                        </select>

                        <button style={{ marginTop: '30px' }} type='submit'>Update</button>

                    </form>
            }
        </div>
    )
}

export default UpdatePost