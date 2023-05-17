import React, { useEffect, useState } from 'react'
import TripData from '../TripData/TripData'
import Img1 from "../../images/mountain.jpg"
import Img2 from "../../images/mountain2.jpg"
import Img3 from "../../images/mountain3.jpg"
import "./TripStyles.css"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../API'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Trip = () => {

  const location = useLocation();

  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  const getAllPosts = async () => {
    await axios.get(BASE_URL + "/blog/get-posts-user")
      .then(res => {
        setPosts(res.data)
      })

      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  const showSkelton = () => {
    return (
      <>
        {
          Array(5)
            .fill()
            .map((item, index) => {
              return (
                <section>

                  <Skeleton style={{ lineHeight: '300px', width: '300px' }} />
                </section>
              )
            })
        }
      </>
    )
  }

  const postDetail = (id, title, subtitle, image, content) => {
    const currentPost = { id, title, subtitle, image, content }
    localStorage.setItem("currentPostDetails" , JSON.stringify(currentPost))
    navigate(`/post/${id}`)
  }

  return (
    <div className='trip'>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>{
          location.pathname == "/blog" ? 'Explore culture' : 'Latest articles'
        }</h1>
        <p>You can read unique</p>
      </div>
      <main>
        <section className='cards'>

          {
            location.pathname == "/blog" ? posts.map(post => {
              return (
                <TripData showPostDetails={() => postDetail(post._id, post.title, post.subtitle, post.image, post.content)} img={post.image} title={post.title} subtitle={post.subtitle} />
              )
            }) : posts.slice(0, 3).map(post => {
              return (
                <TripData showPostDetails={() => postDetail(post._id, post.title, post.subtitle, post.image, post.content)} img={post.image} title={post.title} subtitle={post.subtitle} />
              )
            })
          }

        </section>
      </main>
    </div>
  )
}

export default Trip