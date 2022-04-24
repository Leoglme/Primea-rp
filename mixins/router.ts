export default {
  computed: {
    routeName() {
      const splitPath = this.$route.path.split('/').filter(e => e !== "");
      return splitPath[splitPath.length - 1];
    }
  }
}
