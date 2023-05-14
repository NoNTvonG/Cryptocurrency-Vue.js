import apiClient from './axios'

export default {
  getAssets () {
    // return apiClient.get('/assets')
    return apiClient.get('/assets?limit=20&offset=0')
  },
  getAssetHistory (coin) {
    return apiClient.get(`/assets/${coin}/history?interval=d1`)
  },
  getAssetSingle (coin) {
    return apiClient.get(`/assets/${coin}`)
  }
}