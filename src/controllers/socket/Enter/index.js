const { verifyJwt } = require('../../../services/auth/index')

function EnterSocket(io, socket, users) {

        socket.on('enter', ({ token, room }) => {
            socket.join(room)

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

                users[socket.id] = { name, room }

                const publicData = createData({ name })
                socket.to(room).emit('new_message', publicData)

                const privateData = createData({ name: 'Você' })
                io.to(socket.id).emit('new_message', privateData)
            }
        })

}

module.exports = EnterSocket