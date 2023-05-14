import apiClient from '@/services/apiClient';

const state = {
  assets: [],
  assetHistory: []
};

const mutations = {
  SET_ASSETS(state, assets) {
    state.assets = assets;
  },
  SET_SELECTED_COIN(state, asset) {
    state.assetHistory = asset;
  },
  SET_SINGLE_COIN(state, assets) {
    state.assets = [assets];
  },
};

const actions = {
  async fetchAssets({ commit }) {
    const response = await apiClient.getAssets();
    const assets = response.data.data;
    commit('SET_ASSETS', assets);
  },
  async fetchAssetHistory({ commit }, coinName) {
    const response = await apiClient.getAssetHistory(coinName);
    const asset = response.data.data;
    commit('SET_SELECTED_COIN', asset);
  },
  async fetchAssetSingle({commit}, coinName) {
    const response = await apiClient.getAssetSingle(coinName);
    const asset = response.data.data;
    commit('SET_SINGLE_COIN', asset);
  }
};

const getters = {
  assets: state => state.assets,
  assetSingle: state => state.assetSingle,
  assetHistory: state => state.assetHistory,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};