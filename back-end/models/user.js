const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    groupId: String,
    name: String,
    dishPreferences: [String]
});

module.exports = mongoose.model('User', userSchema);
