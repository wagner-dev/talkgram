import Index from '../components/index/index'
import VerifyAuth from '../services/src/verifyAuth'
import { AuthContext } from '../services/client/auth/index'

export default function IndexPage({ user }){
    return (
        <AuthContext userAuth={user}>
            <Index />
        </AuthContext>
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