export default {
  data(){
    return {
      mediaLoaded: false
    }
  },
  methods: {
    showAfterLoad(e) {
      this.mediaLoaded = true;
    },
  },
}
