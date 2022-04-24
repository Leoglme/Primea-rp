import SkeletonTabs from "~/components/Skeleton/SkeletonTabs/index.vue";
import reglement from "@/static/data/reglement.json"
import replace from "~/mixins/replace";
import router from "~/mixins/router";
import {updateHead} from "~/data/update-head";
const title = "Règlement Illégal • Sigma RP"
const description = "Les règles concernant le monde de l'illégal tel que les règles des criminels en général, Gang et Organisation. Si un changement survient, il vous sera annoncé."
const route = "/reglement/illegal/"

export default {
  name: "ReglementIlLegalPage",
  mixins: [replace, router],
  head: updateHead(title, description, route),
  components: {SkeletonTabs},
  data() {
    return {
      currentTabs: 'criminel',
      parentTabName: "illegal",
      defaultTab: "criminel",
      reglement: reglement.illegal,
      loaded: false,
      tabs: [
        {
          name: "criminel",
          to: "criminel"
        },
        {
          name: "gang",
          to: "gang"
        },
        {
          name: "organisation",
          to: "organisation"
        }
      ]
    };
  },
  beforeMount() {
    this.currentTabs = (this.routeName === this.parentTabName ? this.defaultTab : this.routeName)
    this.loaded = true;
  },
  watch: {
    $route(to) {
      const splitPath = to.path.split('/');
      this.currentTabs = splitPath[splitPath.length - 1]
    }
  },
  computed: {
    description(): string{
      return this.breakReplace(this.reglement.description)
    }
  },
}
