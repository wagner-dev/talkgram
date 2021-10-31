import { 
    Body,
    AlertMessage,
    AlertDate,
    AlertContent
} from './styled'

export default function AlertComponent({ item, date }) {
    

    return (
        <Body>
            <AlertContent>
                <AlertMessage>
                    <span>{ item.data.message }</span>
                </AlertMessage>
                <AlertDate>
                    <span>{ date }</span>
                </AlertDate>
            </AlertContent>
        </Body>
    )
}