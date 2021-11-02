import Image from 'next/image'
import { 
    Body,
    Svg,
    Content
} from './styled'
import EmptyIcon from '../../../../../../assets/rooms/empty/index.svg'

export default function EmptyMessages() {
    

    return (
        <Body>
            <Svg>
                <Image
                    width={406}
                    height={306}
                    src={EmptyIcon}
                    placeholder='blur'
                    blurDataURL={EmptyIcon}
                    alt="Icon - nenhuma mensagem"
                    />
            </Svg>
            <Content>
                <span> Nenhuma mensagem </span>
            </Content>
        </Body>
    )
}