<template>
  <ReglementView name="ems" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement ems • Sigma RP"
const description = "Voici le règlement ems qu'aborde le règlement de notre server."
const route = "/reglement/legal/ems/"

export default {
  name: "ems",
  components: {ReglementView},
  head: updateHead(title, description, route),
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
