import Document ,{ Head, Html, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
            ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })
    
            const initialProps = await Document.getInitialProps(ctx)
            return {
            ...initialProps,
            styles: (
                <>
                {initialProps.styles}
                {sheet.getStyleElement()}
                </>
            ),
            }
        } 
        finally {
            sheet.seal()
        }
    }


    render () {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
                    
                </Head>
                
                <body>
                    <NextScript />
                    <Main />
                </body>
            </Html>
        )
    }
}