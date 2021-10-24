import { useState } from 'react'
import {
    Body
} from './styled'
import IconComponent from './components/Icon/index'
import BodyComponent from './components/Body/index'
import api from '../../services/client/api/index'
import { persistCookie } from '../../services/src/persist/index'

export default function IndexComponent({ userAuth }) {

    const [meta, setMeta] = useState({
        loading: false,
        alert: {
            type: 'err',
            message: ''
        }
    })
    
    const [user, setUser] = useState( userAuth )
    
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
            user={user}
            RequestLogin={RequestLogin}
            meta={meta}
            setMeta={setMeta} />
        </Body>
    )
}
