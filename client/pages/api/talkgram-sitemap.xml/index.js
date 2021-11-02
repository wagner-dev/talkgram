const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

export default async function SiteMap(req, res) {

    const pages = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/rooms/geral', changefreq: 'daily', priority: 1 },
        { url: '/rooms/new', changefreq: 'daily', priority: .9 },
        { url: '/rooms/:id', changefreq: 'daily', priority: 1 },
    ]
    // set head
    res.writeHead(200, {
        "Content-Type": 'application/xml'
    })
    
    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` }) 
    
    const xmlString = await streamToPromise(
        Readable.from(pages).pipe(stream)
    ).then(data => data.toString())

    res.end(xmlString)
}