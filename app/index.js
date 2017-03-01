import Koa from 'koa'
import { parseUrl } from './parser.js'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello World.'
})

app.listen("3000")

parseUrl("https://share.dmhy.org/topics/rss/rss.xml?keyword=%E5%B0%8F%E9%AD%94%E5%A5%B3%E5%AD%B8+CHS&sort_id=0&team_id=650&order=date-desc")
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })
