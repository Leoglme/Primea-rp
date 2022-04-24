<template>
  <ReglementView name="coma"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement coma • Primea RP"
const description = "Voici le règlement coma qu'aborde le règlement de notre server."
const route = "/reglement/general/coma/"
export default {
  name: "coma",
  head: updateHead(title, description, route),
  components: {ReglementView}
}
</script>
