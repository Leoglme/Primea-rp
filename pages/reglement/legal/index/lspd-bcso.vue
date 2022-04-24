<template>
  <ReglementView name="lspdbcso" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement lspd et bcso • Sigma RP"
const description = "Voici le règlement lspd et bcso qu'aborde le règlement de notre server."
const route = "/reglement/legal/lspd-bcso/"
export default {
  name: "lspd-bcso",
  components: {ReglementView},
  head: updateHead(title, description, route),
  props: {
    parentTabName: {type: String, default: ""}
  }
}
</script>
