const Quiz = require("../../database/models/Quiz");
const jwt = require("jsonwebtoken");
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
require("dotenv").config()

const getAllQuizes = async (req, res) => {
    try {
        const quizes = await Quiz.find({});
        return res.status(200).json(quizes)
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const askQuiz = async (req, res) => {
    try {

        const { quiz } = req.body;

        const authHeader = req.headers["authorization"];
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            let user = decoded.email;

            const newQuiz = new Quiz({
                user,
                quiz
            })

            await newQuiz.save()

            return res.status(200).json({ message: "Quiz is submitted" });

        });



    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}


const getQuizById = async (req, res) => {
    try {
        const id = req.params.id;
        const quiz = await Quiz.findOne({ _id: id })
        if (quiz) {
            return res.status(200).json(quiz)
        } else {
            return res.status(404).json({ message: 'Quiz not found' })
        }
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}


const answerQuiz = async (req, res) => {
    try {

        const id = req.params.id;
        const { answer } = req.body;


        const authHeader = req.headers["authorization"];
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            let user = decoded.email;

            const quiz = await Quiz.findOne({ _id: id })
            let currentDate = new Date().toJSON().slice(0, 10);

            if (quiz) {
                quiz.answers.push({ id: uuidv4(), user, answer, currentDate })
            }

            await quiz.save()

            return res.status(200).json({ message: "Answer is submitted" });

        });

    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const updateQuiz = async (req, res) => {
    try {
        const { quiz } = req.body;
        const id = req.params.id;
        await Quiz.updateOne({ _id: id }, { quiz })
            .then(() => {
                return res.status(201).json({ message: "Quiz updated" })
            }).catch(err => {
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

const deleteQuiz = async (req, res) => {
    try {
        const id = req.params.id;
        await Quiz.deleteOne({ _id: id })
            .then(() => {
                return res.status(201).json({ message: "Quiz deleted" })
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

module.exports = { getAllQuizes, askQuiz, getQuizById, answerQuiz, deleteQuiz , updateQuiz }