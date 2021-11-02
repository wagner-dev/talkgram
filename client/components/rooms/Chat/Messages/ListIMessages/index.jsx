import { memo, Fragment } from 'react'
import { 
    Body,
} from './styled'
import { formatDistanceStrict, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import { zonedTimeToUtc } from 'date-fns-tz'
import MyMessages from './MyMessages/index'
import MessagesFromOthers from './MessagesFromOthers/index'
import Alert from './Alert/index'
import Empty from './Empty'

function ListMessages({ messages }) { 
    
    return(
        <Body>
            {
                messages.map((item, key) => {
                    const znData = zonedTimeToUtc(parseISO( item.data.date ), 'America/Sao_Paulo')
                    const date = item.data?.date 
                        ? formatDistanceStrict( znData, new Date(), { locale: pt }) 
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
            {
                !messages.find(item => item.type == 'message')
                ? <Empty />
                : null
            }
        </Body>
    )
}


export default memo( ListMessages )