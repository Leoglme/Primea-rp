import website from '../static/data/website.json'

/*Favicon Generator: https://www.favicon-generator.org/*/
export const meta = {
  title: website.title,
  htmlAttrs: {
    lang: website.lang
  },
  meta: [
    {charset: 'utf-8'},
    {hid: 'google:name', itemprop: "name", content: website.title},
    {hid: 'og:title', property: "og:title", content: website.title},
    {hid: 'twitter:title', name: "twitter:title", content: website.title},

    {hid: 'keywords', name: "keywords", content: website.keywords},

    {hid: 'description', name: 'description', content: website.description},
    {hid: 'google:description', itemprop: 'description', content: website.description},
    {hid: 'og:description', property: 'og:description', content: website.description},
    {hid: 'twitter:description', name: 'twitter:description', content: website.description},

    {hid: 'author', name: 'author', content: website.author},
    {hid: 'publisher', name: 'publisher', content: website.author},
    {hid: 'google:author', property: 'author', content: website.author},

    {hid: 'app-name', name: 'app-name', content: website.name},
    {hid: 'og:site_name', property: 'og:site_name', content: website.name},

    {hid: 'twitter:site', name: 'twitter:site', content: website.twitter},
    {hid: 'twitter:creator', name: 'twitter:creator', content: website.twitter},

    {hid: 'theme-color', name: 'theme-color', content: website.colorSecondary},
    {hid: 'msapplication-navbutton-color', name: 'msapplication-navbutton-color', content: website.colorSecondary},
    {
      hid: 'apple-mobile-web-app-status-bar-style',
      name: 'apple-mobile-web-app-status-bar-style',
      content: website.colorSecondary
    },

    {hid: 'image', name: 'image', content: website.thumbnail},
    {hid: 'google:image', itemprop: 'image', content: website.thumbnail},
    {hid: 'og:image', property: 'og:image', content: website.thumbnail},
    {hid: 'twitter:image', name: 'twitter:image', content: website.thumbnail},
    {hid: 'twitter:image:src', name: 'twitter:image:src', content: website.thumbnail},
    {hid: 'thumbnailUrl', itemprop: 'thumbnailUrl', content: website.thumbnail},

    {hid: 'identifier-url', name: 'identifier-url', content: website.url},
    {hid: 'og:url', property: 'og:url', content: website.url},
    {hid: 'twitter:url', name: 'twitter:url', content: website.url},

    {hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5'},
    {hid: 'content-language', name: 'content-language', content: website.lang},


    {hid: 'google-site-verification', name: 'google-site-verification', content: website.googleSearchConsoleId},
    {hid: 'og:type', name: 'og:type', content: "website"},
    {hid: 'reply-to', name: 'reply-to', content: website.email},
    {hid: 'robots', name: 'robots', content: "all"},
    {hid: 'rating', name: 'rating', content: "general"},
    {hid: 'distribution', name: 'distribution', content: "global"},
    {hid: 'geography', name: 'geography', content: `${website.city},${website.country},${website.postal_code}`},
    {hid: 'category', name: 'category', content: website.category},

    {hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: "#ffffff"},
    {hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: "/favicon/ms-icon-144x144.png"},
    {hid: 'msapplication-config', name: 'msapplication-config', content: "/browserconfig.xml"},
  ],
  link: [
    {hid: 'google:url', itemprop: 'url', href: website.url},
    {hid: 'canonical', rel: 'canonical', href: website.url},
    {hid: 'alternate', rel: 'alternate', href: website.url, hreflang: website.lang},

    {hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    {hid: 'icon:16', rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png'},
    {hid: 'icon:32', rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png'},
    {hid: 'icon:96', rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png'},
    {hid: 'icon:192', rel: 'icon', type: 'image/png', href: '/favicon/android-icon-192x192.png'},

    {hid: 'apple-icon:57', rel: 'apple-touch-icon', size: '57x57', href: '/favicon/apple-icon-57x57.png'},
    {hid: 'apple-icon:60', rel: 'apple-touch-icon', size: '60x60', href: '/favicon/apple-icon-60x60.png'},
    {hid: 'apple-icon:72', rel: 'apple-touch-icon', size: '72x72', href: '/favicon/apple-icon-72x72.png'},
    {hid: 'apple-icon:76', rel: 'apple-touch-icon', size: '76x76', href: '/favicon/apple-icon-76x76.png'},
    {hid: 'apple-icon:114', rel: 'apple-touch-icon', size: '114x114', href: '/favicon/apple-icon-114x114.png'},
    {hid: 'apple-icon:120', rel: 'apple-touch-icon', size: '120x120', href: '/favicon/apple-icon-120x120.png'},
    {hid: 'apple-icon:144', rel: 'apple-touch-icon', size: '144x144', href: '/favicon/apple-icon-144x144.png'},
    {hid: 'apple-icon:152', rel: 'apple-touch-icon', size: '152x152', href: '/favicon/apple-icon-152x152.png'},
    {hid: 'apple-icon:180', rel: 'apple-touch-icon', size: '180x180', href: '/favicon/apple-icon-180x180.png'},

    {hid: 'mask-icon', rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: website.colorPrimary},
    {hid: 'shortcut-icon', rel: 'shortcut icon', href: '/favicon/favicon-96x96.png'},
    {hid: 'manifest', rel: 'manifest', href: '/favicon/manifest.json'}
  ]
}

export const langAlternate = () => {
  website.languages.map((e: { lang: string, url: string }) => {
    if (e.lang !== website.lang) {
      // @ts-ignore
      meta.link.push({hid: `alternate:${e.lang}`, rel: "alternate", href: e.url, hreflang: e.lang})
    }
  })
}
langAlternate();
