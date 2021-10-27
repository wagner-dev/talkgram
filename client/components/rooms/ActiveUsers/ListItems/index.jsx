import { memo } from 'react'
import Image from 'next/image'
import {
    User,
    UserImage,
    UserName
} from './styled'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

function ListItems({ activeUsers }) {

    const Row = ({ index, style }) => {
        const item = activeUsers[index]
        const { image, name } = item

        return (
            <AutoSizer style={style}>
                {({ height }) => (
                    <User>
                        <UserImage>
                            <Image 
                            src={image}
                            width={50}
                            height={height}
                            placeholder="blur"
                            blurDataURL={image} />
                        </UserImage>
                        <UserName>
                            <span>{name}</span>
                        </UserName>
                    </User>
                )}
            </AutoSizer>
        )
    }

    return(
        <>
            {
                activeUsers.length ?
                            <>
                                <FixedSizeList
                                height={500}
                                width={'103%'}
                                itemSize={70}
                                itemCount={activeUsers.length}
                                >
                                    { Row }
                                </FixedSizeList>
                            </>
                : null
            }
        </>
    )

}


export default memo( ListItems )