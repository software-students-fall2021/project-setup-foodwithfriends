const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
    groupId: String,
    name: String,
    selectedPreferences: Boolean,
    dishPreferences: [String]
});

module.exports = mongoose.model('User', User);
