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

db.once('open', function(){
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
io.on('connection', (socket) => {
    // socket.on('checkExist',ingame=>{
    //     for(let i = 0;i < )
    // })
})
