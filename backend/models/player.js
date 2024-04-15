const mongoose = require('mongoose')
const { Schema } = mongoose;
const playerSchema = new Schema({
    ingame: { type : String , unique : true},
    password: String,
    coin: Number
});
module.exports = mongoose.model('players', playerSchema);