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
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: website.url,
    routes: [
      { url: '/', changefreq: 'monthly', priority: 1.0, lastmod: new Date().toISOString() },
      { url: '/juridique', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
      { url: '/reglement', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
      { url: '/reglement/general', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
      { url: '/reglement/general/lexique', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/general/zones', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/general/interdictions', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/general/mort-rp', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/general/coma', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/illegal', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
      { url: '/reglement/illegal/gang', changefreq: 'weekly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/illegal/criminel', changefreq: 'weekly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/illegal/organisation', changefreq: 'weekly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/legal', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
      { url: '/reglement/legal/civil', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/legal/lspd-bcso', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/legal/ems', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/reglement/legal/entreprises', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
      { url: '/touches', changefreq: 'yearly', priority: 0.5, lastmod: new Date().toISOString() }
    ]
  },


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
