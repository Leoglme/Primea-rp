<template>
  <ReglementView name="gang" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement gang • Sigma RP"
const description = "Voici le règlement gang qu'aborde le règlement de notre server."
const route = "/reglement/illegal/gang/"

export default {
  name: "gang",
  head: updateHead(title, description, route),
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
