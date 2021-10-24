import Image from 'next/image'
import {
    Body,
    Logo,
    BodyData,
} from './styled'
import LogoImage from '../../../../public/assets/logo/index.png'
import Auth from './Auth/index'
import UnAuth from './UnAuth/index'
import Loading from '../../../../global/components/Loading/index'

export default function BodyComponent({ RequestLogin, user, meta, setMeta }){
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
                {
                    meta.loading 
                    ?
                        <Loading padding='3rem 0rem' />
                    :
                        <>
                            { 
                            user.auth
                                ? <Auth 
                                    meta={meta} />
                                    
                                : <UnAuth 
                                    meta={meta}
                                    setMeta={setMeta}
                                    RequestLogin={RequestLogin} />
                            } 
                        </>
                }
            </BodyData>
        </Body>
    )
}