const mongoose = require('mongoose')
const { Schema } = mongoose;
const botCreateSchema = new Schema({
    ingame: { type : String , unique : true},
    id_boss: String,
    ingame_boss: String,
    coin: Number,
});
module.exports = mongoose.model('bot_create', botCreateSchema);