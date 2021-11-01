import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    TextLogo,
    InputSubmit,
    TextHelp,
    InputCode
} from './styled'

export default function DataComponent(){

    const router = useRouter()

    const [room, setRoom] = useState('')

    const VerifyRoom = () => {
        const valid = room.length 
        ? true
        : false

        if(valid)
            router.push(`/rooms/${ room }`)
    }

    return (
        <>
            <TextLogo>
                <h2>
                    Crie salas e converse com seus amigos em tempo real
                </h2>
            </TextLogo>
            <InputSubmit space={true}>
                <Link href="/" passHref>
                    <a>
                        <input type="submit" value="Entrar em uma sala existente"/>
                    </a>
                </Link>
            </InputSubmit>
            <TextHelp>
                <span>ou crie uma sala</span>
            </TextHelp>
            <InputCode>
                <input
                    value={room}
                    onChange={({ target }) => setRoom( target.value.toLowerCase().trim() )} 
                    placeholder="Digite o nome da sala" />
            </InputCode>
            <InputSubmit onClick={VerifyRoom}>
                <input 
                    type="submit"
                    value="Criar sala"/>
            </InputSubmit>
        </>
    )
}