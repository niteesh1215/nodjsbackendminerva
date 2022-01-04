const express = require('express');

const router = express.Router();

const songs = require('../playlist.json');

var normalizedSongs = [];

router.get('/', function (req, res) {
    if (normalizedSongs.length === 0)
        normalize();
    res.send("Welcome");
});

router.post('/add', function (req, res) {
    console.log(req.body);
    res.send();
});

router.get('/playlist', function (req, res) {
    if (normalizedSongs.length === 0)
        normalize();

    var start = 0;
    var count = 10;

    if (req.query.start !== undefined) {
        start = parseInt(req.query.start, 10);
    }

    if (req.query.count !== undefined) {
        count = parseInt(req.query.count);
    }

    res.send(normalizedSongs.slice(start, start + count));
});

router.get('/find-song', function (req, res) {

    if (normalizedSongs.length === 0)
        normalize();

    const title = req.query.title;

    if (title == undefined) res.send({});

    const found = normalizedSongs.find(song => song.title === title) || [];

    res.send(found);

});


router.put('/star-rating', function (req, res) {

    if (normalizedSongs.length === 0)
        normalize();

    const index = req.body.index;

    const star_rating = req.body.star_rating;

    if (index === undefined || star_rating === undefined) {
        res.sendStatus(400);
    }

    const i = normalizedSongs.findIndex(function (song, i) {
        return song.index === index;
    });


    if (i === -1) {
        res.send({
            status: 'failed',
            message: 'could not find the index'
        });
    } else {
        normalizedSongs[i].star_rating = star_rating;
        res.sendStatus(200)
    }

});


function normalize() {
    var length = Object.keys(songs.id).length;

    for (var i = 0; i < length; i++) {
        const song = {};
        song.index = i;
        song.id = songs.id[i];
        song.title = songs.title[i];
        song.danceability = songs.danceability[i];
        song.energy = songs.energy[i];
        song.mode = songs.mode[i];
        song.acousticness = songs.acousticness[i];
        song.tempo = songs.tempo[i];
        song.duration_ms = songs.duration_ms[i];
        song.num_sections = songs.num_sections[i];
        song.num_segments = songs.num_segments[i];
        song.star_rating = 0;
        normalizedSongs.push(song);
    }
}

module.exports = router;