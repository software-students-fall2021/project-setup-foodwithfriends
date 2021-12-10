const mongoose = require("mongoose");
const { Schema } = mongoose;

const Group = new Schema ({
    groupId: String,
    groupName: String,
    numOfFriends: Number,
    location: {latitude: String, longitude: String},
    priceRange: String,
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    waitCount: Number,
    currWaitFriends: [String],
    resetRoom: false,
    selectedCuisines: [{cuisine: String, votes: Number}],
    winningCuisine: String
});

module.exports = mongoose.model('Group', Group);
