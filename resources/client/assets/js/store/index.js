import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import errorLog from './modules/errorLog';
import tagsView from './modules/tagsView';
import getters from './getters';

Vue.use(Vuex);

//dev 的时候指定为 严格模式
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    app,
    errorLog,
    //permission,
    tagsView,
    //user
  },
  getters,
  strict: debug,
});
