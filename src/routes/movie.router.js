const { getAll, create, getOne, remove, update, setGenre, setActor, setDirector } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id/genres')
    .post(setGenre)
    .put(updateGenres);

routerMovie.route('/id/actors')
    .post(setActor)
    .put(updateGenres);

routerMovie.route('/id/directors')
    .post(setDirector)
    .put(updateDirectors);


module.exports = routerMovie;