import apiClient from './axios'

export default {
  getAssets () {
    return apiClient.get('/assets')
  }
}