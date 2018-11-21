const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'resources', 'vueadmin')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
  },
});

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

mix.js('resources/vueadmin/main.js', 'public/js')
// .sass('resources/assets/sass/app.scss', 'public/css');

//如果是生产环境，加上版本号
if (mix.inProduction()) {
  mix.version();
}
