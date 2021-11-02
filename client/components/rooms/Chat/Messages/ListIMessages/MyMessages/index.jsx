import Image from 'next/image'
import { 
    ItemMessage,
    ItemMessageImage,
    ItemMessageContent,
    ItemContent,
    ItemMessageName,
    ItemMessageDate,
    ItemMessageData
} from '../styled'


export default function MyMessages({ item, date }) {

    return (
        <ItemMessage type_message="i">
            <ItemContent type_message="i">
                <ItemMessageContent type_message="i" >
                    <span>
                        { item.data.message }
                    </span>
                </ItemMessageContent>
                <ItemMessageData>
                    {
                        date && (
                            <ItemMessageDate type_message="i">
                                <span> {date} </span>
                            </ItemMessageDate>
                        )
                    }
                    <ItemMessageName type_message="i">
                        <span> { item.data.name } </span>
                    </ItemMessageName>
                </ItemMessageData>
            </ItemContent>
            <ItemMessageImage type_message="i">
                <Image 
                    width={50}
                    height={50}
                    src={ item.data.image}
                    placeholder="blur"
                    blurDataURL={ item.data.image }
                    alt="foto de perfil"
                /> 
            </ItemMessageImage>

        </ItemMessage>
    )
}