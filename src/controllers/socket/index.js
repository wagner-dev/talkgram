const { verifyJwt } = require('../../services/auth/index')

function Socket(io) {
    
    io.on('connection', (socket) => {
        socket.on('enter', ({ token, sala }) => {
            socket.join(sala)

            function createData({ name }) {
                const data = {
                    type: 'alert',
                    data: {
                        date: new Date(),
                        message: `${name} entrou na sala`
                    }
                }

                return data
            }
            const user = verifyJwt(token)
            if(user){
                const { name } = user
                const publicData = createData({ name })
                socket.to(sala).emit('new_message', publicData)

                const privateData = createData({ name: 'Você' })
                io.to(socket.id).emit('new_message', privateData)
            }
        })
        
        
        socket.on('new_message', ({ token, message, sala }) => {
            const user = verifyJwt(token)

            function createData({ name, image, who }){

                const data = {
                    type: 'message',
                    data: {
                        date: new Date(),
                        message,
                        image,
                        name,
                        who,
                    }
                }
                return data
            }

            if(user) {
                const { image, name } = user
                // message to everyone
                const publicData = createData({ image, name, who: 'user' })
                socket.to(sala).emit('new_message', publicData)

                // private message - just for the user
                const privateData = createData({ image, name: 'Você', who: 'i' })
                io.to(socket.id).emit('new_message', privateData)
            }
        })
    })
}


module.exports = Socket