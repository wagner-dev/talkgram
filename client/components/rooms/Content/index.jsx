import Image from 'next/image'
import {
    Body,
    Content,
    Svg,
    Text
} from './styled'
import SvgIcon from '../../../assets/rooms/Content/index.svg'

export default function ContentComponent() {
    
    return (
        <Body>
            <Content>
                <Svg>
                    <Image
                        src={SvgIcon.src}
                        height={SvgIcon.height}
                        width={SvgIcon.width}
                        
                        placeholder="blur"
                        blurDataURL={SvgIcon.src}
                        alt="Icon"
                     />
                </Svg>
                <Text>
                    <span>
                        Compartilhe suas ideas enviando mensagens
                    </span>
                </Text>
            </Content>
        </Body>
    ) 
}