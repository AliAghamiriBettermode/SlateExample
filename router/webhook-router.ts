import express from 'express'
import bodyParser from 'body-parser'
import WebhookController from '../controller/webhook-controller.js'

const webhookRouter = express.Router()


webhookRouter.use(
  bodyParser.json({
    verify: (req: any, res, buf) => {
      req.rawBody = buf
    },
  }),
)

webhookRouter.use(WebhookController.getInstance().webhookSignatureMiddleware)

webhookRouter.post('/', async (req, res) => {
  console.log('Received webhook')
  console.log(JSON.stringify(req.body, null, 2))
  const response = await WebhookController.getInstance().handleWebhook(req.body)
  console.log(JSON.stringify(response, null, 2))
  return res.json(response)
})

export default webhookRouter