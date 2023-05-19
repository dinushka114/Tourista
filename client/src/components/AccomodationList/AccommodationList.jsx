import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BASE_URL } from '../../API';
import AccommodationItem from './AccommodationItem/AccommodationItem';
import { useNavigate } from 'react-router-dom';


const AccommodationList = () => {

    const [acList, setAcList] = useState([]);

    const navigate = useNavigate()

    const getAllList = async () => {
        await axios.get(BASE_URL + "/user/get-accommodations")
            .then(res => {
                setAcList(res.data)
            })

            .catch(err => {

            })
    }

    useEffect(() => {
        getAllList()
    }, [])

    const showDetails = (id, type, name, location, image, city, description, contact, email) => {

        const currentAcc = { id, type, name, location, image, city, description, contact, email }
        localStorage.setItem("currentAcc", JSON.stringify(currentAcc))

        navigate(`/accommodation/${id}`)
    }

    return (
        <div>
            <h1>Choose a place to have a fun</h1>

            <main>
                <section className='cards'>
                    {

                        acList.map(ac => {
                            return (
                                <AccommodationItem showAcDetails={() => showDetails(ac._id, ac.type, ac.name, ac.location, ac.image, ac.city, ac.description, ac.contact, ac.email)} img={ac.image} name={ac.name} description={ac.description} />
                            )
                        })

                    }

                </section>
            </main>

        </div>
    )
}

export default AccommodationList