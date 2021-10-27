import api from '../../../services/client/api/index'
import { getCookie } from '../../../services/src/persist/index'

const VerifyAuth = async (context) => {
    
    const authDefault = {
        auth: false,
        data: {}
    }

    try{
        const token = getCookie(context)
        
        if(token) {
            const headers = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const { data, status} = await api.post('/check', null, headers)

            const correctStatus = data.status === 200 && status === 200
            const isAuth = {
                auth: true,
                data: data.data
            }
            const auth = correctStatus 
            ?   isAuth
            :   authDefault
            
            return auth
        }
        else 
            return authDefault
    }
    catch{
        return authDefault
    }
}

export default VerifyAuth