import {
    Body
} from './styled'
import ListItems from './ListItems/index'

export default function ActiveUsers({ activeUsers }) {


    return(
        <>
            <Body>
                <ListItems 
                activeUsers={activeUsers} />
            </Body>
        </>
    )
}