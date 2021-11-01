import Image from 'next/image'
import { 
    ItemMessage,
    ItemMessageImage,
    ItemMessageContent,
    ItemContent,
    ItemMessageName,
    ItemMessageDate,
} from '../styled'

export default function MessagesFromOthers({ item, date }) {
    

    return (
        <ItemMessage>
            <ItemMessageImage>
                <Image 
                width={50}
                height={50}
                src={ item.data.image}
                placeholder="blur"
                blurDataURL={ item.data.image }
                /> 
            </ItemMessageImage>
            <ItemContent>
                <ItemMessageName>
                    <span> { item.data.name } </span>
                </ItemMessageName>
                <ItemMessageContent >
                    <span>
                        { item.data.message }
                    </span>
                </ItemMessageContent>
                {
                    date && (
                        <ItemMessageDate>
                            <span> {date} </span>
                        </ItemMessageDate>
                    )
                }
            </ItemContent>

        </ItemMessage>
    )
}