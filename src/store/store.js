import { createStore } from 'vuex';
import assetsModule from './modules/assets';

const store = createStore({
  modules: {
    assets: assetsModule,
  },
});

export default store;