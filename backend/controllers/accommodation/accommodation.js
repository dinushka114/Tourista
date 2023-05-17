const Accommodation = require("../../database/models/Accommodation");

const addAccommodation = async (req, res) => {
    try {
        // const { type, name, location, city, description, contact, email } = req.body;

        const newAccommodation = new Accommodation({
            ...req.body
        })


        await newAccommodation.save();
        return res.status(201).json({
            message: "accommodation submitted"
        });
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const getAllAccommodations = async (req, res) => {
    try {

        const accomodations = await Accommodation.find({});

        return res.status(200).json(accomodations);
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const updateAccommodation = async (req, res) => {
    try {
        const id = req.params.id;
        await Accommodation.updateOne({ _id: id }, { ...req.body });

        return res.status(200).json({ message: "Updated" });
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

module.exports = { addAccommodation, getAllAccommodations, updateAccommodation }