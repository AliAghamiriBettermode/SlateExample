import got from 'got'
import { encodeBase64 } from '../utils/utils.js'
import InteractionController from '../controller/interaction-controller.js'

class BettermodeService {
  static instance: BettermodeService
  accessToken: string | undefined

  constructor() {
    this.getMemberAccessToken(process.env.NETWORK_ID!).then((accessToken) => {
      this.accessToken = accessToken
      console.log('Custom App Access token:', this.accessToken)
    })
  }

  async getMemberAccessToken(networkId: string) {
    try {
      const response = await got.post('https://api.bettermode.com', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encodeBase64(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)}`,
        },
        json: {
          query: `query{
              limitedToken(context: NETWORK, entityId: "${networkId}", networkId: "${networkId}"){
                  accessToken
              }
            }`,
          variables: {},
        },
      })

      return JSON.parse(response.body).data.limitedToken.accessToken
    } catch (e) {
      console.error('[getMemberAccessToken] Error', e)
      return null
    }
  }

  async handleSubscription(body: any) {
    // TODO: Implement this
    return {}
  }

  async handleInteraction(body: any) {
    switch (body.data.dynamicBlockKey) {
      case 'settings':
        return InteractionController.getInstance().handleSettingsInteraction(body)
      default:
        return {}
    }
  }

  static getInstance() {
    if (!BettermodeService.instance) {
      BettermodeService.instance = new BettermodeService()
    }
    return BettermodeService.instance
  }
}

export default BettermodeService






