import Head from 'next/head'

export default function HeadComponent({ title, description }){
    return(
        <Head>
            <title>{title}</title>
            <meta name="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
            <meta name="twitter:description" content={description} />
        </Head>
    )
}