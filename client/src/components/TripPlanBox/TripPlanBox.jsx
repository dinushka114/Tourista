import React from 'react'
import "./TripPlanBoxStyles.css"
import TextBox from '../TextBox/TextBox'
import { Link } from 'react-router-dom'

const TripPlanBox = ({ submitTrip, setTripData, tripData, tripTasks, deleteTask, validate }) => {
    return (
        <div className='trip_planner'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Plan a new trip</h1>
                <Link style={{ textDecoration: 'none' }} to='/plan-trip/add-task'><button>Add task</button></Link>
            </div>

            <TextBox value={tripData.where} type={'text'} placeholder={'Your destination'} lbl={'Where to'} name="where" onChangeHandler={(e) => { setTripData({ ...tripData, [e.target.name]: e.target.value }) }} />
            <TextBox value={tripData.start} type={'date'} lbl={'Start date'} name={"start"} onChangeHandler={(e) => { setTripData({ ...tripData, [e.target.name]: e.target.value }) }} />
            <TextBox value={tripData.end} type={'date'} lbl={'End date'} name={"end"} onChangeHandler={(e) => { setTripData({ ...tripData, [e.target.name]: e.target.value }) }} />

            {
                !validate ? <p className='error'>Please fill trip data</p> : null
            }

            <button style={{ marginTop: '10px' }} onClick={submitTrip}>Submit trip</button>

            <div className='trip-tasks'>
                {
                    tripTasks.map(task => {
                        return (
                            <div className='task' key={task.taskNo}>
                                <div className='top'>
                                    <h1>{task.taskNo}</h1>
                                    <h1>{task.title}</h1>
                                    <button onClick={() => deleteTask(`${task.taskNo}`)}>X</button>
                                </div>
                                <h3>{task.date} - {task.cost}</h3>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default TripPlanBox

