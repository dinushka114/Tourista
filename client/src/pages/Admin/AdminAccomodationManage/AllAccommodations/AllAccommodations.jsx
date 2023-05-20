import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../../../API';
import adminAuthHeader from '../../../../services/admin-auth-header';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useReactToPrint } from "react-to-print";

const AllAccommodations = () => {

    const [accommodations, setAccommodations] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [filteredData, setFilteredData] = useState(accommodations);

    const navigate = useNavigate();

    const getAllAccommodations = async () => {
        setLoading(true)
        await axios.get(BASE_URL + "/accommodation/get-accommodations", { headers: adminAuthHeader() })
            .then(res => {
                console.log(res)
                setLoading(false)
                setAccommodations(res.data)
                setFilteredData(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllAccommodations()
    }, [])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        // console.log(value);
        result = accommodations.filter((data) => {
            return data.name.search(value) != -1;
        });

        setFilteredData(result);
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

    const updateAccommodation = (id, type, name, location, city, description, contact, email) => {
        const currentAccommodation = { id, type, name, location, city, description, contact, email }
        localStorage.setItem("accommodation", JSON.stringify(currentAccommodation))
        navigate(`/admin/admin-accommodation/update-accommodation/${id}`)
    }

    const deleteAccommodation = async (id) => {
        setLoading(true)
        await axios.delete(BASE_URL + `/accommodation/delete-accommodation/${id}`, { headers: adminAuthHeader() })
            .then(res => {
                setLoading(false)
                getAllAccommodations()
                console.log(res)
            })

            .catch(err => {
                console.log(err)
            })
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <div ref={componentRef}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={'/admin/admin-accommodation/add-accommodation'}><button style={{ backgroundColor: '#01959a', color: '#fff' }}>New Accommodation</button></Link>
                <input type="text" style={{ width: '300px' }} placeholder='Search' onChange={(event) => handleSearch(event)} />
            </div>

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
                            <th>Image</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredData.map((acc, index) => {
                                return (
                                    <tr style={{ textAlign: 'center' }}>
                                        <td>{index + 1}</td>
                                        <td>{acc.type}</td>
                                        <td>{acc.name}</td>
                                        <td>{acc.location}</td>
                                        <td>{acc.city}</td>
                                        <td>{acc.description.substring(0, 20)}...</td>
                                        <td> <img src={acc.image} style={{width:'100px'}} alt="" srcset="" /> </td>
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
        <br></br>
        <button onClick={handlePrint}>Generate Report</button>
        </div>
    )
}

export default AllAccommodations