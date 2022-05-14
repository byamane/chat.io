const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require("socket.io")
app.use(cors())

const server = http.createServer(app)

// create server and call out what connections can be made to it
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id)
  })
})

server.listen(3001, () => {
  console.log("Connected to port 3001")
})