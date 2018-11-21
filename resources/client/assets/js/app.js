/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略
 * 也可以用作克隆对象
 * @param o
 */
window.purify = o => JSON.parse(JSON.stringify(o))


/**
 * register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

//引入vue
import Vue from 'vue';
//创建一个事件中心监听
Vue.prototype.$eventHub = new Vue();
//引入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
Vue.use(ElementUI);

/**
 * register vue components
 */

Vue.component('event-hub', require('./components/EventHub.vue'))

//路由
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

// disable message
Vue.config.productionTip = false
