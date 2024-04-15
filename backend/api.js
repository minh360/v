const axios = require('axios')
module.exports = {
    getUsername: async function getUsername (id_player) {
        return await axios.request({
            method: "GET",
            url: "http://localhost:3000/auth/" + id_player,
            headers: {
                'Authorization': 'token'
            },
            timeout: 1000
        })
    },
    getCoin: async function getCoin (id_player) {
        return await axios.request({
            method: "POST",
            url: "http://localhost:3000/auth/get_coin/" + id_player,
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
}