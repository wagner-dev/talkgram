import Head from 'next/head'
import {
  GlobalStyle
} from '../global/styled/index'

function MyApp({ Component, pageProps }) {
  return (
        <>
          <Head>
            <meta name="google-site-verification" content="SbqRiqch0nCXFSQzaz4ySsuGnld6ytcIqjKOCpN9cOU" />

            <meta name="author" content="Wagner Leandro de Oliveira" />
            <meta name="og:author" content="Wagner Leandro de Oliveira" />

            <meta name="keywords" content="talkgram, chat, bate papo, trial, gratuito, online, web, conversar, mensagem, mensagens, enviar, tempo real, comunicação, encontros, temas, salas, criar, compartilhar" />
          </Head>

          <GlobalStyle />
          <Component {...pageProps} />
        </>
  )
  
}

export default MyApp