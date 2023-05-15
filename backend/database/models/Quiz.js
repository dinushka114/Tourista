const { Schema, model } = require("mongoose");

const QuizSchema = new Schema(
    {
        user: {
            type: String,
            required: true
        },
        quiz: {
            type: String,
            required: true,
        },
        answers: [Object] // answered user , answer
    },
    { timestamps: true }
);

module.exports = model("Quiz", QuizSchema);