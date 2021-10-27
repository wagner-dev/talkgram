import {
    Body
} from './styled'
import { useAuth } from '../../../services/client/auth/index'

export default function ActiveUsers() {
    
    const { user } = useAuth()

    return(
        <Body>
            { user.auth ? 'authenticate' : 'unauthenticate'}
        </Body>
    )
}