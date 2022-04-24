import sections from "@/static/data/sections.json"
import media from "~/mixins/media";
import scroll from "~/mixins/scroll";
import resize from "~/mixins/resize";


export default {
  name: "HomeCarousel",
  async fetch(){},
  mixins: [media, scroll, resize],
  fetchOnServer: false,
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 15,
        direction: 'horizontal',
        lazy: true,
        loop: true,
        grabCursor: true,
        speed: 700,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          enabled: false,
          disableOnInteraction: false
        },
        paginationClickable: true,
        parallax: true,
        mousewheelControl: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    homeSlides() {
      return sections.find(e => e.id === "home-slide")?.slides
    }
  }
}
