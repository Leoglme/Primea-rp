import juridique from '~/static/data/juridique.json'
import {updateHead} from "~/data/update-head";
const title = "Liens juridiques • Sigma RP"
const description = "Voici les différents liens juridiques concernant notre server, liste des amendes, code de la route et lois."
const route = "/juridique/"

export default {
  name: "index",
  head: updateHead(title, description, route),
  data(){
    return {
      juridique
    }
  }
}
