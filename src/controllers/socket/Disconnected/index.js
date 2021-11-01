
function Disconnected(io, socket, users) {

        socket.on('disconnect', () => {

            function createData({ name }) {
                const data = {
                    type: 'alert',
                    data: {
                        date: new Date(),
                        message: `${name} saiu da sala`
                    }
                }

                return data
            }
            const user = users[ socket.id ]

            if(user) {
                const { name, room } = user

                const publicData = createData({ name })
                socket.to(room).emit('new_message', publicData)
    
                const privateData = createData({ name: 'Você' })
                io.to(socket.id).emit('new_message', privateData)

                // disconnect user
                delete users[ socket.id ]
            }
        })

}

module.exports = Disconnected