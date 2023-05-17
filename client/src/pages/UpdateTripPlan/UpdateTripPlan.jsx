import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TextBox from '../../components/TextBox/TextBox'

const UpdateTripPlan = () => {
    const [trip, setTrip] = useState(JSON.parse(localStorage.getItem("tripData")))
    const [updatedTrip, setUpdateTrip] = useState({
        whereto: trip.whereto,
        startdate: trip.startdate,
        enddate: trip.enddate,
        user: trip.user,
        tasks: []
    })

    // const [task , ]

    const updatePlan = () => {
        console.log(updatedTrip)
    }

    return (
        <div>
            <Navbar />
            <div className='container' style={{ marginTop: '120px' }}>
                <h1>Update trip plan</h1>


                <TextBox lbl={"Where to"} type={"text"} placeholder={"Where to"} value={trip.whereto} onChangeHandler={(e) => setUpdateTrip({ ...updatedTrip, whereto: e.target.value })} />
                <TextBox lbl={"Start date"} type={"date"} value={trip.startdate} onChangeHandler={(e) => setUpdateTrip({ ...updatedTrip, startdate: e.target.value })} />
                <TextBox lbl={"End date"} type={"date"} value={trip.enddate} onChangeHandler={(e) => setUpdateTrip({ ...updatedTrip, enddate: e.target.value })} />


                {
                    trip.tasks.length > 0 ? trip.tasks.map((task, id) => {
                        return (
                            <>
                                <h2 style={{ marginTop: '20px' }}>Task {id + 1}</h2>

                                <TextBox lbl={"Title"} type={"text"} placeholder={"title"} value={task.title} name={"task_title"} />
                                <TextBox lbl={"Description"} type={"text"} placeholder={"Description"} value={task.description} name={"task_desc"} />
                                <TextBox lbl={"Date"} type={"date"} value={task.date} name={"task_date"} />
                                <TextBox lbl={"Cost"} type={"text"} value={task.cost} name={"task_cost"} />

                            </>
                        )
                    }) : null
                }


                <button onClick={() => updatePlan()} style={{ marginTop: '20px' }}>Update</button>

            </div>
            <Footer />
        </div>
    )
}

export default UpdateTripPlan