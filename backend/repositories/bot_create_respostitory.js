const BotCreate = require('../models/bot_create')

class BotCreateRepository {
    constructor(model) {
        this.model = model;
    }
    create(object){
        const newBotCreate = {
            ingame: object.ingame,
            id_boss: object.id_boss,
            ingame_boss: object.ingame_boss,
            coin: 0,
        };
        const botCreate = new this.model(newBotCreate);

        return botCreate.save();
    }
    getAllBot() {
        return this.model.find()
    }
    getById(id){
        return this.model.findById(id)
    }
    changeCoin (id,coin){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { coin: coin} });
    }
}
module.exports = new BotCreateRepository(BotCreate)