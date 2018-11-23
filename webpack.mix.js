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

/*mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');*/

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
  output: {
    chunkFilename: 'chunks/[name].[chunkhash].js',
    publicPath: '/',
  },
});

Mix.listen('configReady', (webpackConfig) => {
  // Create SVG sprites  resources\client\assets\js\icons\svg
  webpackConfig.module.rules.unshift({
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: /(resources\/client\/assets\/js\/icons\/svg)/,
    options: {
      symbolId: 'icon-[name]',
    }
  });

  // Exclude 'svg' folder from font loader
  let fontLoaderConfig = webpackConfig.module.rules.find(rule => String(rule.test) === String(/(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/));
  fontLoaderConfig.exclude = /(resources\/client\/assets\/js\/icons\/svg)/;
});

mix.browserSync({
  proxy: 'localhost:8085'
});
