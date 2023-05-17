import React, { useState, useEffect } from 'react'
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, useNavigate } from 'react-router-dom';
import adminAuthHeader from '../../../../services/admin-auth-header';
import { BASE_URL } from '../../../../API';

const AllPosts = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [filteredData, setFilteredData] = useState(posts);

    const navigate = useNavigate();

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        // console.log(value);
        result = posts.filter((data) => {
            return data.title.search(value) != -1;
        });

        setFilteredData(result);
    }

    const getPosts = async () => {
        setLoading(true)
        await axios.get(BASE_URL + "/blog/get-posts", { headers: adminAuthHeader() })
            .then(res => {
                console.log(res)
                setPosts(res.data)
                setLoading(false)
                setFilteredData(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        getPosts()
    }, [])


    const deletePost = async (id) => {
        setLoading(true)
        await axios.delete(BASE_URL + `/blog/delete-post/${id}`, { headers: adminAuthHeader() })
            .then(res => {
                setLoading(false)
                console.log(res)
                getPosts()
            })

            .catch(err => {
                console.log(err)
            })
    }

    const showSkelton = () => {
        return (
            <div style={{ marginTop: '30px' }}>
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
                <Skeleton height={'50px'} />
            </div>
        )
    }


    const updateBlogPost = (id, title, subtitle, image, content, status) => {

        const currentPost = { id, title, subtitle, image, content, status }

        localStorage.setItem("post", JSON.stringify(currentPost))

        navigate(`/admin/admin-blog/update-post/${id}`)
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={'/admin/admin-blog/add-post'}><button style={{ backgroundColor: '#01959a', color: '#fff' }}>New post</button></Link>
                <input type="text" style={{ width: '300px' }} placeholder='Search' onChange={(event) => handleSearch(event)} />
            </div>

            {
                isLoading ? showSkelton() : <table style={{ marginTop: '30px', width: '100%' }} border={'1'} id='posts'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Sub title</th>
                            <th>Image</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredData.map((post, index) => {
                                return (
                                    <tr style={{ textAlign: 'center' }}>
                                        <td>{index + 1}</td>
                                        <td>{post.title}</td>
                                        <td>{post.subtitle}</td>
                                        <td>{post.image}</td>
                                        <td> <button onClick={() => updateBlogPost(post._id, post.title, post.subtitle, post.image, post.content, post.status)}>Update</button>  </td>
                                        <td> <button onClick={() => deletePost(post._id)}>Delete</button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }




        </div>
    )
}

export default AllPosts