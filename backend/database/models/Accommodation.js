const { Schema, model } = require("mongoose");

const AccommodationSchema = new Schema(
    {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Accommodation", AccommodationSchema);