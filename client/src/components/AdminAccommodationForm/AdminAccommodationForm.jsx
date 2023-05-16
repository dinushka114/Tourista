import React, { useState } from 'react'
import TextBox from '../TextBox/TextBox'
import axios from "axios";
import { BASE_URL } from '../../API';
import adminAuthHeader from '../../services/admin-auth-header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom';


const AdminAccommodationForm = () => {


    const [isAdding, setAdding] = useState(false)

    const navigate = useNavigate();

    const [accommodation, setAccommodation] = useState({
        type: '',
        name: '',
        location: '',
        city: '',
        description: '',
        contact: '',
        email: ''
    })

    const accommodatinSubmit = async (e) => {
        e.preventDefault()

        if (accommodation.type != "Select type") {
            setAdding(true)
            await axios.post(BASE_URL + "/accommodation/add-accommodation", accommodation, { headers: adminAuthHeader() })
                .then(res => {
                    console.log(res)
                    setAdding(false)
                    navigate("/admin/admin-accommodation")
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            alert("Select accommodation type")
            return;
        }
        console.log(accommodation)

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
        <div>
            {
                isAdding ? showSkelton() : <form onSubmit={accommodatinSubmit} style={{ marginTop: '20px' }}>
                    <h2>Add accommodation</h2>
                    <label htmlFor="">Accommodation Type</label>
                    <select style={{ backgroundColor: "#fff" }} onChange={(e) => setAccommodation({ ...accommodation, type: e.target.value })}>
                        <option>Select type</option>
                        <option>Hotel</option>
                        <option>Resort</option>
                        <option>Villa</option>
                        <option>Camping Site</option>
                        <option>Vacation Rental</option>
                    </select>
                    <TextBox type={'text'} lbl={'Name'} placeholder={'Name'} onChangeHandler={(e) => setAccommodation({ ...accommodation, name: e.target.value })} />
                    <TextBox type={'text'} lbl={'Location'} placeholder={'Location'} onChangeHandler={(e) => setAccommodation({ ...accommodation, location: e.target.value })} />
                    <TextBox type={'text'} lbl={'City'} placeholder={'City'} onChangeHandler={(e) => setAccommodation({ ...accommodation, city: e.target.value })} />
                    <label htmlFor="">Description</label>
                    <textarea placeholder='Description' rows={5} onChange={(e) => setAccommodation({ ...accommodation, description: e.target.value })}></textarea>
                    <TextBox type={'text'} lbl={'contact'} placeholder={'Contact'} onChangeHandler={(e) => setAccommodation({ ...accommodation, contact: e.target.value })} />
                    <TextBox type={'email'} lbl={'email'} placeholder={'Email'} onChangeHandler={(e) => setAccommodation({ ...accommodation, email: e.target.value })} />
                    <button type='submit' style={{ marginTop: '20px' }}>Add</button>
                </form>
            }

        </div>
    )
}

export default AdminAccommodationForm