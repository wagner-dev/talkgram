import Head from '../../services/client/Head/index'
import { useRouter } from 'next/router'
import Rooms from '../../components/rooms/index'
import VerifyAuth from '../../services/src/verifyAuth/index'
import { AuthContext } from '../../services/client/auth//index'
 
export default function RoomChat({ user }) {
    const  { query: { id } }  = useRouter()

    return (
        <>
            <Head 
                title={`Talkgram - Sala: ${id}`}
                description="Converse por meio de mensagens instantâneas com seus colegas em salas de temas variados."
            />

            <AuthContext userAuth={user}>
                <Rooms id={id} />
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