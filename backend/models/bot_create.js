const mongoose = require('mongoose')
const { Schema } = mongoose;
const botCreateSchema = new Schema({
    ingame: { type : String , unique : true},
    id_boss: String,
    ingame_boss: String,
    coin: Number,
    status: Boolean,
    status_join : Boolean,
    second_join : Number,
    coin_join : Number,
    percent_join : Number,
    coin_win : Number
});
module.exports = mongoose.model('bot_create', botCreateSchema);