import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
// import ESLintPlugin from 'eslint-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
import brand from './static/text/brand'
import link from './static/text/link'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr'
    },
    title: brand.saas2.desc,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.saas2.desc },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ms-icon-144x144.png'
      },
      // PWA primary color
      { name: 'theme-color', content: theme.primary },
      // Facebook
      { property: 'author', content: 'GPS LVN' },
      { property: 'og:site_name', content: 'sas.gpslvn.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'sas.gpslvn.com' },
      { property: 'twitter:domain', content: 'sas.gpslvn.com' },
      { property: 'twitter:creator', content: 'GPS LVN' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: '/images/logo.png' },
      { property: 'og:url', content: brand.saas2.url },
      { property: 'og:title', content: brand.saas2.projectName },
      { property: 'og:description', content: brand.saas2.desc },
      { name: 'twitter:site', content: brand.saas2.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.saas2.img },
      { property: 'og:image', content: brand.saas2.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      // Favicon
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicons/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicons/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicons/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicons/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicons/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicons/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicons/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicons/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicons/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      // Fonts and Icons
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css'
      }
    ]
  },
  /*
    * add same of configration for router
  */
  router: {
    middleware: ['performance', 'vistPages']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: theme.primary },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.scss',
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/animate.css',
    '~/assets/vendors/animate-extends.css',
    '~/assets/vendors/hamburger-menu.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/lottie-vue-player.client.js',
    '~/store/index.js',
    '~/plugins/vue-fragment-config',
    '~/plugins/vue-wow-config',
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/vue-youtube-config', ssr: false },
    { src: '~/plugins/vue-lightbox-config', ssr: false },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/countup-config', ssr: false },
    { src: '~/plugins/vue-scroll-nav', ssr: false },
    { src: '~/plugins/vue-cookies', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxtjs/vuetify'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity
        }
      }
    ],
    ['nuxt-gmaps', { key: '' }],
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/axios'
  ],
  i18n: {
    locales: languages,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true
    },
    langDir: 'static/lang/'
  },
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js',
    theme: {
      themes: {
        light: {
          amber: '$amber',
          purple: '$purple'
        }
      }
    }
  },
  render: {
    bundleRenderer: {
      directives: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        },
        scroll: function (el, binding) {
          let f = function (evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f)
            }
          }
          window.addEventListener('scroll', f)
        }
      }
    }
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    // cssSourceMap: false,
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    },
    extend(config, ctx) {
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /Critical dependency: the request of a dependency is an expression/
        })
      )
      //      if (ctx.isDev && ctx.isClient) {
      //        config.plugins.push(
      //          new ESLintPlugin({
      //            extensions: ["js", "vue"],
      //            exclude: ["node_modules", "static"],
      //            fix: false
      //          })
      //        );
      //      }
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    },
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  },
  sitemap: {
    path: '/sitemap.xml', // The path where the sitemap will be generated
    hostname: 'https://sas.gpslvn.com', // The full URL of your website
    cacheTime: 1000 * 60 * 15, // Cache time in milliseconds (e.g., 15 minutes)
    gzip: true, // Enable Gzip compression
    exclude: [], // Pages to exclude from the sitemap
    routes: Object.values(link.saas2)
  },
  server: {
    port: 3012, // default: 3000
    host: '0.0.0.0'
  }
}
