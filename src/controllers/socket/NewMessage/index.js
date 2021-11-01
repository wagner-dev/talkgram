const { verifyJwt } = require('../../../services/auth/index')

function NewMessageSocket(io, socket) {

        socket.on('new_message', ({ token, message, room }) => {
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
                socket.to(room).emit('new_message', publicData)

                // private message - just for the user
                const privateData = createData({ image, name: 'Você', who: 'i' })
                io.to(socket.id).emit('new_message', privateData)
            }
        })

}

module.exports = NewMessageSocket