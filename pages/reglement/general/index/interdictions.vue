<template>
  <ReglementView name="interdictions"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Interdictions • Primea RP"
const description = "Voici les interdictions qu'aborde le règlement de notre server."
const route = "/reglement/general/interdictions/"
export default {
  name: "interdictions",
  head: updateHead(title, description, route),
  components: {ReglementView}
}
</script>
