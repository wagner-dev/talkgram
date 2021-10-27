const { verifyJwt } = require('../../services/auth/index')

function Socket(io) {
    
    io.on('connection', (socket) => {
        socket.on('enter', ({ token, sala }) => {
            socket.join(sala)

            const user = verifyJwt(token)
            if(user){
                const { image, name } = user
                const data = {
                    name,
                    image
                }
                io.to(sala).emit('new_user', data)
            }
        })
    })
}


module.exports = Socket