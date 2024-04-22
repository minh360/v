const axios = require('axios')
module.exports = {
    getPlayer: async function getPlayer (id_player) {
        return await axios.request({
            method: "POST",
            url: "http://localhost:3000/auth/" + id_player,
            headers: {
                'Authorization': 'token'
            },
            timeout: 1000
        })
    },
    checkExist: async function checkExist (ingame) {
        return await axios.request({
            method: "POST",
            url: "http://localhost:3000/auth/sign_up/check",
            headers: {
                'Authorization': 'token'
            },
            data: {ingame: ingame},
            timeout: 1000
        })
    },
    addNewAccount: function addNewAccount (ingame,password) {
        return axios.request({
            method: "POST",
            url: "http://localhost:3000/auth/sign_up",
            headers: {
                'Authorization': 'token'
            },
            data: {
                ingame: ingame,
                password: password
            },
            timeout: 1000
        })
    },
    changeCoinPlayer: function changeCoinPlayer (id_player,coin) {
        return axios.request({
            method: "PUT",
            url: "http://localhost:3000/auth/change_coin/" + id_player,
            headers: {
                'Authorization': 'token'
            },
            data: {
                coin: coin
            },
            timeout : 1000
        })
    },
    getAllBot: function getAllBot () {
        return axios.request({
            method: "GET",
            url: "http://localhost:3000/bot",
            headers: {
                'Authorization': 'token'
            },
            timeout : 1000
        })
    },
    changeCoinBot: function changeCoinBot (id_bot,coin) {
        return axios.request({
            method: "PUT",
            url: "http://localhost:3000/bot/change_coin/" + id_bot,
            headers: {
                'Authorization': 'token'
            },
            data: {
                coin: coin
            },
            timeout : 1000
        })
    },
    getAllBotCreate: function getAllBotCreate () {
        return axios.request({
            method: "GET",
            url: "http://localhost:3000/bot_create/getAll",
            headers: {
                'Authorization': 'token'
            },
            timeout : 1000
        })
    },
    changeCoinBotCreate: function changeCoinBotCreate (id_bot,coin) {
        return axios.request({
            method: "PUT",
            url: "http://localhost:3000/bot_create/change_coin/" + id_bot,
            headers: {
                'Authorization': 'token'
            },
            data: {
                coin: coin
            },
            timeout : 1000
        })
    },
    addBotCreate: function addBotCreate (data) {
        return axios.request({
            method: "POST",
            url: "http://localhost:3000/bot_create/",
            headers: {
                'Authorization': 'token'
            },
            data: {
                ingame: data.ingame,
                id_boss : data.id_boss,
                ingame_boss : data.ingame_boss
            },
            timeout: 1000
        })
    },
}