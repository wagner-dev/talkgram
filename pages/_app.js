import {
  GlobalStyle
} from '../global/styled/index'

function MyApp({ Component, pageProps }) {
  return (
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
  )
  
}

export default MyApp