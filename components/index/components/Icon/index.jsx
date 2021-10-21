import Image from 'next/image'
import {
    Body,
    Icon,
    Title,
    SubTitle
} from './styled'
import IconImage from '../../../../assets/index/icon/index.svg'

export default function IconComponent(){
    return (
        <Body>
            <Icon>
                <Image 
                width={980}
                height={700}
                placeholder="blur"
                blurDataURL={IconImage}
                src={IconImage.src}
                alt="Imagem" />
            </Icon>
            <Title>
                <h2>Crie salas e converse com seus amigos</h2>
            </Title>
            <SubTitle>
                <h3>Em tempo real</h3>
            </SubTitle>
        </Body>
    )
}