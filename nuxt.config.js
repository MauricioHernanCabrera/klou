const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/klou/'
  }
} : {}

module.exports = {
  ...routerBase,
  /*
  ** Headers of the page
  */
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],
  head: {
    title: 'KLOU Estudio Creativo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Practicando con nuxt' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: 'https://hernancabrera.github.io/klou/' },
      { name: 'twitter:title', content: 'KLOU Estudio Creativo' },
      { name: 'twitter:description', content: 'Practicando con nuxt' },
      { name: 'twitter:creator', content: 'Cabrera Mauricio Hernan' },
      { name: 'twitter:image', content: 'compartir_facebook.jpg' },
      { name: 'twitter:image:src', content: 'compartir_facebook.jpg' },
      { name: 'twitter:domain', content: 'https://hernancabrera.github.io/klou/' },
      { property: 'og:title', content: 'KLOU Estudio Creativo' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hernancabrera.github.io/klou/' },
      { property: 'og:image', content: 'compartir_facebook.jpg' },
      { property: 'og:site_name', content: 'https://hernancabrera.github.io/klou/' },
      { property: 'og:description', content: 'Practicando con nuxt' },
      { itemprop: 'description', content: 'Practicando con nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon2.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Raleway:400,600,700,300,500,800,900' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=PT+Sans:400,700' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
