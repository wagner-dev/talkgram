import Head from '../../services/client/Head/index'
import CreateRoom from '../../components/CreateRoom/index'
import VerifyAuth from '../../services/src/verifyAuth/index'
import { AuthContext } from '../../services/client/auth//index'
 
export default function RoomChat({ user }) {

    return (
        <>
            <Head 
                title="Talkgram - Criar sala"
                description="Crie sua própria sala sobre o tema que você quiser."
            />

            <AuthContext userAuth={user}>
                <CreateRoom />
            </AuthContext>
        </>
    )
}


export const getServerSideProps = async (context) => {
    const resultAuth = await VerifyAuth(context)

    if(!resultAuth.auth){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            user: resultAuth
        }
    }
}