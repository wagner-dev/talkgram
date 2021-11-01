import Image from 'next/image'
import {
    Body,
    Logo,
    BodyData,
} from './styled'
import LogoImage from '../../../public/assets/logo/index.png'
import Data from './Data/index'

export default function BodyComponent(){

    return (
        <Body>
            <Logo>
                <Image 
                width={200}
                height={50}
                src={LogoImage.src}
                alt="Logo"/>
            </Logo>
            <BodyData> 
                <Data />
            </BodyData>
        </Body>
    )
}