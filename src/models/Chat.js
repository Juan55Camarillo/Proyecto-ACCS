const mongoose = require('mongoose');
const {Schema} = mongoose;

const ChatSchema = new Schema ({
    author: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: Date, default: Date.now}


});
module.exports = mongoose.model('Chat', ChatSchema);