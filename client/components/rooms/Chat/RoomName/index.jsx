import { useRouter } from 'next/router'
import { 
    Body,
    Name
} from './styled'

export default function RoomName() {
    const { query: { id } } = useRouter()

    return(
        <Body>
            <Name>
                <h2>Sala: { id }</h2>
            </Name>         
        </Body>
    )
}