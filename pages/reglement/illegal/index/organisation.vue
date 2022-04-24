<template>
  <ReglementView name="organisation" :parentTabName="parentTabName"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement organisation • Sigma RP"
const description = "Voici le règlement organisation qu'aborde le règlement de notre server."
const route = "/reglement/illegal/organisation/"
export default {
  name: "organisation",
  head: updateHead(title, description, route),
  components: {ReglementView},
  props: {
    parentTabName: {type: String, default: null}
  }
}
</script>
