import Vue from 'vue';
import Vuex from 'vuex';
import menus from './modules/menu';

Vue.use(Vuex);

//严格模式
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * 可以设置多个模块
   */
  modules: {
    menus
  },
  strict: debug,
});
