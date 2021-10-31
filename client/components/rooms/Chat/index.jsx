import {
    Body
} from './styled'
import BarSendMessage from './BarSendMessage/index'
import RoomName from './RoomName/index'
import Messages from './Messages/index'

export default function Chat({ messages, myMessage, setMyMessage, SendMessage }) {

    return(
        <Body>
            <RoomName />
            
            <Messages 
                messages={messages} />

            <BarSendMessage
                myMessage={myMessage}
                setMyMessage={setMyMessage}
                SendMessage={SendMessage}
            />
        </Body>
    )
}