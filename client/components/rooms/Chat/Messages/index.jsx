import { useEffect, createRef } from 'react'
import { 
    Body,
} from './styled'
import ListMessages from './ListIMessages/index'

export default function Messages({ messages }) {

    const elementScroll = createRef()

    useEffect(() => {        
        const { current: element } = elementScroll

        const height = element.scrollHeight

        element.scrollTo(0, height)

    }, [ messages ])

    return(
        <Body ref={elementScroll}>
            <ListMessages 
            messages={messages} />
        </Body>
    )
}