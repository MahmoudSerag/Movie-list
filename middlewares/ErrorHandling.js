const ErrorResponse = require('../utils/errorHandling');

exports.errorHandling = (err, req, res, next) => {
  
  const statusCode = 400;
  let message = {};
  if (err.errors) {
    console.log(err.errors);
    for (let key in err.errors) {
      message[key] = err.errors[key].properties.message;
    }
    return res.status(statusCode).json({
      success: false,
      error: {
        code: statusCode,
        message: message
      }
    });
  }


  if (err.kind === 'ObjectId') {
    return res.status(statusCode).json({
      success: false,
      error: {
        code: statusCode,
        message: 'Invalid id.'
      }
    });
  }

  
  res.status(err.statusCode || 500).json({
      success: false,
      error: {
        code: err.statusCode || 500,
        message: err.message || `Server error.`
      }
  });
}