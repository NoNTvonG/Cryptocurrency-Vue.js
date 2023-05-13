import apiClient from './axios'

export default {
  getAssets () {
    return apiClient.get('/assets')
  },
  getSingleAsset (coin) {
    return apiClient.get(`/assets/${coin}/history?interval=d1`)
  }
}