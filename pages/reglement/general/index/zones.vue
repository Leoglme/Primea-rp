<template>
  <ReglementView name="zones"/>
</template>

<script lang="ts">
import ReglementView from "~/components/ReglementView/index.vue";
import {updateHead} from "~/data/update-head";
const title = "Règlement zones • Sigma RP"
const description = "Voici le règlement zones qu'aborde le règlement de notre server."
const route = "/reglement/general/zones/"

export default {
  name: "zones",
  head: updateHead(title, description, route),
  components: {ReglementView}
}
</script>
