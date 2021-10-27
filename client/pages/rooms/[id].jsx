import { useRouter } from 'next/router'
import Rooms from '../../components/rooms/index'
import VerifyAuth from '../../services/src/verifyAuth/index'
import { AuthContext } from '../../services/client/auth//index'
 
export default function RoomChat({ user }) {
    const  { query: { id } }  = useRouter()

    return (
        <AuthContext userAuth={user}>
            <Rooms id={id} />
        </AuthContext>
    )
}


export const getServerSideProps = async (context) => {
    const resultAuth = await VerifyAuth(context)

    return {
        props: {
            user: resultAuth
        }
    }
}