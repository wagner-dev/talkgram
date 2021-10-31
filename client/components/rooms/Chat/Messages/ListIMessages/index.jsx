import { memo, Fragment } from 'react'
import { 
    Body,
} from './styled'
import { formatDistanceStrict, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import MyMessages from './MyMessages/index'
import MessagesFromOthers from './MessagesFromOthers/index'
import Alert from './Alert/index'

function ListMessages({ messages }) { 

    return(
        <Body>
            {
                messages.map((item, key) => {
                    
                    const date = item.data?.date 
                        ? formatDistanceStrict( parseISO( item.data.date ), new Date(), { locale: pt }) 
                        : null 

                    return (
                        <Fragment key={key} >
                                {
                                    item.type == 'message' ?
                                        <>
                                            { item.data.who === 'user' 
                                                ? <MessagesFromOthers 
                                                    item={item}
                                                    date={date} />
                                                
                                                : <MyMessages
                                                    item={item}
                                                    date={date} />
                                            }
                                        </>
                                    : <Alert 
                                        item={item}
                                        date={date} />
                                }
                        </Fragment >
                    )
                })
            }
        </Body>
    )
}


export default memo( ListMessages )