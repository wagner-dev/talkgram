import {
    Title,
    GoogleButton,
} from './styled'
import {
    ErrorText
} from '../styled'
import GoogleLogin from 'react-google-login'

export default function UnAuthComponent({ RequestLogin, meta: { alert }, setMeta }){

    const ChangeLoginGoogle = (result) => {
        if(result.error){
            setMeta(prev => ({...prev, alert: {
                type: 'err',
                message: 'Ocorreu um erro :('
            }}))
        }
        else{
            const { profileObj: { name, email, imageUrl: image } } = result

            const data = {
                name,
                email,
                image
            }
            
            RequestLogin(data)
        }
    }

    return (
        <>
            <Title>
                <h2>
                    logue e comece a conversar com seus colegas em tempo real.
                </h2>
            </Title>
            <GoogleLogin
            onFailure={ChangeLoginGoogle}
            onSuccess={ChangeLoginGoogle}
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
            clientId="154300190598-tm17bm2tmigdu3grudqsb906ms0nhbb3.apps.googleusercontent.com"
            />
            {
                alert?.message && (
                    <ErrorText>
                        <span>{alert.message}</span>
                    </ErrorText>
                )
            }
        </>
    )
}