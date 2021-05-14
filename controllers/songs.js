const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
    // grab all songs from database
    const fetchSongs = await db.song.findAll();

    res.render('songs/index', { songs: fetchSongs });
})

router.get('/new', (req, res) => {
    res.render('songs/new');
});
  
router.post('/', async (req, res) => {
    // test to make sure you are getting the data back inside of req.body
    const { title, album } = req.body;
    console.log(title, album);

    const newSong = await db.song.create({ title, album });
    console.log(newSong);
    res.redirect('/songs')
});



  

module.exports = router;