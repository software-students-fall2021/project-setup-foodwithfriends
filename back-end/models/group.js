const mongoose = require("mongoose");
const { Schema } = mongoose;

const Group = new Schema({
    groupId: String,
    groupName: String,
    numOfFriends: Number,
    location: { latitude: String, longitude: String },
    priceRange: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    selectedCuisines: [{ cuisine: String, votes: Number }],
    finalWaitingRoom: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    winningCuisine: String
});

module.exports = mongoose.model('Group', Group);
