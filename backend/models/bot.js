const mongoose = require('mongoose')
const { Schema } = mongoose;
const botSchema = new Schema({
    ingame: { type : String , unique : true},
    coin: Number
});
module.exports = mongoose.model('bot', botSchema);