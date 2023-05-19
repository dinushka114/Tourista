import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import "./AccDetailsStyles.css";

const AccommodatoinDetails = () => {
  const [acc, setAcc] = useState({
    id: JSON.parse(localStorage.getItem("currentAcc")).id,
    name: JSON.parse(localStorage.getItem("currentAcc")).name,
    location: JSON.parse(localStorage.getItem("currentAcc")).location,
    image: JSON.parse(localStorage.getItem("currentAcc")).image,
    city: JSON.parse(localStorage.getItem("currentAcc")).city,
    description: JSON.parse(localStorage.getItem("currentAcc")).description,
    contact: JSON.parse(localStorage.getItem("currentAcc")).contact,
    email: JSON.parse(localStorage.getItem("currentAcc")).email,
  });

  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={acc.image} title={acc.name} />

      <div className="container acc_details">
        <h1>Description</h1>

        <p
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "1.3rem",
          }}
        >
          {acc.description}
        </p>

        <div
          className="card"
          style={{ width: "100%", padding: "1rem", fontSize: "1.3rem" , borderRight:'5px solid #01959a' }}
        >
          <b>
            <i class="fa-solid fa-hotel" style={{ marginRight: "10px" }}></i>
            {acc.name}
          </b>
          <p>
            <i
              class="fa-solid fa-location-dot"
              style={{ marginRight: "10px" }}
            ></i>
            {acc.location}
          </p>
          <p>
            {" "}
            <i
              class="fa-solid fa-tree-city"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            {acc.city}
          </p>
          <p>
            <i class="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>{" "}
            {acc.contact}{" "}
          </p>
          <p>
            {" "}
            <i
              class="fa-solid fa-envelope"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            {acc.email}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccommodatoinDetails;
