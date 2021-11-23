const mongoose = require("mongoose");

const env = process.env.NODE_ENV || 'development';
const dbURI = env === "test" ? 'mongodb://localhost/foodWithFriends' : process.env.DB_CONNECTION;

mongoose.connect(dbURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => {
    console.log("connected!")
});
