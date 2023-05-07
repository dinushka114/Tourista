const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    qnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }]
})



module.exports = mongoose.model('Quiz', quizSchema);