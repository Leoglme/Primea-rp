import Touches from "~/components/Touches/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Touches en jeu • Sigma RP"
const description = "Voici la liste des touches de notre serveur FiveM,  elle complète la liste des touches touches par défaut de gta online"
const route = "/touches/"

export default {
  name: "index",
  components: {Touches},
  head: updateHead(title, description, route)
}
