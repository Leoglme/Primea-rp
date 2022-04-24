import {meta} from './data/meta'
import website from './static/data/website.json';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: meta,
  target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/styles/site.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui.ts',
    '~/plugins/swiper.ts'
  ],

  publicRuntimeConfig: {
    googleAnalytics: {
      id: website.GA_ID
    }
  },

  googleAnalytics: {
    id: website.GA_ID,
    proxyHeaders: false,
  },
  'google-gtag': {
    id: website.GTAG_ID,
    debug: process.env.NODE_ENV !== 'production'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  features: {
    store: false,
    middleware: true,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: true,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    teaser: true,
    indicator: false,
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
}
