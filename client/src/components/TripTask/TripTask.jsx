import React, { useState } from 'react'
import TextBox from '../TextBox/TextBox'
import { Link, useNavigate } from 'react-router-dom'

const TripTask = ({tripTasks , setTripTasks}) => {

    const navigate = useNavigate();

    const [task, setTask] = useState(
        {
            "taskNo":"",
            "title":"",
            "description":"",
            "date":"",
            "cost":""
        }
    )

    const addTask=(e)=>{
        e.preventDefault()
        setTripTasks([...tripTasks , {...task,taskNo:tripTasks.length+1}])
        navigate('/plan-trip')
    }

    return (
        <form className='container' style={{marginTop:'180px'}}>

            <div className='model-content' >
                <Link to={'/plan-trip'}><button type='button' style={{ float: 'right' }}> x</button></Link>

                <h1>New task</h1>

                {/* <TextBox type={"text"} lbl={"Task No"} placeholder={"Enter task no.."} name={"taskNo"} onChangeHandler={(e)=>{setTask({...task , [e.target.name]:e.target.value})}} /> */}

                <TextBox type={"text"} lbl={"Title"} placeholder={"Enter title.."} name="title" onChangeHandler={(e)=>{setTask({...task , [e.target.name]:e.target.value})}} />

                <div >
                    <label htmlFor="">Description</label>
                    <textarea placeholder='Enter description' name='description' onChange={(e)=>{setTask({...task , [e.target.name]:e.target.value})}}></textarea>
                </div>

                <TextBox type={"date"} lbl={"Date"} placeholder={"Enter title.."} name={"date"} onChangeHandler={(e)=>{setTask({...task , [e.target.name]:e.target.value})}} />
                <TextBox type={"text"} lbl={"Cost"} placeholder={"Enter cost.."} name={"cost"} onChangeHandler={(e)=>{setTask({...task , [e.target.name]:e.target.value})}} />

                <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                    <button onClick={addTask} style={{ padding: '20px', background: '#000', color: '#fff' }}>Add</button>
                </div>
            </div>


        </form>
    )
}

export default TripTask