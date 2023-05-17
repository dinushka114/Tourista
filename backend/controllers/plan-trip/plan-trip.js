const Trip = require("../../database/models/Trip");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const planTrip = async (req, res) => {
    try {
        const { user, where, start, end, tasks } = req.body;

        const newTripPlan = new Trip({
            user,
            whereto: where,
            startdate: start,
            enddate: end,
            tasks: tasks
        })


        await newTripPlan.save();
        return res.status(201).json({
            message: "You planned a new trip.."
        });
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }

}

const getMyTrips = async (req, res) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            let user = decoded.email;

            const myTrips = await Trip.find({ user });
            return res.status(200).json(myTrips);

        });



    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const getTripById = async (req, res) => {
    try {
        const id = req.params.id;
        const trip = await Trip.findOne({ _id: id })
        if (trip) {
            return res.status(200).json(trip)
        } else {
            return res.sendStatus(404)
        }
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const updateTrip = async (req, res) => {
    try {
        const id = req.params.id;
        const { user, whereto, startdate, enddate, tasks } = req.body;
        await Trip.updateOne({ _id: id }, { user, whereto, startdate, enddate, tasks })
            .then(result => {
                return res.status(201).json({ mesage: "Trip Updated" })
            })

            .catch(err => {
                return res.status(500).json({
                    message: `${err.message}`
                });
            })

    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const deleteTrip = async (req, res) => {
    try {
        const id = req.params.id;
        await Trip.deleteOne({ _id: id })
            .then(result => {
                return res.status(201).json({ mesage: "Trip deleted" })
            })

            .catch(err => {
                return res.status(500).json({
                    message: `${err.message}`
                });
            })

    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

module.exports = { planTrip, getMyTrips, getTripById, updateTrip, deleteTrip };