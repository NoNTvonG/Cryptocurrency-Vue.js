import apiClient from '@/services/apiClient';

const state = {
  assets: [],
};

const mutations = {
  SET_ASSETS(state, assets) {
    state.assets = assets;
  },
};

const actions = {
  async fetchAssets({ commit }) {
    const response = await apiClient.getAssets();
    const assets = response.data.data;
    commit('SET_ASSETS', assets);
  },
};

const getters = {
  assets: state => state.assets,
};

export default {
  namespaced: true, 
  state,
  mutations,
  actions,
  getters,
};