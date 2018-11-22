const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/client/assets/js/app.js', 'public/client/js')
  //.sass('resources/client/assets/sass/app.scss', 'public/client/css')
  .extract([
    'axios',
    'lodash',
    'vue',
    'vue-router',
    'vuex',
    'element-ui',
  ])
  .version();

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': __dirname + '/resources/client/assets/js'
    },
  },
});

mix.browserSync({
  proxy: 'localhost:8085'
});
