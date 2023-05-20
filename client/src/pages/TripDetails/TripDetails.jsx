import React, { useContext, useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Navbar from "../../components/Navbar/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./TripDetailsStyles.css";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { BASE_URL } from "../../API/index";
import Hero from "../../components/Hero/Hero";
import TripImg from "../../images/trip.jpg";
import TextBox from "../../components/TextBox/TextBox";
import axios from "axios";
import authHeader from "../../services/auth-header";

const TripDetails = () => {
  const { checkAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showMainUpdate, setMainUpdate] = useState(false);

  const [isDeleting, setDelete] = useState(false);

  const [task, setTask] = useState();
  const [isUpdating, setUpdate] = useState(false);

  const showSkelton = () => {
    return (
      <>
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={90} height={45} />
      </>
    );
  };

  const showSkeletonTripMainPlan = () => {
    return (
      <>
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={60} height={18} />
        <Skeleton height={70} />
        <Skeleton width={90} height={45} />
      </>
    );
  };

  const showSkeletonDeleteTrip = () => {
    return (
      <>
        <Skeleton width={100} height={60} />
        <Skeleton height={200} />
      </>
    );
  };

  useEffect(() => {
    if (!checkAuth()) {
      navigate("/login");
    }
  });

  const [trip, setTrip] = useState({
    id: JSON.parse(localStorage.getItem("tripData")).id,
    whereto: JSON.parse(localStorage.getItem("tripData")).whereto,
    tasks: JSON.parse(localStorage.getItem("tripData")).tasks,
    startdate: JSON.parse(localStorage.getItem("tripData")).startdate,
    enddate: JSON.parse(localStorage.getItem("tripData")).enddate,
  });

  const updateTripPlan = async () => {
    setMainUpdate(!showMainUpdate);
    // navigate(`/update-trip/${trip.id}`)
  };

  const updateTask = async (e) => {
    setShowUpdate(false);
    setUpdate(true);
    e.preventDefault();
    let newTasks = trip.tasks.filter((current) => {
      return current.taskNo != task.taskNo;
    });

    newTasks.push(task);
    trip.tasks = newTasks;

    localStorage.setItem("tripData", JSON.stringify(trip));
    setTrip(trip);

    await axios
      .put(BASE_URL + `/user/update-trip/${trip.id}`, trip, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        setUpdate(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const showUpdateForm = (taskNo, title, description, date, cost) => {
    setTask({ taskNo, title, description, date, cost });
    setShowUpdate(!showUpdate);
  };

  const tripMainPlanSubmit = async (e) => {
    e.preventDefault();
    setUpdate(true);
    setMainUpdate(false);

    await axios
      .put(BASE_URL + `/user/update-trip/${trip.id}`, trip, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        setUpdate(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTrip = async (id) => {
    setDelete(true);
    await axios
      .delete(BASE_URL + `/user/delete-trip/${id}`, { headers: authHeader() })
      .then((res) => {
        setDelete(false);
        localStorage.removeItem("tripData");
        navigate("/my-trips");
      })
      .catch((err) => {
        setDelete(false);
      });
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <div ref={componentRef}>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={TripImg}
        title={"Trip to " + trip.whereto}
        subtitle={trip.startdate + " to " + trip.enddate}
      />
      <div className="container trip-details">
        <div className="trip-container">
          {trip.tasks.length > 0 ? (
            <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>Tasks</h1>
          ) : (
            <h1>There are no tasks</h1>
          )}
          {isDeleting ? (
            showSkeletonDeleteTrip()
          ) : (
            <>
              <div class="row">
                {trip.tasks &&
                  trip.tasks.map((task) => {
                    return (
                      <>
                        <div class="column" style={{ marginBottom: "10px" }}>
                          <div
                            class="card"
                            style={{ borderRight: "10px solid #01959a" }}
                          >
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>
                                <i class="fa-solid fa-calendar-days"></i>{" "}
                                <b> {task.date}</b> |{" "}
                                <i
                                  style={{ marginRight: "5px" }}
                                  class="fa-solid fa-money-bill"
                                ></i>
                                <b>{task.cost}</b>{" "}
                              </p>
                              <button
                                onClick={() =>
                                  showUpdateForm(
                                    task.taskNo,
                                    task.title,
                                    task.description,
                                    task.date,
                                    task.cost
                                  )
                                }
                              >
                               <i class="fa-solid fa-pen"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                {showUpdate == false && isUpdating == true
                  ? showSkelton()
                  : null}

                {showUpdate ? (
                  <form onSubmit={updateTask}>
                    <TextBox
                      value={task.title}
                      type={"text"}
                      lbl={"Title"}
                      onChangeHandler={(e) =>
                        setTask({ ...task, title: e.target.value })
                      }
                    />
                    <TextBox
                      value={task.description}
                      type={"text"}
                      lbl={"Description"}
                      onChangeHandler={(e) =>
                        setTask({ ...task, description: e.target.value })
                      }
                    />
                    <TextBox
                      value={task.date}
                      type={"date"}
                      lbl={"Date"}
                      onChangeHandler={(e) =>
                        setTask({ ...task, date: e.target.value })
                      }
                    />
                    <TextBox
                      value={task.cost}
                      type={"text"}
                      lbl={"Cost"}
                      onChangeHandler={(e) =>
                        setTask({ ...task, cost: e.target.value })
                      }
                    />
                    <button style={{ marginTop: "10px" }}>Submit</button>
                  </form>
                ) : null}
              </div>

              {showMainUpdate == false && isUpdating == true
                ? showSkeletonTripMainPlan()
                : null}

              {showMainUpdate ? (
                <form onSubmit={tripMainPlanSubmit}>
                  <TextBox
                    type={"text"}
                    lbl={"Where to"}
                    value={trip.whereto}
                    onChangeHandler={(e) =>
                      setTrip({ ...trip, whereto: e.target.value })
                    }
                  />
                  <TextBox
                    type={"date"}
                    lbl={"Start date"}
                    value={trip.startdate}
                    onChangeHandler={(e) =>
                      setTrip({ ...trip, startdate: e.target.value })
                    }
                  />
                  <TextBox
                    type={"date"}
                    lbl={"End date"}
                    value={trip.enddate}
                    onChangeHandler={(e) =>
                      setTrip({ ...trip, enddate: e.target.value })
                    }
                  />
                  <button style={{ marginTop: "10px" }}>Submit</button>
                </form>
              ) : null}
              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={() => updateTripPlan()}
                  style={{ background: "#01959a", color: "#fff" }}
                >
                  Update Plan
                </button>
                <button
                  onClick={() => deleteTrip(trip.id)}
                  style={{ background: "red", color: "#fff" }}
                >
                  Delete Plan
                </button>
                <button onClick={handlePrint}>
                  <i class="fa-solid fa-download"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TripDetails;
