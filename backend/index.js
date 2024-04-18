const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const jsonParser = bodyParser.json();
const port = process.env.PORT || 3000
const path = require('path')
const serveStatic = require('serve-static')

mongoose.connect('mongodb+srv://minh231120012:setdanh113@cluster0.wuz4vl8.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;
const router = require('./router')
const dayjs = require("dayjs");
const { getPlayer } = require('./api')

db.once('open', function () {
    console.log("Connected to MongoDB successfully!");
});
app.use(cors())
app.use(jsonParser);
app.use('/', router);
app.use('/', serveStatic(path.join(__dirname, '/dist')))
const server = app.listen(port)
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT"]
    }
});

let last_win = {}
let list_play = []
let totalCoin = 0
let countPlayerJoin = 0
let timeout = 10
let begin = 0
const calcAndFindPercent = id_player => {
    let percent_flag = 0
    let coinJoin = 0
    for (let i = 0; i < list_play.length; i++) {
        if (list_play[i].id_player == id_player) {
            const percent = ((list_play[i].coinJoin / totalCoin) * 100) % 1 != 0 ?((list_play[i].coinJoin / totalCoin) * 100).toFixed(5) : (list_play[i].coinJoin / totalCoin) * 100
            list_play[i].percent = Number(percent)
            percent_flag += Number(percent)
            coinJoin += list_play[i].coinJoin
        }
    }
    return { coinJoin: coinJoin, percent: percent_flag }
}
const findIdWin = () => {
    let listPercent = []
    let VAT
    for (let obj of list_play) {
        listPercent.push(obj.percent)
    }
    const percentWin = Math.floor(Math.random() * 101) + Math.floor(Math.random())
    let numberPercent = 0
    if (countPlayerJoin > 10)
        VAT = 10
    else VAT = countPlayerJoin - 1

    totalCoin = (totalCoin - (totalCoin * VAT / 100)).toFixed(0)

    for (let i = 0; i < listPercent.length; i++) {
        numberPercent += listPercent[i]
        if (numberPercent > percentWin) {
            return {coinJoin: list_play[i].coinJoin, coinWin: totalCoin, id_player: list_play[i].ingame}
        }
    }
}
io.on('connection', (socket) => {
    const beginPlay = () => {
        const countdown = setInterval(() => {
            socket.emit('letgo', timeout)
            socket.broadcast.emit('letgo', timeout)
            timeout -= 1
            console.log('countdown',timeout)
            if (timeout == 0) {
                if (list_play == []){
                    setTimeout(beginPlay, 1000)
                }
                else{
                    clearInterval(countdown)
                    last_win = findIdWin()
                    socket.emit('sendLastWin', last_win)
                    socket.broadcast.emit('sendLastWin', last_win)
                    timeout = 120
                    list_play = []
                    totalCoin = 0
                    countPlayerJoin = 0
                    setTimeout(beginPlay, 1000)
                }
            }
            else if (timeout % 5 == 0) {
                socket.emit('letgo', timeout)
                socket.broadcast.emit('reload')
                socket.emit('reload')
            }
        }, 1000)
    }
    if (begin == 0) {
        begin+=1
        setTimeout(beginPlay,1000)
    }
    socket.on('updateChat', obj => {
        socket.broadcast.emit('sendMessage', obj)
    })
    socket.on('updateLastWin', () => {
        socket.emit('sendLastWin', last_win)
    })
    socket.on('play', obj => {
        console.log(obj)
        let flag = false
        for (let i = 0; i < list_play.length; i++) {
            if (obj.id_player == list_play[i].id_player) flag = true
        }
        countPlayerJoin += (flag == true ? 0 : 1)
        totalCoin += obj.coinJoin
        list_play.push({ id_player: obj.id_player,ingame: obj.ingame, coinJoin: obj.coinJoin, percent: 0 })
        socket.emit('reload')
    })
    socket.on('justDoIt', id_player => {
        const data = [calcAndFindPercent(id_player), totalCoin, countPlayerJoin]
        socket.emit('updatePlayerPlay', data)
    })
})
