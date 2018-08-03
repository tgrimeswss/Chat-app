const express = require('express')
const path = require('path')
const socket = require('socket.io')
/*
Variable is called express
The variable is equal to GETTING the express code and importing it into this file
Very similar to a link
*/

const app = express()
/*
Variable is called app
App is equal the express function
When this is called, express is now operating live
*/

const server = app.listen(4000)
//Variable is called server
//Server is equal to listening to our local port 4000


app.use(express.static('client'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/client/index.html'))
})

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname,'/client/About.html'))
})


const io = socket(server)
io.on('connection',function(socket){
  socket.on('banana',function(data){
    io.sockets.emit('banana',data)
  })
})


console.log('App is running on port: 4000')
//Success message
