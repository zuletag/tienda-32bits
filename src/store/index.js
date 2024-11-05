import { createStore } from 'vuex';
import state from './modules/juegosState';
import actions from './modules/juegosActions';
import mutations from './modules/juegosMutations';
import getters from './modules/juegosGetters';

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
