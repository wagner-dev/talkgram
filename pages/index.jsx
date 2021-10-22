import Index from '../components/index/index'
import api from '../services/client/api/index'
import { parseCookies } from 'nookies'

export default function IndexPage({ user }){
    return <Index userAuth={user} />
}



export async function getServerSideProps(context) {
    
    const authDefault = {
        auth: false,
        data: {}
    }

    try{
        const VerifyAuth = async () => {
            const token = parseCookies(context)?.talkgram_token

            if(token) {
                const { data, status} = await api.post('/check', { token })
                
                const correctStatus = data.status === 200 && status === 200

                const auth = 
                correctStatus 
                    ?  { auth: true, data: data.data}
                    :   authDefault
                
                return auth
            }

            else 
                return authDefault
        }

        const auth = await VerifyAuth()

        return {
            props: {
                user: auth
            }
        }
    }
    catch{
        return {
            props: {
                user: authDefault
            }
        }
    }

}