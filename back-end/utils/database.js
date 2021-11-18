const mongoose = require("mongoose");

const env = process.env.NODE_ENV || 'development';

if (env === 'test') {
  process.env.DB_CONNECTION = 'mongodb://localhost/foodWithFriends'
}

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => {
    console.log("connected!")
});
