import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: 'index' },
  { path: '/index', component: require('@/views/login/index.vue') },
];

export default new VueRouter({
  mode: 'history',//HTML5 History 模式
  base: '/admin',//应用的基路径
  routes,
});
