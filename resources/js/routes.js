export default [
  { path: '/', redirect: 'index' },
  { path: '/index', component: require('./views/404.vue') },
  // 菜单路由
  { path: '/menus', component: require('./views/menus/Index.vue') },
  { path: '/menus/create', component: require('./views/menus/Create.vue') },
];
