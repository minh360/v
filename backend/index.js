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
const { changeCoinPlayer, getPlayer, getAllBot, getAllBotCreate, changeCoinBot, changeCoinBotCreate, addBotCreate } = require('./api')

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
    origin: "https://vxmm.onrender.com",
    methods: ["GET", "POST", "PUT"]
  }
});
const STATUS = {
  FREE: 0,
  TRADE: 1,
  BUSY: 2,
  DONATE: 3,
  SEND: 4,
  SEND_WIN: 5
}
let last_win = {}
let list_play = []
let list_bot = []
let totalCoin = 0
let countPlayerJoin = 0
let timeout = 120
let begin = 0
let day = new Date(2023, 23, 1)
let hours = []
let list_ready = []
let list_bot_create = []
let list_thue = []
const clear = index => {
  list_bot_create[index].status = STATUS.FREE
  list_bot_create[index].status_join = false
  list_bot_create[index].id_thue = ''
  list_bot_create[index].coin_win = ''
  list_bot_create[index].time_join = 0
  list_bot_create[index].coin_join = 0
  list_bot_create[index].percent_join = 0
}
const calcAndFindPercent = id_player => {
  let percent_flag = 0
  let coinJoin = 0
  for (let i = 0; i < list_play.length; i++) {
    if (list_play[i].id_player == id_player) {
      const percent = ((list_play[i].coinJoin / totalCoin) * 100) % 1 != 0 ? ((list_play[i].coinJoin / totalCoin) * 100).toFixed(5) : (list_play[i].coinJoin / totalCoin) * 100
      list_play[i].percent = Number(percent)
      percent_flag += Number(percent)
      coinJoin += list_play[i].coinJoin
    }
  }
  return { coinJoin: coinJoin, percent: percent_flag }
}
const updateCoinPlayer = async (id_player, coin_change, condition) => {
  let coin_old
  await getPlayer(id_player)
    .then(async data => {
      coin_old = Number(data.data.coin)
      const coin = (condition ? coin_old + Number(coin_change) : coin_old - Number(coin_change))
      await changeCoinPlayer(id_player, coin)
        .then(result => {
          console.log('update xu thành công')
        })
        .catch(err => console.log(err))
    })

}
const updateCoinBotCreate = async (id, coin_old, coin_change, condition) => {
  const coin = Number(condition ? Number(coin_old) + Number(coin_change) : Number(coin_old) - Number(coin_change))
  await changeCoinBotCreate(id, coin)
    .then(result => {
      console.log('update xu bot_create thành công')
    })
    .catch(err => console.log(err))
}
const randomMain = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const findIdWin = () => {
  let listPercent = []
  let VAT
  for (let obj of list_play) {
    listPercent.push(obj.percent)
  }
  const percentWin = randomMain(0, 99)
  let numberPercent = 0
  if (countPlayerJoin > 10)
    VAT = 10
  else VAT = countPlayerJoin - 1

  totalCoin = (totalCoin - (totalCoin * VAT / 100)).toFixed(0)
  for (let i = 0; i < listPercent.length; i++) {
    numberPercent += listPercent[i]
    if (numberPercent > percentWin) {
      return { coinJoin: list_play[i].coinJoin, coinWin: totalCoin, ingame: list_play[i].ingame, id_player: list_play[i].id_player }
    }
  }
}
const caclBotThue = id =>{
  if (randomMain(0,99) <= 20){
    const time = randomMain(16,110)
    // set always lower then 60
    const coin = caclBotJoin(10)
    const index_bot = randomMain(0,list_bot_create.length-1)
    list_thue.push({id: id,index : index_bot,time: time, coin: coin})
  }
  return false
}
const getBot = async () => {
  list_bot = []
  await getAllBot()
    .then(async list => {
      const data = list.data
      for (let i = 0; i < data.length; i++) {
        list_bot.push({
          id: data[i]._id,
          ingame: data[i].ingame,
          coin: data[i].coin
        })
      }
    })
    .catch(err => console.log(err))
}
const caclHourPlay = () => {
  if (day.getDate() != new Date().getDate()) {
    day = new Date()
    hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * hours.length)
      hours.splice(random, 1)
    }
    caclBotPlay()
  }
  else caclBotPlay()
}
const caclBotJoin = percent => {
  if (percent <= 60)
    return randomMain(1000000, 10000000)
  else if (percent > 60 && percent <= 90) {
    return randomMain(10000000, 20000000)
  }
  else if (percent > 90 && percent <= 95) {
    return randomMain(20000000, 30000000)
  }
  else if (percent > 95 && percent <= 98) {
    return randomMain(30000000, 40000000)
  }
  else if (percent > 98 && percent <= 100) {
    return randomMain(40000000, 50000000)
  }
}
const caclBotPlay = () => {
  list_ready = []
  list_thue = []
  min = hours.includes(day.getHours()) == true ? 10 : 1
  max = hours.includes(day.getHours()) == true ? 30 : 10
  let num = randomMain(min, max)
  for (let j = 0; j <= num; j++) {
    const bot = list_bot[randomMain(0, list_bot.length - 1)]
    while (list_ready.includes(bot) == true) {
      bot = list_bot[randomMain(0, list_bot.length - 1)]
    }
    const coin = caclBotJoin(randomMain())
    const setTime = randomMain(10, 120)
    list_ready.push({ bot, ...{ time: setTime }, ...{ coin: coin } })
    const del = caclBotThue(bot.id)
  }
}
const getBotCreate = async () => {
  list_bot_create = []
  await getAllBotCreate()
    .then(async list => {
      if (list.data != []) {
        const data = list.data
        for (let i = 0; i < data.length; i++) {
          list_bot_create.push({
            id: data[i]._id,
            ingame: data[i].ingame,
            id_boss: data[i].id_boss,
            ingame_boss: data[i].ingame_boss,
            coin: Number(data[i].coin),
            status: STATUS.FREE,
            status_join: false,
            time_join: 0,
            coin_join: 0,
            percent_join: 0,
            coin_win: 0,
            id_thue: ''
          })
        }
      }
    })
    .catch(err => console.log(err))
}

io.on('connection', (socket) => {
  const sendCoinWin = (id, coin) => {
    let flag = 0
    for (let a = 0; a < list_bot.length; a++) {
      if (list_bot[a].id == id) {
        flag = 1
        break
      }
    }
    for (let b = 0; b < list_bot_create.length; b++) {
      if (list_bot_create[b].id == id) {
        flag = 2
        list_bot_create[b].status = STATUS.SEND_WIN
        for (let m = 0; m < list_bot.length; m++) {
          if(list_bot[m].id == list_bot_create[b].id_thue){
            const number = (Number(coin) * 10 / 100).toFixed(0)
            updateCoinBotCreate(list_bot_create[b].id,list_bot_create[b].coin,number,true)
            list_bot_create[b].coin += number
            socket.broadcast.emit('updateListBotCreate', list_bot_create)
            socket.emit('updateListBotCreate', list_bot_create)
            setTimeout(()=>clear(b),2000)
          }
        }
        break
      }
    }
    if (flag == 0) {
      updateCoinPlayer(id, coin, true)
    }
  }
  const beginPlay = () => {
    const countdown = setInterval(() => {
      socket.emit('letgo', timeout)
      socket.broadcast.emit('letgo', timeout)
      timeout -= 1
      for (let z = 0; z < list_thue.length;z++){
        if (list_thue[z].time == timeout && list_bot_create[list_thue[z].index].status == STATUS.FREE){
          list_bot_create[list_thue[z].index].status = STATUS.TRADE
          list_bot_create[list_thue[z].index].id_thue = list_thue[z].id
          list_bot_create[list_thue[z].index].coin += Number(list_thue[z].coin)
          socket.broadcast.emit('updateListBotCreate', list_bot_create)
          socket.emit('updateListBotCreate', list_bot_create)
          setTimeout(()=>{
            list_bot_create[list_thue[z].index].status = STATUS.BUSY
            list_bot_create[list_thue[z].index].time_join = list_thue[z].time - 6
            list_bot_create[list_thue[z].index].coin_join = Number(list_thue[z].coin)
            socket.broadcast.emit('updateListBotCreate', list_bot_create)
            socket.emit('updateListBotCreate', list_bot_create)
          },5000)
        }
      }
      for (let x = 0; x < list_ready.length; x++) {
        if (list_ready[x].time == timeout) {
          countPlayerJoin += 1
          totalCoin += list_ready[x].coin
          list_play.push({ id_player: list_ready[x].bot.id, ingame: list_ready[x].bot.ingame, coinJoin: list_ready[x].coin, percent: 0 })
          const del = calcAndFindPercent(list_ready[x].bot.id)
        }
      }
      for (let y = 0; y < list_bot_create.length; y++) {
        if (list_bot_create[y].time_join >= timeout && list_bot_create[y].time_join != 0 && !list_bot_create[y].status_join) {
          countPlayerJoin += 1
          totalCoin += Number(list_bot_create[y].coin_join)
          list_play.push({ id_player: list_bot_create[y].id, ingame: list_bot_create[y].ingame, coinJoin: Number(list_bot_create[y].coin_join), percent: 0 })
          const xel = calcAndFindPercent(list_bot_create[y].id)
          list_bot_create[y].percent_join = xel.percent
          list_bot_create[y].coin -= Number(xel.coinJoin)
          list_bot_create[y].status_join = true
          list_bot_create[y].time_join = timeout
          socket.broadcast.emit('updateListBotCreate', list_bot_create)
          socket.emit('updateListBotCreate', list_bot_create)
        }
      }
      if (timeout % 5 == 0) {
        socket.broadcast.emit('reload')
        socket.emit('reload')
      }
      if (timeout == 10) {
        for (let c = 0; c < list_bot_create.length; c++) {
          if (list_bot_create[c].coin_join == '') {
            list_bot_create[c].status = STATUS.FREE
          }
          const tel = calcAndFindPercent(list_bot_create[c].id)
          list_bot_create[c].percent_join = tel.percent
        }
        for (let x = 0; x < list_ready.length; x++) {
          const del = calcAndFindPercent(list_ready[x].bot.id)
        }
        getBot()
        socket.broadcast.emit('updateListBotCreate', list_bot_create)
        socket.emit('updateListBotCreate', list_bot_create)
      }
      if (timeout == 0) {
        if (list_play.length == 0) {
          clearInterval(countdown)
          timeout = 120
          setTimeout(beginPlay, 5000)
        }
        else {
          clearInterval(countdown)
          last_win = findIdWin()
          sendCoinWin(last_win.id_player, Number(last_win.coinWin))
          socket.emit('sendLastWin', last_win)
          socket.broadcast.emit('sendLastWin', last_win)
          timeout = 120
          list_play = []
          totalCoin = 0
          countPlayerJoin = 0
          for (let k = 0; k < list_bot_create.length; k++) {
            if (last_win.id_player != list_bot_create[k].id) {
              if (list_bot_create[k].status == STATUS.SEND_WIN) {
                continue
              }
              else {
                setTimeout(()=>clear(k),3000)
              }
            }
          }
          socket.broadcast.emit('updateListBotCreate', list_bot_create)
          socket.emit('updateListBotCreate', list_bot_create)
          setTimeout(() => {
            socket.emit('updateCoin')
            socket.broadcast.emit('updateCoin')
          }, 1000)
          caclHourPlay()
          setTimeout(beginPlay, 1000)
        }
      }
      console.log('countdown', timeout)
    }, 1000)
  }
  if (begin == 0) {
    begin += 1
    setTimeout(async () => {
      await getBot()
      caclHourPlay()
      await getBotCreate()
      beginPlay()
    }, 1000)
  }
  socket.on('changeStatus', data => {
    list_bot_create[data.index].status = data.status
    list_bot_create[data.index].id_thue = data.id_thue
    socket.broadcast.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateListBotCreate', list_bot_create)
  })
  socket.on('send', async data => {
    const item = list_bot_create[data.index]
    await updateCoinBotCreate(item.id, item.coin, data.coin, false)
    await updateCoinPlayer(item.id_boss, data.coin, true)
    list_bot_create[data.index].status = STATUS.FREE
    list_bot_create[data.index].coin = list_bot_create[data.index].coin - Number(data.coin)
    socket.emit('updateListBotCreate', list_bot_create)
    socket.broadcast.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateCoin')
  })
  socket.on('playBot', async data => {
    list_bot_create = data.list
    await updateCoinPlayer(list_bot_create[data.index].id_thue, list_bot_create[data.index].coin_join, false)
    socket.broadcast.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateCoin')
  })
  socket.on('keepCoin', async data => {
    const m = list_bot_create[data.index]
    await updateCoinBotCreate(m.id, m.coin, data.coin, true)
    clear(data.index)
    socket.broadcast.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateListBotCreate', list_bot_create)
  })
  socket.on('sendWin', async data => {
    const m = list_bot_create[data.index]
    const money = (Number(data.coin) * 10 / 100).toFixed(0)
    await updateCoinPlayer(m.id_thue, Number(data.coin) - money, true)
    await updateCoinBotCreate(m.id, m.coin, money, true)
    list_bot_create[data.index].coin += Number(money)
    clear(data.index)
    socket.broadcast.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateListBotCreate', list_bot_create)
    socket.emit('updateCoin')
  })
  socket.on('updateChat', obj => {
    socket.broadcast.emit('sendMessage', obj)
  })
  socket.on('updateLastWin', () => {
    socket.emit('sendLastWin', last_win)
  })
  socket.on('addBotCreate', async data => {
    await addBotCreate(data)
      .then(async result => {
        console.log('tạo bot thành công')
        list_bot_create.push({
          id: result.data._id,
          ingame: result.data.ingame,
          id_boss: result.data.id_boss,
          ingame_boss: result.data.ingame_boss,
          coin: 0,
          status: STATUS.FREE,
          status_join: false,
          time_join: 0,
          coin_join: 0,
          percent_join: 0,
          coin_win: 0,
          id_player: ''
        })
        socket.broadcast.emit('updateListBotCreate', list_bot_create)
        socket.emit('updateListBotCreate', list_bot_create)
      })
      .catch(err => console.log(err))
  })
  socket.on('loadListBotCreate', () => {
    socket.emit('updateListBotCreate', list_bot_create)
  })
  socket.on('play', async obj => {
    let flag = false
    for (let i = 0; i < list_play.length; i++) {
      if (obj.id_player == list_play[i].id_player) flag = true
    }
    countPlayerJoin += (flag == true ? 0 : 1)
    totalCoin += obj.coinJoin
    updateCoinPlayer(obj.id_player, obj.coinJoin, false)
    setTimeout(() => {
      socket.emit('updateCoin')
    }, 1000)
    list_play.push({ id_player: obj.id_player, ingame: obj.ingame, coinJoin: obj.coinJoin, percent: 0 })
    socket.emit('reload')
  })
  socket.on('justDoIt', id_player => {
    const data = [calcAndFindPercent(id_player), totalCoin, countPlayerJoin]
    socket.emit('updatePlayerPlay', data)
  })
})
