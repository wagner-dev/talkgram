require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const server = require('http').createServer(app)
const router = require('./routers/index')

// config - middlewares
app.use(express.json())

app.use(helmet())

app.use(cors({
    origin: process.env.HOST_TALKGRAM 
}))

app.use('/api', router)

// routers



app.listen(3333)
