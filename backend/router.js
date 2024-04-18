const express = require("express");
const router = new express.Router()
const player_repository = require('./repositories/player_respository')
const bot_repository = require('./repositories/bot_respostitory')
const bot_create_repository = require('./repositories/bot_create_respostitory')
//----------------------auth--------------------------
router.post('/auth/sign_up', (req, res) => {
    const newPlayer = req.body;
    player_repository.create(newPlayer)
        .then(player => res.status(200).json(player))
        .catch(error => console.log(error));
});

router.post('/auth/sign_up/check', (req, res) => {
    const ingame = req.body.ingame;
    player_repository.checkExist(ingame)
        .then(player_exist => {
            res.status(200).json(player_exist)
        })
        .catch(error => console.log(error));
});

router.post('/auth/:id', (req, res) => {
    const { id } = req.params;
    player_repository.getPlayer(id).then(player => {
        res.status(200).json(player);
    }).catch(error => console.log(error));
});
router.put('/auth/change_coin/:id', (req, res) => {
    const { id } = req.params;
    const coin = req.body.coin;
    player_repository.changeCoin(id,coin).then(player => {
        res.status(200).json(player.ingame);
    }).catch(error => console.log(error));
});

module.exports = router