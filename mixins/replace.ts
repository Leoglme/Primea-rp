export default {
  methods: {
    breakReplace(str: string): string{
      if (!str) return null
      const find = '\n';
      const re = new RegExp(find, 'g');
      return this.capitalizeFirstLetter(str).replace(re, '<br>');
    },
    capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
