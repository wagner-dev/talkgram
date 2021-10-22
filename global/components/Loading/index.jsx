import {
    Body,
    Loading
} from './styled'

export default function LoadingComponent({ height, padding }){
    return (
        <Body 
        height={height}
        padding={padding}>
            
            <Loading />
        </Body>
    )
}