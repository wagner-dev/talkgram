const EnterSocket = require('./Enter/index')
const NewMessageSocket = require('./NewMessage/index')
const DisconnectedSocket = require('./Disconnected/index')

function Socket(io) {

    const users = {}

    io.on('connection', (socket) => {

        EnterSocket(io, socket, users)
        NewMessageSocket(io, socket)
        DisconnectedSocket(io, socket, users)
        
    })
}


module.exports = Socket