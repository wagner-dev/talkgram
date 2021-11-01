import { useState } from 'react'
import {
    Body
} from './styled'
import IconComponent from './Icon/index'
import BodyComponent from './Body/index'

export default function IndexComponent() {

    return (
        <Body>
            <IconComponent />
            <BodyComponent />
        </Body>
    )
}
