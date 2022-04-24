import replace from "~/mixins/replace";
import reglement from "~/static/data/reglement.json";
import media from "~/mixins/media";

export default {
  name: "ReglementView",
  mixins: [replace, media],
  props: {
    name: {type: String, default: null},
    parentTabName: {type: String, default: 'general'}
  },
  data(){
    return {
      reglement: reglement[this.parentTabName]?.rules?.find(e => e.name.toLowerCase() === this.name)
    }
  },
  computed: {
    description(): string {
      if (!this.reglement || !this.reglement.description) return null
      return this.breakReplace(this.capitalizeFirstLetter(this.reglement.description))
    }
  }
}
