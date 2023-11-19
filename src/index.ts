import { Hono } from 'hono'
import { query } from '@ifyour/deeplx'

const app = new Hono()

// Proxy server to resolve error 525, see: https://github.com/cloudflare/workerd/issues/776
const proxyEndpoint = 'https://cors.mingming.dev/https://www2.deepl.com/jsonrpc'

app
  .get('/', (c) => c.redirect('/translate'))
  .get('/translate', (c) => c.text('Please use POST method :)'))
  .post('/translate', async (c) => {
    const params = await c.req.json().catch(() => ({}))
    const result = await query(params, { proxyEndpoint })
    return c.json(result, result.code)
  })

export default app
