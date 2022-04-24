<template>
  <ReglementView name="mortrp"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement mort-rp • Sigma RP"
const description = "Voici le règlement mort-rp qu'aborde le règlement de notre server."
const route = "/reglement/general/mort-rp/"
export default {
  name: "mort-rp",
  head: updateHead(title, description, route),
  components: {ReglementView}
}
</script>
