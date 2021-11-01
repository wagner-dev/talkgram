import { useState, useEffect } from 'react'
import {
    Body,
    GlobalStyle
} from './styled'
import Chat from './Chat/index'
import Content from './Content/index'
import io from 'socket.io-client'
import { getCookie } from '../../services/src/persist/index'

const socket = io.connect( process.env.NEXT_PUBLIC_HOST_API )

export default function Rooms({ id }){

    const [myMessage, setMyMessage] = useState('')
    const [messages, setMessages] = useState([])
    
    
    const EnterInRoom = () => {
        const token = getCookie(null)
        
        const options = {
            room: id,
            token
        }
        socket.emit('enter', options)
    }
    
    const VerifyMessages = () => {
        socket.on('new_message', (data) => {
            setMessages(prev => [...prev, data])
        })
    }
    useEffect(() => {
            EnterInRoom()
            VerifyMessages()
    }, [])


    
    
    const SendMessage = (message) => {

        const token = getCookie(null)
        
        const options = {
            room: id,
            message,
            token,
        }
        socket.emit('new_message', options)
        
        // reset message
        setMyMessage('')
    }
    
    return (
        <>
            <GlobalStyle />
            <Body>
                <Content />
                <Chat 
                    messages={messages}
                    myMessage={myMessage}
                    setMyMessage={setMyMessage}
                    SendMessage={SendMessage}
                />
            </Body>
        </>
    )
}