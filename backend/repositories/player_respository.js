const Player = require('./models/player')

class PlayerRepository {
    constructor(model) {
        this.model = model;
    }
    create(object){
        const newPlayer = {
            ingame: object.ingame,
            password: object.password,
            coin: object.coin ? object.coin : 50000000
        };
        const player = new this.model(newPlayer);

        return player.save();
    }
    getPlayer(id){
        return this.model.findById(id)
    }
    checkExist(ingame){
        return this.model.findOne({ingame: ingame})
    }
    changeCoin (id,coin){
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $inc: { coin: coin} });
    }
}
module.exports = new PlayerRepository(Player)