const express = require('express');
const router = express.Router();
const { movieDataValidation } = require('../middlewares/movieDataValidation');
const { getOneMovieById,
        getAllMovies,
        createMovie,
        deleteOneMovieById,
        updateOneMovieById } = require('../controller/movie');


router.route('/api/v1/movies')
    .get(getAllMovies)
    .post(movieDataValidation, createMovie);


router.route('/api/v1/movies/:movieId')
    .get(getOneMovieById)
    .delete(deleteOneMovieById)
    .patch(updateOneMovieById);


module.exports = router;