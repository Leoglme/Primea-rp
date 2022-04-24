import reglement from "@/static/data/reglement.json"
import replace from "~/mixins/replace";
import {updateHead} from "~/data/update-head";
const title = "Catégories règlement • Sigma RP"
const description = "Voici les différentes catégories qu'aborde le règlement de notre server."
const route = "/reglement/"

export default {
  name: "ReglementPage",
  head: updateHead(title, description, route),
  mixins: [replace],
  data(){
    return {
      reglement
    }
  },
  computed: {
    description(): string{
      return this.breakReplace(this.reglement.description)
    }
  }
}
