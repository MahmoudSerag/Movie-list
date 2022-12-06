const Movie = require('../models/movie');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorHandling');


exports.getOneMovieById = asyncHandler(async(req, res, next) => {
    
    const movie = await Movie.findById(req.params.movieId);

    if (!movie)
        return next(new ErrorResponse(`Movie not found`, 404));

    res.status(200).json({
        success: true,
        message: 'Movie Data',
        data: {
          kind: 'Movie',
          items: movie
        }
    });
});


exports.getAllMovies = asyncHandler(async(req, res, next) => {
    
    let page = parseInt(req.query.page) || 1, limit = 10;
    if (page <= 0) page = 1;
    
    const movies = await Movie
        .find()
        .skip((page - 1) * limit)
        .limit(limit);
    if (movies.length === 0)
        return next(new ErrorResponse('Not Found.', 404));

    res.status(200).json({
        success: true,
        message: 'Movie Data',
        data: {
          kind: 'Movie',
          items: movies
        }
    });
});


exports.createMovie = asyncHandler(async(req, res, next) => {

    await Movie.create(req.body);
    res.status(201).json({
        success: true,
        message: 'Movie created successfully.'
    });
});


exports.deleteOneMovieById = asyncHandler(async(req, res, next) => {

    const movie = await Movie.findByIdAndDelete(req.params.movieId);

    if (!movie)
        return next(new ErrorResponse(`Movie not found`, 404));
});


exports.updateOneMovieById = asyncHandler(async(req, res, next) => {

    const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body);

    if (!movie)
        return next(new ErrorResponse(`Movie not found`, 404));

    res.status(200).json({
        success: true,
        message: 'Movie updated successfully.'
    });
});