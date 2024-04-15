const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const app = express()
const path = require('path')
const serveStatic = require('serve-static')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const dayjs = require("dayjs");
const router = require('./router')
app.use(cors())
app.use('/', serveStatic(path.join(__dirname, '/dist')))

mongoose.connect('mongodb://localhost:27017/user')
const db = mongoose.connection;
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});

app.use(jsonParser);
var server = require("http").Server(app)

const io = require("socket.io")(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT"]
    }
});
server.listen(port)
io.on('connection', (socket) => {
    // socket.on('checkExist',ingame=>{
    //     for(let i = 0;i < )
    // })
})
