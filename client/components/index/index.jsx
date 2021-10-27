import { useState } from 'react'
import {
    Body
} from './styled'
import IconComponent from './Icon/index'
import BodyComponent from './Body/index'
import api from '../../services/client/api/index'
import { persistCookie } from '../../services/src/persist/index'
import { useAuth } from '../../services/client/auth/index'

export default function IndexComponent() {
    
    const { setUser } = useAuth()

    const [meta, setMeta] = useState({
        loading: false,
        alert: {
            type: 'err',
            message: ''
        }
    })
    
    const RequestLogin = async (dataForm) => {
        // loading true
        setMeta({
            loading: true,
            alert: {
                type: 'err',
                message: ''
            },
        })
        
        try{
            const { data } = await api.post('/login', dataForm)
            
            setUser({
                auth: true,
                data: dataForm
            })
            const TOKEN = data.token
            persistCookie(null, "talkgram_token", TOKEN)
            setTimeout(() => setMeta(prev => ({...prev, loading: false})), 300)
        }
        catch{
            setMeta({
                loading: false,
                alert: {
                    type: 'err',
                    message: 'Ocorreu um erro :('
                },
            })
        }
    }

    return (
        <Body>
            <IconComponent />
            <BodyComponent 
            RequestLogin={RequestLogin}
            meta={meta}
            setMeta={setMeta} />
        </Body>
    )
}
