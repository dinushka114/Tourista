import React, { useState } from 'react'
import TextBox from '../../../../components/TextBox/TextBox'
import axios from "axios";
import { BASE_URL } from '../../../../API';
import adminAuthHeader from '../../../../services/admin-auth-header';

const UpdateAccommodation = () => {

    const [accommodation, setAccommodation] = useState({
        id: JSON.parse(localStorage.getItem("accommodation")).id,
        type: JSON.parse(localStorage.getItem("accommodation")).title,
        name: JSON.parse(localStorage.getItem("accommodation")).name,
        location: JSON.parse(localStorage.getItem("accommodation")).location,
        city: JSON.parse(localStorage.getItem("accommodation")).city,
        description: JSON.parse(localStorage.getItem("accommodation")).description,
        contact: JSON.parse(localStorage.getItem("accommodation")).contact,
        email: JSON.parse(localStorage.getItem("accommodation")).email
    })


    const accommodatinSubmit = async (e) => {
        e.preventDefault()
        await axios.put(BASE_URL + `/accommodation/update-accommodation/${accommodation.id}`, accommodation, { headers: adminAuthHeader() })
            .then(res => {
                console.log(res)
            })

            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <form onSubmit={accommodatinSubmit} style={{ marginTop: '20px' }}>
                <h2>Update accommodation</h2>
                <label htmlFor="">Accommodation Type</label>
                <select value={accommodation.type} style={{ backgroundColor: "#fff" }} onChange={(e) => setAccommodation({ ...accommodation, type: e.target.value })}>
                    <option>Select type</option>
                    <option>Hotel</option>
                    <option>Resort</option>
                    <option>Villa</option>
                    <option>Camping Site</option>
                    <option>Vacation Rental</option>
                </select>
                <TextBox type={'text'} lbl={'Name'} value={accommodation.name} placeholder={'Name'} onChangeHandler={(e) => setAccommodation({ ...accommodation, name: e.target.value })} />
                <TextBox type={'text'} lbl={'Location'} value={accommodation.location} placeholder={'Location'} onChangeHandler={(e) => setAccommodation({ ...accommodation, location: e.target.value })} />
                <TextBox type={'text'} lbl={'City'} value={accommodation.city} placeholder={'City'} onChangeHandler={(e) => setAccommodation({ ...accommodation, city: e.target.value })} />
                <label htmlFor="">Description</label>
                <textarea placeholder='Description' rows={5} onChange={(e) => setAccommodation({ ...accommodation, description: e.target.value })}>{accommodation.description}</textarea>
                <TextBox type={'text'} lbl={'contact'} value={accommodation.contact} placeholder={'Contact'} onChangeHandler={(e) => setAccommodation({ ...accommodation, contact: e.target.value })} />
                <TextBox type={'email'} lbl={'email'} value={accommodation.email} placeholder={'Email'} onChangeHandler={(e) => setAccommodation({ ...accommodation, email: e.target.value })} />
                <button type='submit' style={{ marginTop: '20px' }}>Add</button>
            </form>
        </div>
    )
}

export default UpdateAccommodation