import axios from 'axios';

export default {
  //菜单列表
  getMenuList: function (params) {
    return axios.get('/api/menus', {
      params: params
    });
  }
};
