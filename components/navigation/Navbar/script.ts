import Logo from "~/components/common/Logo/index.vue";
import navs from '@/static/data/navs.json';
import router from "~/mixins/router";

interface Link {
  "role": string,
  "name": string,
  "to": string | undefined
}

export default {
  name: "Navbar",
  components: {Logo},
  mixins: [router],
  data() {
    return {
      menuOpened: false,
      links: navs.navbar.links,
      swiperOption: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto'
      }
    }
  },
  methods: {
    isActive(to: string): boolean{
      return to.replace("/", "") === (this.routeName || '')
    },
    isActiveSubMenu(to: string, sub: string = null){
      if (!sub){
        const newTo = to.split('/').filter(e => e !== "");
        return newTo[newTo.length - 1] === (this.routeName || '')
      }
      return this.$route.path.includes(sub);
    }
  }
}
