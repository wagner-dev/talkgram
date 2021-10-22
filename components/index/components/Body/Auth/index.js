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
    

    return (
        <>
            <TextLogo>
                <h2>
                    Crie salas e converse com seus amigos em tempo real
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
                <input placeholder="Digite o nome da sala" />
            </InputCode>
            {
                alert?.message && (
                    <ErrorText>
                        <span> {alert.message} </span>
                    </ErrorText>
                )
            }
            <InputSubmit>
                <input  type="submit" value="Entrar na sala"/>
            </InputSubmit>
        </>
    )
}