import apiClient from './axios'

export default {
  getAssets (offset = 0) {
    // return apiClient.get('/assets')
    return apiClient.get(`/assets?limit=20&offset=${offset}`)
  },
  getAssetHistory (coin) {
    return apiClient.get(`/assets/${coin}/history?interval=d1`)
  },
  getAssetSingle (coin) {
    return apiClient.get(`/assets/${coin}`)
  }
}