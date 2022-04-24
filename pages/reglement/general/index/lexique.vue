<template>
  <ReglementView name="lexique"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement lexique • Sigma RP"
const description = "Voici le règlement lexique qu'aborde le règlement de notre server."
const route = "/reglement/general/lexique/"
export default {
  name: "lexique",
  head: updateHead(title, description, route),
  components: {ReglementView}
}
</script>
