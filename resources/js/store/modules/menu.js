import api from '../../api/menu';

export default {
  /**
   * 状态
   */
  state: {
    lists: [],
  },
  /**
   * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
   * 注意：这里可以设置 state 属性，但是不能异步调用，异步操作写到 actions 中
   */
  mutations: {
    SETLIST: function (state, lists) {
      state.lists = lists;
    }
  },
  /**
   * Action 类似于 mutation，不同在于：
   *  Action 提交的是 mutation，而不是直接变更状态。
   *  Action 可以包含任意异步操作。
   */
  actions: {
    getMenuLists({commit}) {
      api.getMenuList().then(function(res) {
        commit('SETLIST', res.data.data);
      });
    }
  },
  /**
   * 从 store 中的 state 中派生出一些状态
   */
  getters: {
    //派生list总数的状态出来
    listCount: (state, getters) => {
      return state.lists.length;
    }
  }
};
