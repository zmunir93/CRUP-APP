const mongoose = require('mongoose'); 

const workoutSchema = mongoose.Schema({
    date: {
        type: Date,
        default: new Date(),
    },
    name: {
        type: String,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    }
})

var workoutdata = mongoose.model('workoutdata', workoutSchema);
module.exports = workoutdata;