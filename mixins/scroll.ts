export default {
  methods: {
    goto(id: string, range: number = 0) {
      const element = document.getElementById(id)
      if (!element) return;
      const top = element.offsetTop - range;
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
