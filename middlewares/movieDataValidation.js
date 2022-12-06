const ErrorResponse = require('../utils/errorHandling');
const asyncHandler = require('./async');

exports.movieDataValidation = asyncHandler(async(req, res, next) => {

    const { title, director, actor1, year, description, imageURL } = req.body;
    if (!title || !director || ! actor1 || !year || !description || !imageURL)
        return next(new ErrorResponse(`Missing in body`, 400));

    if (title.trim().length === 0 || director.trim().length === 0 || description.trim().length ===0)
        return next(new ErrorResponse('Invalid input.', 400));
    
    const isImage = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
    if (!isImage.test(req.body.imageURL))
        return next(new ErrorResponse('Invalid image url.', 400));

    // Plus one for covering next year
    const yearPlusOne = new Date().getFullYear() + 1;
    if (year < 1930 || year > yearPlusOne)
        return next(new ErrorResponse(`Year should be in range 1930 - ${yearPlusOne}`, 400));

    next();
});