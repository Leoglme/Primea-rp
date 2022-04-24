import website from "~/static/data/website.json";

type Meta = {
  hid: string,
  content: string
}
interface MetaGoogle extends Meta {
  itemprop: string
}
interface MetaClassic extends Meta {
  name: string
}
interface MetaOpenGraph extends Meta {
  property: string
}

type Head = {
  title: string,
  meta: (MetaGoogle | MetaClassic | MetaOpenGraph)[],
  link: {}[]
}

const updateHead = (title: string, description: string, route: string): Head => {
  return {
    title: title,
    meta: [
      {hid: 'description', name: 'description', content: description},
      {hid: 'google:name', itemprop: "name", content: title},
      {hid: 'og:title', property: "og:title", content: title},
      {hid: 'twitter:title', name: "twitter:title", content: title},
      {hid: 'google:description', itemprop: 'description', content: description},
      {hid: 'og:description', property: 'og:description', content: description},
      {hid: 'twitter:description', name: 'twitter:description', content: description},
      {hid: 'identifier-url', name: 'identifier-url', content: website.url + route},
      {hid: 'og:url', name: 'og:url', content: website.url + route},
      {hid: 'twitter:url', name: 'twitter:url', content: website.url + route}
    ],
    link: [
      {hid: 'google:url', itemprop: 'url', href: website.url + route},
      {hid: 'canonical', rel: 'canonical', href: website.url + route},
      {hid: 'alternate', rel: 'alternate', href: website.url + route, hreflang: website.lang}
    ]
  }
}
export {updateHead}
