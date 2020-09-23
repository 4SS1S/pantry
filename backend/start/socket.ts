import socketIo from 'socket.io'
import Server from '@ioc:Adonis/Core/Server'

import Ws from 'App/Services/Ws'

const io = socketIo(Server.instance!)

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })

  socket.on('my other event', (data) => {
    console.log(data)
  })
})

Ws.start((socket) => {
  socket.emit('news', { hello: 'world' })
  
  socket.on('my other event', (data) => {
    console.log(data)
  })
})