const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost/foodWithFriends', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => {
    console.log("connected!")
});

