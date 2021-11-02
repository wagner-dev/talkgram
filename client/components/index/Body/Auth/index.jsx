import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    TextLogo,
    InputSubmit,
    TextHelp,
    InputCode
} from './styled'
import {
    ErrorText
} from '../styled'
export default function AuthComponent({ meta: { alert } }){

    const router = useRouter()

    const [room, setRoom] = useState('')

    const VerifyRoom = () => {
        const valid = room.length 
        ? true
        : false

        if(valid)
            router.push(`rooms/${ room }`)
    }

    return (
        <>
            <TextLogo>
                <h2>
                    Converse por meio de mensagens com seus colegas em tempo real
                </h2>
            </TextLogo>
            <InputSubmit space={true}>
                <Link href="/rooms/new" passHref>
                    <a>
                        <input type="submit" value="Criar uma sala"/>
                    </a>
                </Link>
            </InputSubmit>
            <TextHelp>
                <span> Ou entre em uma sala </span>
            </TextHelp>
            <InputCode>
                <input
                    value={room}
                    onChange={({ target }) => setRoom( target.value.toLowerCase().trim() )} 
                    placeholder="Digite o nome da sala" />
            </InputCode>
            {
                alert?.message && (
                    <ErrorText>
                        <span> {alert.message} </span>
                    </ErrorText>
                )
            }
            <InputSubmit onClick={VerifyRoom}>
                <input 
                    type="submit"
                    value="Entrar na sala"/>
            </InputSubmit>
        </>
    )
}