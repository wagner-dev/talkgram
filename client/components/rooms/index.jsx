import { useEffect } from 'react'
import { getCookie } from '../../services/src/persist/index'
import io from 'socket.io-client'

const socket = io.connect( process.env.NEXT_PUBLIC_SOCKET )

export default function Rooms({ id }){

    const EnterInRoom = () => {
        const token = getCookie(null)
        const options = {
            sala: id,
            token
        }
        socket.emit('enter', options)
    }
    const VerifyAuth = () => {
        socket.on('unAuth', ({ status }) => {
            console.log(status)
        })
    }

    useEffect(() => {
        EnterInRoom()
        VerifyAuth()

        
    }, [])
    
    return 'sala :'+id
}