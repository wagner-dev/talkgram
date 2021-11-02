import Head from '../services/client/Head/index'
import Index from '../components/index/index'
import VerifyAuth from '../services/src/verifyAuth'
import { AuthContext } from '../services/client/auth/index'


export default function IndexPage({ user }){
    return (
        <>
            <Head 
                title="Talkgram - Chat online gratuito"
                description="O talkgram é um serviço de mensagens instantâneas - chat online gratuito. Aqui você encontra salas de todos os temas, amizade, games, namoro, entre outros"
            />

            <AuthContext userAuth={user}>
                <Index />
            </AuthContext>
        </>
    )
}

export async function getServerSideProps(context) {
    const resultAuth = await VerifyAuth(context)

    return {
        props: {
            user: resultAuth
        }
    }

}