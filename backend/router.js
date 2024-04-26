const express = require("express");
const router = new express.Router()
const player_repository = require('./repositories/player_respository')
const bot_repository = require('./repositories/bot_respostitory')
const bot_create_repository = require('./repositories/bot_create_respostitory');
const bot = require("./models/bot");
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
router.post('/auth/sign_in', (req, res) => {
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
        res.status(200).json(player.coin);
    }).catch(error => console.log(error));
});
//--------------------------Bot----------------------------
router.get('/bot/:ingame', (req, res) => {
    const { ingame } = req.params;
    bot_repository.createBot({ingame: ingame}).then(bot => {
        res.status(200).json(bot);
    }).catch(error => console.log(error));
});
router.get('/bot', (req, res) => {
    bot_repository.getAllBot().then(list => {
        res.status(200).json(list);
    }).catch(error => console.log(error));
});
router.post('/bot/check', (req, res) => {
    bot_repository.checkExist().then(list => {
        res.status(200).json(list);
    }).catch(error => console.log(error));
});
router.put('/bot/change_coin/:id',(req, res) => {
    const { id } = req.params;
    const coin = req.body.coin;
    bot_repository.changeCoin(id,coin).then(bot => {
        res.status(200).json(bot);
    }).catch(error => console.log(error));
});
//-----------------------bot_create---------------------------------
router.get('/bot_create/getAll', (req, res) => {
    bot_create_repository.getAllBot().then(list => {
        res.status(200).json(list);
    }).catch(error => console.log(error));
});
router.put('/bot_create/change_coin/:id',(req, res) => {
    const { id } = req.params;
    const coin = req.body.coin;
    bot_create_repository.changeCoin(id,coin).then(bot => {
        res.status(200).json(bot);
    }).catch(error => console.log(error));
});
router.put('/bot_create/', (req, res) => {
    const data = req.body;
    bot_create_repository.create(data).then(bot => {
        res.status(200).json(bot);
    }).catch(error => console.log(error));
});
router.post('/bot_create/check', (req, res) => {
    const ingame = req.body.ingame;
    bot_create_repository.checkExist(ingame).then(bot => {
        res.status(200).json(bot);
    }).catch(error => console.log(error));
});
module.exports = router