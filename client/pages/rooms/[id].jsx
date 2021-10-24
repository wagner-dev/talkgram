import { useRouter } from 'next/router'
import Rooms from '../../components/rooms/index'

export default function RoomChat() {
    const  { query: { id } }  = useRouter()

    return <Rooms id={id} />
}