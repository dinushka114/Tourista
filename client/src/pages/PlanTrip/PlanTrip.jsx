import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./PlanTripStyles.css"
import TripPlanBox from '../../components/TripPlanBox/TripPlanBox';
import TripTask from '../../components/TripTask/TripTask';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from '../../API';
import authHeader from '../../services/auth-header';
import Swal from 'sweetalert2'
import Footer from "../../components/Footer/Footer"

const PlanTrip = () => {

  let timerInterval


  const navigate = useNavigate();

  const [tripData, setTripData] = useState({
    where: '',
    start: '',
    end: ''
  })
  const [tasks, setTasks] = useState([])
  const [validate, setValidate] = useState(true)

  const submitTrip = async () => {
    setValidate(true)
    if (tripData.where === "" || tripData.where.trim === "" || tripData.start === "" || tripData.start.trim === "" || tripData.end === "" || tripData.end.trim === "") {
      setValidate(false)
      return
    }


    if (localStorage.getItem("user") != null) {
      const data = {
        "user": JSON.parse(localStorage.getItem("user")).email || null,
        "where": tripData.where,
        "start": tripData.start,
        "end": tripData.end,
        "tasks": tasks
      }

      Swal.fire({
        title: 'Submitting your new trip plan',
        html: 'Please wait',
        // timer: 2000,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
        }
      })

      await axios.post(BASE_URL + "/user/plan-trip", data, { headers: authHeader() })
        .then(res => {
          Swal.close()
          navigate("/my-trips")
        })
        .catch(err => {
          Swal.close()
          if (err.response.status === 403) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You are not logged in with Tourista',
              footer: '<a href="">Login here</a>'
            })
          }
        })


    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not logged in with Tourista',
        footer: '<a href="/login">Login here</a>'
      })
    }


  }

  const deleteTask = (taskNo) => {
    var newTasks = tasks.filter(task => task.taskNo != taskNo)
    setTasks(newTasks)
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<TripPlanBox submitTrip={submitTrip} setTripData={setTripData} tripData={tripData} tripTasks={tasks} deleteTask={deleteTask} validate={validate} />} />
        <Route path='/add-task' element={<TripTask tripTasks={tasks} setTripTasks={setTasks} />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default PlanTrip