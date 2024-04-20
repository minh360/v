const Bot = require('../models/bot')

class BotRepository {
    constructor(model) {
        this.model = model;
    }
    createBot(object){
        const newBot = {
            ingame: object.ingame,
            coin: object.coin ? object.coin : 2000000000
        };
        const bot = new this.model(newBot);

        return bot.save();
    }
    getAllBot() {
        return this.model.find()
    }
    getBot(id){
        return this.model.findById(id)
    }
    changeCoin (id,coin){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { coin: coin} });
    }
}
module.exports = new BotRepository(Bot)