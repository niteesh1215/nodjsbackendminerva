const mongoose = require('mongoose');


var SongSchema = mongoose.Schema({
    index: {
        type: Number,
        required: true,
    },
    id:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    danceability:{
        type: Number,
        required: true,
    },
    energy:{
        type: Number,
        required: true,
    },
    // key:{
    //     type: Number,
    //     required: true,
    // },
    // loudness:{
    //     type: Number,
    //     required: true,
    // },
    mode:{
        type: Number,
        required: true,
    },
    acousticness:{
        type: Number,
        required: true,
    },
    // instrumentalness:{
    //     type: Number,
    //     required: true,
    // },
    // liveness:{
    //     type: Number,
    //     required: true,
    // },
    // valence:{
    //     type: Number,
    //     required: true,
    // },
    tempo:{
        type: Number,
        required: true,
    },
    duration_ms:{
        type: Number,
        required: true,
    },
    // time_signature:{
    //     type: Number,
    //     required: true,
    // },
    // num_bars:{
    //     type: Number,
    //     required: true,
    // },
    num_sections:{
        type: Number,
        required: true,
    },
    num_segments:{
        type: Number,
        required: true,
    },
    // class:{
    //     type: Number,
    //     required: true,
    // },
});


module.exports = mongoose.model('Song',SongSchema);