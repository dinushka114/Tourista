import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../../../API';
import adminAuthHeader from '../../../../services/admin-auth-header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AllAccommodations = () => {

    const [accommodations, setAccommodations] = useState([])
    const [isLoading, setLoading] = useState(false)

    const navigate = useNavigate();

    const getAllAccommodations = async () => {
        setLoading(true)
        await axios.get(BASE_URL + "/accommodation/get-accommodations", { headers: adminAuthHeader() })
            .then(res => {
                console.log(res)
                setLoading(false)
                setAccommodations(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllAccommodations()
    }, [])

    console.log(accommodations)

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

    const updateAccommodation = (id, type, name, location, city, description, contact, email) => {
        const currentAccommodation = { id, type, name, location, city, description, contact, email }
        localStorage.setItem("accommodation", JSON.stringify(currentAccommodation))
        navigate(`/admin/admin-accommodation/update-accommodation/${id}`)
    }

    const deleteAccommodation = (id) => {

    }

    return (
        <div>
            <Link to={'/admin/admin-accommodation/add-accommodation'}><button style={{ backgroundColor: '#01959a', color: '#fff' }}>New Accommodation</button></Link>

            {
                isLoading ? showSkelton() : <table style={{ marginTop: '30px', width: '100%' }} border={'1'} id='posts'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>City</th>
                            <th>Description</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            accommodations.map((acc, index) => {
                                return (
                                    <tr style={{ textAlign: 'center' }}>
                                        <td>{index + 1}</td>
                                        <td>{acc.type}</td>
                                        <td>{acc.name}</td>
                                        <td>{acc.location}</td>
                                        <td>{acc.city}</td>
                                        <td>{acc.description.substring(0,20)}...</td>
                                        <td>{acc.contact}</td>
                                        <td>{acc.email}</td>
                                        <td> <button onClick={() => updateAccommodation(acc._id, acc.type, acc.name, acc.location, acc.city, acc.description, acc.contact, acc.email)}>Update</button>  </td>
                                        <td> <button onClick={() => deleteAccommodation(acc._id)}>Delete</button> </td>
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

export default AllAccommodations