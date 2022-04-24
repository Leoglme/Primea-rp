<template>
  <ReglementView name="entreprises" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement entreprises • Sigma RP"
const description = "Voici le règlement entreprises qu'aborde le règlement de notre server."
const route = "/reglement/legal/entreprises/"

export default {
  name: "entreprises",
  head: updateHead(title, description, route),
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
