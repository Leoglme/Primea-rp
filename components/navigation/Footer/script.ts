import LogoSmall from "~/components/common/LogoSmall/index.vue";
import footer_data from '~/static/data/navs.json';
import website from '~/static/data/website.json'

export default  {
  name: "Footer",
  data(){
    return {
      links: footer_data.footer.links,
      website_name: website.name,
      website_author: {
        name: website.author,
        url: website.author_website
      },
      social_media: footer_data.footer.social_media
    }
  },
  components: {LogoSmall}
}
