export default {
  data() {
    return {
      matchSm: this.breakpointSm(),
      matchMd: this.breakpointMd(),
      screenWidth: process.browser ? window.innerWidth : null,
      base_screenWidth: process.browser ? window.innerWidth : null,
      base_screenHeight: process.browser ? window.innerHeight : null,
    }
  },
  beforeMount() {
    this.base_screenWidth = process.browser ? window.innerWidth : null
    this.base_screenHeight = process.browser ? window.innerHeight : null
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  computed: {
    fullHeight(): number {
      if (this.base_screenWidth <= 650) return 500
      return Math.ceil(this.base_screenHeight)
    },
    fullWidth(): number {
      if (this.base_screenWidth <= 650) return 500
      return Math.ceil(this.base_screenWidth)
    },
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
      this.matchSm = this.breakpointSm()
      this.matchMd = this.breakpointMd()
    },
    breakpointSm(): boolean {
      if (!process.browser) return false;
      return window.innerWidth <= 850;
    },
    breakpointMd(): boolean  {
      if (!process.browser) return false;
      return window.innerWidth <= 768;
    },
  }

}
