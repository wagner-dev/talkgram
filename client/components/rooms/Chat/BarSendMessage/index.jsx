import {
    Body,
    InputMessage,
    InputSubmit
} from './styled'

export default function BarSendMessage({ myMessage, setMyMessage, SendMessage}) {

    const VerifyMessage = () => {
        const valid = myMessage.length
        ? true
        : false

        if(valid)
            SendMessage(myMessage)
    }

    return(
        <Body>
            <InputMessage>
                <textarea 
                    value={myMessage}
                    onChange={({ target }) => setMyMessage( target.value )}
                    placeholder="Mensagem..."
                    maxLength="1500" />
            </InputMessage>
            
            <InputSubmit onClick={VerifyMessage}>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 576L810.666667 512 128 448V160.981333a21.333333 21.333333 0 0 1 30.08-19.456l780.032 351.018667a21.333333 21.333333 0 0 1 0 38.912L158.08 882.474667A21.333333 21.333333 0 0 1 128 863.018667V576z" fill="#ffffff" /></svg>
            </InputSubmit>
        </Body>
    )
}