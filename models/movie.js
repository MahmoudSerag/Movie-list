const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minlength: [5, 'Min length is 5 character.'],
        maxlength: [50, 'Max length is 50 character.']
    },
    description: {
        type: String,
        required: false,
        minlength: [20, 'Min length is 20 character.'],
        maxlength: [400, 'Max length is 400 character.']
    },
    year: {
        type: Number,
        required: [true, 'yer is required.']
    },
    director: {
        type: String,
        required: [true, 'director is required.'],
        minlength: [10, 'Min length is 10 character.'],
        maxlength: [50, 'Max length is 50 character.']
    },
    actor1: {
        type: String,
        required: [true, 'At least add one actor.']
    },
    actor2: {
        type: String,
        required: false
    },
    actor3: {
        type: String,
        required: false
    },
    actor4: {
        type: String,
        required: false
    },
    actor5: {
        type: String,
        required: false
    },
    imageURL: {
        type: String,
        required: [true, 'moviePosterURL is required.']
    }
});


module.exports = mongoose.model('Movie', MovieSchema);