
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const server = require('http').createServer(app)
const router = require('./routers/index')
const { Server } = require('socket.io')
const Socket = require('./controllers/socket/index')

// config - middlewares
app.use(express.json())

app.use(helmet())

app.use(cors({
    origin: process.env.HOST_CLIENT
}))

// routers
app.use('/api', router)

// socket
const io = new Server(server, {
    cors: {
        origin: process.env.HOST_CLIENT,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
})
Socket( io )

const PORT = process.env.PORT || 3333
server.listen(PORT)
