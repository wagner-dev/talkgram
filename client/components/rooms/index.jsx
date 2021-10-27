import { useState, useEffect } from 'react'
import {
    Body,
    GlobalStyle
} from './styled'
import ActiveUsers from './ActiveUsers/index'
import Chat from './Chat/index'
import io from 'socket.io-client'
import { getCookie } from '../../services/src/persist/index'

const socket = io.connect( process.env.NEXT_PUBLIC_HOST_API )

export default function Rooms({ id }){

    const [activeUsers, setActiveUsers] = useState([])

    const EnterInRoom = () => {
        const token = getCookie(null)
        const options = {
            sala: id,
            token
        }
        socket.emit('enter', options)
    }
    const VerifyActiveUsers = () => {
        socket.on('new_user', (data) => {
            setActiveUsers(prev => [...prev, data])
        })
    }

    useEffect(() => {
        EnterInRoom()
        VerifyActiveUsers()

        
    }, [])
    
    return (
        <>
            <GlobalStyle />
            <Body>
                <ActiveUsers 
                activeUsers={activeUsers} />
                <Chat />
            </Body>
        </>
    )
}