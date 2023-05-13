import apiClient from '@/services/apiClient';

const state = {
  assets: [],
  assetSingle: []
};

const mutations = {
  SET_ASSETS(state, assets) {
    state.assets = assets;
  },
  SET_SELECTED_COIN(state, asset) {
    state.assetSingle = asset;
  },
};

const actions = {
  async fetchAssets({ commit }) {
    const response = await apiClient.getAssets();
    const assets = response.data.data;
    commit('SET_ASSETS', assets);
  },
  async fetchSingleAsset({ commit }, coinName) {
    const response = await apiClient.getSingleAsset(coinName);
    const asset = response.data.data;
    commit('SET_SELECTED_COIN', asset);
  },
};

const getters = {
  assets: state => state.assets,
  assetSingle: state => state.assetSingle,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};