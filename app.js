const express = require('express');
const movieRoute = require('./routes/movie');
const { errorHandling } = require(`./middlewares/ErrorHandling`);
const connectDB = require(`./config/db`);

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(movieRoute);
app.use((req, res, next) => {
    return res.status(404).json({
      success: false,
      error: {
        code: 404,
        message: `this url not found`
      }
    });
  });

app.use(errorHandling);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to server on port ${port}...`);
});