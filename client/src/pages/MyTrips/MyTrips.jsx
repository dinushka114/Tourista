import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./MyTripsStyles.css"
import Footer from '../../components/Footer/Footer'
import axios from "axios";
import { BASE_URL } from "../../API/index"
import authHeader from '../../services/auth-header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, useNavigate } from 'react-router-dom';

const MyTrips = () => {

  const [myTripData, setMyTrips] = useState([])
  const [noData, setNoData] = useState(false)
  const [filteredList, setFilteredList] = useState(myTripData)

  const navigate = useNavigate();

  const getMyTrips = async () => {
    await axios.get(BASE_URL + "/user/my-trips", { headers: authHeader() })
      .then(res => {
        setMyTrips(res.data)
        setFilteredList(res.data)
      })
      .catch(err => {
        if (err.response.status === 403) {
          navigate('/login')
        }
      })
  }

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    // console.log(value);
    result = myTripData.filter((data) => {
      return data.whereto.search(value) != -1;
    });

    setFilteredList(result);
  }
  useEffect(() => {
    getMyTrips()
    setTimeout(() => {
      myTripData.length == 0 ? setNoData(true) : setNoData(false)
    }, 3000)
  }, [])

  const showSkeleton = () => {
    return (
      <>
        {Array(10)
          .fill()
          .map((item, index) => {
            return (
              <section>

                <article>
                  <figure>
                    <Skeleton style={{ lineHeight: '10' }} />
                    {/* <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Free Stock Photo from pexels.com" /> */}
                  </figure>
                  <span><Skeleton /></span>
                  <h3><Skeleton style={{ lineHeight: '4' }} /></h3>
                  <p><Skeleton count={4} /></p>
                </article>
              </section>
            )
          })}
      </>
    )
  }

  const tripDetails = (id, whereto, user, tasks, startdate, enddate) => {
    const tripData = { id, whereto, user, tasks, startdate, enddate }
    localStorage.setItem("tripData", JSON.stringify(tripData))
    navigate(`/trip/${id}`)
  }


  const showTrips = () => {

    return (
      filteredList.map((trip) => {
        return (
          <section style={{ cursor: 'pointer' }} onClick={() => tripDetails(trip._id, trip.whereto, trip.user, trip.tasks, trip.startdate, trip.enddate)}>
            <figure>
              <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Free Stock Photo from pexels.com" />
            </figure>
            <article>
              <span>{trip.startdate}</span>
              <h3>To {trip.whereto}</h3>
              {/* <p>Learn how to maintain your emotional balance when strangers start attacking you online.</p> */}
            </article>
          </section>
        )
      })
    )
  }



  return (
    <div>
      <Navbar />
      <div className='my-trips'>

        <div className='trip-top-search'>
          <h1>My Trips</h1>
          <input type="text" placeholder='search by destination' onChange={(event) => handleSearch(event)} />
        </div>
        <main>




          {
            noData ? showTrips() : showSkeleton()
          }




        </main>

      </div>
      <Footer />
    </div>
  )
}

export default MyTrips