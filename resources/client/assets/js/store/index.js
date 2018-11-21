import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//dev 的时候指定为 严格模式
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {

  },
  strict: debug,
});
