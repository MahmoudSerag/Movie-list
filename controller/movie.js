const Movie = require('../models/movie');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorHandling');


exports.getOneMovieById = asyncHandler(async(req, res, next) => {
    
    const movie = await Movie.findById(req.params.movieId);

    if (!movie)
        return next(new ErrorResponse(`No Movie found with Id: ${req.params.movieId}`, 404));

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
    
    const movies = await Movie.find();

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

    const isImage = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
    if (!isImage.test(req.body.imageURL))
        return next(new ErrorResponse('Invalid image url.', 400));


    const year = req.body.year;
    // Plus one for covering next year
    const yearPlusOne = new Date().getFullYear() + 1;
    if (year < 1930 || year > yearPlusOne)
        return next(new ErrorResponse(`Year should be in range 1930 - ${yearPlusOne}`, 400));


    await Movie.create(req.body);
    res.status(201).json({
        success: true,
        message: 'Movie created successfully.'
    });
});


exports.deleteOneMovieById = asyncHandler(async(req, res, next) => {

    const movie = await Movie.findByIdAndDelete(req.params.movieId);

    if (!movie)
        return next(new ErrorResponse(`No movie found with Id: ${req.params.movieId}`, 404));
});


exports.updateOneMovieById = asyncHandler(async(req, res, next) => {

    const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body);

    if (!movie)
        return next(new ErrorResponse(`No movie found with Id: ${req.params.movieId}`, 404));

    res.status(200).json({
        success: true,
        message: 'Movie updated successfully.'
    });
});