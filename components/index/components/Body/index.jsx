import Image from 'next/image'
import {
    Body,
    Logo,
    Title,
    GoogleButton,
    BodyData,
    InputCode,
    InputSubmit,
    TextLogo,
    TextHelp
} from './styled'
import LogoImage from '../../../../public/assets/logo/index.png'
import GoogleLogin from 'react-google-login'

export default function BodyComponent(){
    return (
        <Body>
            <Logo>
                <Image 
                width={200}
                height={50}
                src={LogoImage.src}
                alt="Logo"/>
            </Logo>
            <BodyData>
                <Title>
                    <h2>
                        logue e comece a conversar com seus amigos em tempo real.
                    </h2>
                </Title>
                <GoogleLogin
                render={(props) =>
                    <GoogleButton disabled={props.disabled} onClick={props.onClick}>
                        <div>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        </div>
                        <div>
                            <span>
                                Continuar com o google
                            </span>
                        </div>

                    </GoogleButton>
                }
                clientId="52547737398-17en55m0r6r5jlhfsekhb2f117rnn9a3.apps.googleusercontent.com"
                />    

                <TextLogo>
                    <h2>
                        Crie salas e converse com seus amigos em tempo real
                    </h2>
                </TextLogo>
                <InputSubmit space={true}>
                    <input type="submit" value="Criar uma sala"/>
                </InputSubmit>
                <TextHelp>
                    <span> Ou entre em uma sala </span>
                </TextHelp>
                <InputCode>
                    <input placeholder="Digite o nome da sala" />
                </InputCode>
                <InputSubmit>
                    <input  type="submit" value="Entrar na sala"/>
                </InputSubmit>
            </BodyData>
        </Body>
    )
}