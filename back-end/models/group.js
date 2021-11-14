const mongoose = require("mongoose");
const { Schema } = mongoose;

const Group = new Schema ({
    groupId: String,
    groupName: String,
    numOfFriends: Number,
    location: [{latitude: String, longitude: String}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    selectedCuisines: [String],
    winningCuisine: String
});

module.exports = mongoose.model('Group', Group);
