<template>
  <ReglementView name="civil" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import {updateHead} from "~/data/update-head";
const title = "Règlement civil • Sigma RP"
const description = "Voici le règlement civil qu'aborde le règlement de notre server."
const route = "/reglement/legal/civil/"
import ReglementView from "~/components/ReglementView/index.vue";

export default {
  name: "civil",
  head: updateHead(title, description, route),
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
