// Load required packeges
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const URL = 'mongodb+srv://movieList:22058420@movie-list.oyvmjia.mongodb.net/test';
      const conn = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
      console.log(error.message);
    }
  }
  
module.exports = connectDB;