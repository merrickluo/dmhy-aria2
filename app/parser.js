import FeedParser from 'feedparser'
import request from 'request'

export function parseUrl(url) {
  return new Promise((resolve, reject) => {
    const req = request(url)
    const parser = new FeedParser()

    // put result here
    const results = []

    // get feed data
    req.on('error', reject)
    req.on('response', (resp) => {
      req.pipe(parser)
    })
    
    // parse
    parser.on('error', reject)
    parser.on('readable', () => {
      const item = parser.read()
      if (item) {
        results.push({
          title: item['rss:title']['#'],
          url: item['rss:enclosure']['@']['url']
        })
      }
    })

    // return when parse finish
    parser.on('end', () => {
      resolve(results)
    })
  })
}
