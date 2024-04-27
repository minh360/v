const axios = require('axios')
module.exports = {
    getPlayer: async function getPlayer (id_player) {
        return await axios.request({
            method: "POST",
            url: "https://vxmm.onrender.com/auth/" + id_player,
            headers: {
                'Authorization': 'token'
            },
            timeout: 1000
        })
    },
    getInforPlayer: async function getInforPlayer (ingame) {
        return await axios.request({
            method: "POST",
            url: "https://vxmm.onrender.com/auth/sign_in",
            headers: {
                'Authorization': 'token'
            },
            data: {ingame: ingame},
            timeout: 1000
        })
    },
    checkExist: async function checkExist (ingame) {
        let flag = false
        await axios.request({
            method: "POST",
            url: "https://vxmm.onrender.com/auth/sign_up/check",
            headers: {
                'Authorization': 'token'
            },
            data: {ingame: ingame},
            timeout: 1000
        })
        .then(data => {
            if (data.data){
                flag = true
            }
        })
        await axios.request({
            method: "POST",
            url: "https://vxmm.onrender.com/bot/check",
            headers: {
                'Authorization': 'token'
            },
            data: {ingame: ingame},
            timeout: 1000
        })
        .then(data => {
            if (data.data){
                flag = true
            }
        })
        await axios.request({
            method: "POST",
            url: "https://vxmm.onrender.com/bot_create/check",
            headers: {
                'Authorization': 'token'
            },
            data: {ingame: ingame},
            timeout: 1000
        })
        .then(data => {
            if (data.data){
                flag = true
            }
        })
        return flag
    },
    addNewAccount: function addNewAccount (ingame,password) {
        return axios.request({
            method: "POST",
            url: "https://vxmm.onrender.com/auth/sign_up",
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
            url: "https://vxmm.onrender.com/auth/change_coin/" + id_player,
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
            url: "https://vxmm.onrender.com/bot",
            headers: {
                'Authorization': 'token'
            },
            timeout : 1000
        })
    },
    changeCoinBot: function changeCoinBot (id_bot,coin) {
        return axios.request({
            method: "PUT",
            url: "https://vxmm.onrender.com/bot/change_coin/" + id_bot,
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
            url: "https://vxmm.onrender.com/bot_create/getAll",
            headers: {
                'Authorization': 'token'
            },
            timeout : 1000
        })
    },
    changeCoinBotCreate: function changeCoinBotCreate (id_bot,coin) {
        return axios.request({
            method: "PUT",
            url: "https://vxmm.onrender.com/bot_create/change_coin/" + id_bot,
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
            method: "PUT",
            url: "https://vxmm.onrender.com/bot_create/",
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