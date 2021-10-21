import {
    Body
} from './styled'
import IconComponent from './components/Icon/index'
import BodyComponent from './components/Body/index'

export default function IndexComponent() {
    return (
        <Body>
            <IconComponent />
            <BodyComponent />
        </Body>
    )
}